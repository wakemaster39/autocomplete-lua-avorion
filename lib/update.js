"use strict";
const utils_1 = require("./utils");
exports.updateStorageKey = "avorionLastUpdateAt";
const documentationFileName = "Functions.html";
function parseDocumentation(docs, options) {
}
function checkForUpdate(force = false) {
    let location = window.atom.config.get("autocomplete-lua-avorion.avorionPath");
    if (!utils_1.verifyPathIsAvorionDocumentationDirectory(location, documentationFileName))
        return;
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
