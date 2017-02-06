"use strict";
const update_1 = require("../lib/update");
const TypeMoq = require("typemoq");
const typemoq_1 = require("typemoq");
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
        notifications.verify(x => x.addError(typemoq_1.It.isAnyString()), typemoq_1.Times.once());
    });
});
