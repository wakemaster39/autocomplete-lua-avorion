"use strict";
const CUT = require("../lib/update");
const Utils = require("../lib/utils");
const TypeMoq = require("typemoq");
const fs = require("fs");
const sinon = require("sinon");
describe("checkForUpdate", () => {
    let windowMock;
    let config;
    let atom;
    let notifications;
    beforeEach(() => {
        atom = TypeMoq.Mock.ofType();
        config = TypeMoq.Mock.ofType();
        notifications = TypeMoq.Mock.ofType();
        windowMock = TypeMoq.Mock.ofType();
        windowMock.setup(x => x.atom).returns(() => atom.object);
        atom.setup(x => x.notifications).returns(() => notifications.object);
        atom.setup(x => x.config).returns(() => config.object);
        global.window = windowMock.object;
    });
    it("tes", sinon.test(function () {
        this.stub(Utils, "verifyPathIsAvorionDocumentationDirectory", (t, y) => { console.log(t); return false; });
        this.stub(fs, "existsSync", (location) => true);
        config.setup(x => x.get('autocomplete-lua-avorion.avorionPath')).returns(() => "test");
        CUT.checkForUpdate(false);
    }));
});
