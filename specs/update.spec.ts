import * as CUT from "../lib/update"
import * as Utils from "../lib/utils"
import * as TypeMoq from "typemoq";
import { It, Times } from "typemoq"
import * as fs from 'fs'
import * as sinon from 'sinon'
import { assert } from 'chai'



describe("checkForUpdate", () => {
    let windowMock: TypeMoq.IMock<Window>;
    let config: TypeMoq.IMock<AtomCore.IConfig>;
    let atom: TypeMoq.IMock<AtomCore.IAtom>;
    let notifications: TypeMoq.IMock<AtomCore.INotifications>;

    beforeEach(() => {
        atom = TypeMoq.Mock.ofType<AtomCore.IAtom>();
        config = TypeMoq.Mock.ofType<AtomCore.IConfig>();
        notifications = TypeMoq.Mock.ofType<AtomCore.INotifications>();
        windowMock = TypeMoq.Mock.ofType<Window>();
        windowMock.setup(x => x.atom).returns(() => atom.object);
        atom.setup(x => x.notifications).returns(() => notifications.object);
        atom.setup(x => x.config).returns(() => config.object);
        global.window = windowMock.object;
    })

    it("tes", sinon.test(function(){
        this.stub(Utils, "verifyPathIsAvorionDocumentationDirectory", (t:string,y:string): boolean => {console.log(t); return false;})
        this.stub(fs, "existsSync", (location: string) => true)
        config.setup(x=>x.get('autocomplete-lua-avorion.avorionPath')).returns(()=>"test")
        CUT.checkForUpdate(false);
    }))

})
