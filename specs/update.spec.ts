import {checkForUpdate} from "../lib/update"
import * as TypeMoq from "typemoq";
import {It, Times} from "typemoq"


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

    notifications.verify(x => x.addError(It.isAnyString()), Times.once())
  })
})
