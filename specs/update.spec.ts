import {checkForUpdate} from "../lib/update"
import * as TypeMoq from "typemoq";
import {It, Times} from "typemoq"
import * as fs from 'fs'
import * as sinon from 'sinon'


describe("checkForUpdate", ()=>{
  let windowMock: TypeMoq.IMock<Window>;
  let config: TypeMoq.IMock<AtomCore.IConfig>;
  let atom: TypeMoq.IMock<AtomCore.IAtom>;
  let notifications: TypeMoq.IMock<AtomCore.INotifications>;

  beforeEach(()=>{
    atom = TypeMoq.Mock.ofType<AtomCore.IAtom>();
    config = TypeMoq.Mock.ofType<AtomCore.IConfig>();
    notifications = TypeMoq.Mock.ofType<AtomCore.INotifications>();
    windowMock = TypeMoq.Mock.ofType<Window>();
    windowMock.setup(x=>x.atom).returns(()=>atom.object);
    atom.setup(x=>x.notifications).returns(()=>notifications.object);
    atom.setup(x=>x.config).returns(()=>config.object);
    global.window = windowMock.object;
  })



  it("raise error notification if location is blank", ()=>{
    config.setup(x=>x.get("autocomplete-lua-avorion.avorionPath")).returns(()=>"")
    checkForUpdate();
    notifications.verify(x => x.addError("Avorion path is not set, unable to parse documentation"), Times.once())
  })

  it("raise error notification if location does not exist", sinon.test((t)=>{
    console.log(t)
    this.stub(fs,"existsSync",(location: string)=> false)

    config.setup(x=>x.get("autocomplete-lua-avorion.avorionPath")).returns(()=>"test")
    checkForUpdate();

    notifications.verify(x => x.addError("Avorion path does not exist, unable to parse documentation"), Times.once())
  }))

  it("raise error notification if location is not directory should", sinon.test(()=>{
    sinon.stub(fs,"existsSync",(location: string)=> true)
    sinon.stub(fs,"lstatSync",(location: string)=>{
      var t =TypeMoq.Mock.ofType<fs.Stats>();
      t.setup(x=>x.isDirectory()).returns(()=>false)
      return t.object
    })

    config.setup(x=>x.get("autocomplete-lua-avorion.avorionPath")).returns(()=>"test")
    checkForUpdate();

    notifications.verify(x => x.addError(It.isAnyString()), Times.once())

    sinon.restore(fs.existsSync)
    sinon.restore(fs.lstatSync)
  }))

  it("raise error notification if it is unable to find global documentation", sinon.test(()=>{
    sinon.stub(fs,"lstatSync",(location: string)=>{
      var t =TypeMoq.Mock.ofType<fs.Stats>();
      t.setup(x=>x.isDirectory()).returns(()=>true)
      return t.object
    })
  }))
})
