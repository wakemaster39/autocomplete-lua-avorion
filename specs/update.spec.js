"use strict";
const update_1 = require("../lib/update");
const TypeMoq = require("typemoq");
const typemoq_1 = require("typemoq");
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
    it("raise error notification if location is blank", () => {
        config.setup(x => x.get("autocomplete-lua-avorion.avorionPath")).returns(() => "");
        update_1.checkForUpdate();
        notifications.verify(x => x.addError("Avorion path is not set, unable to parse documentation"), typemoq_1.Times.once());
    });
    it("raise error notification if location does not exist", sinon.test((t) => {
        console.log(t);
        this.stub(fs, "existsSync", (location) => false);
        config.setup(x => x.get("autocomplete-lua-avorion.avorionPath")).returns(() => "test");
        update_1.checkForUpdate();
        notifications.verify(x => x.addError("Avorion path does not exist, unable to parse documentation"), typemoq_1.Times.once());
    }));
    it("raise error notification if location is not directory should", sinon.test(() => {
        sinon.stub(fs, "existsSync", (location) => true);
        sinon.stub(fs, "lstatSync", (location) => {
            var t = TypeMoq.Mock.ofType();
            t.setup(x => x.isDirectory()).returns(() => false);
            return t.object;
        });
        config.setup(x => x.get("autocomplete-lua-avorion.avorionPath")).returns(() => "test");
        update_1.checkForUpdate();
        notifications.verify(x => x.addError(typemoq_1.It.isAnyString()), typemoq_1.Times.once());
        sinon.restore(fs.existsSync);
        sinon.restore(fs.lstatSync);
    }));
    it("raise error notification if it is unable to find global documentation", sinon.test(() => {
        sinon.stub(fs, "lstatSync", (location) => {
            var t = TypeMoq.Mock.ofType();
            t.setup(x => x.isDirectory()).returns(() => true);
            return t.object;
        });
    }));
});
