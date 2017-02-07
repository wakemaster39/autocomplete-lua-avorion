import {verifyPathIsAvorionDocumentationDirectory} from "./utils"

export const updateStorageKey = "avorionLastUpdateAt"
const documentationFileName = "Functions.html"

function parseDocumentation(docs, options) {

}
export function checkForUpdate(force: boolean = false): void {
    let location: string = window.atom.config.get("autocomplete-lua-avorion.avorionPath")
    if (!verifyPathIsAvorionDocumentationDirectory(location, documentationFileName)) return;
    // _checkForUpdates(force)
}

function _checkForUpdates(force: boolean) {
    if (!force && window.atom.config.get('autocomplete-lua-avorion.checkForUpdates')) {
        return false;
    }

    let lastUpdate = null
    try {
        lastUpdate = window.localStorage.getItem(updateStorageKey)
    } catch (ex) { }


}
