"use strict";
require("./extensions/stringExtensions");
const fs = require("fs");
exports.updateStorageKey = "avorionLastUpdateAt";
function parseDocumentation(docs, options) {
}
function checkForUpdate(force = false) {
    let location = window.atom.config.get("autocomplete-lua-avorion.avorionPath");
    if (String.isNullOrEmpty(location) || String.isNullOrBlank(location)) {
        window.atom.notifications.addError("Avorion path is not set, unable to parse documentation");
        return;
    }
    if (!fs.existsSync(location)) {
        window.atom.notifications.addError("Avorion path does not exist, unable to parse documentation");
        return;
    }
    if (!fs.lstatSync(location).isDirectory()) {
        window.atom.notifications.addError("Avorion path is not set to a directory, unable to parse documentation");
        return;
    }
    _checkForUpdates(force);
}
exports.checkForUpdate = checkForUpdate;
function _checkForUpdates(force) {
    if (!force && window.atom.config.get('autocomplete-lua-avorion.checkForUpdates')) {
        return false;
    }
    let lastUpdate = null;
    try {
        lastUpdate = window.localStorage.getItem(exports.updateStorageKey);
    }
    catch (ex) { }
}
