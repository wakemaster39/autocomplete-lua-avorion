import "./extensions/stringExtensions"
import * as fs from 'fs'

export const updateStorageKey = "avorionLastUpdateAt"

function parseDocumentation (docs, options) {

}

export function checkForUpdate(force: boolean = false): void{
  let location: string = window.atom.config.get("autocomplete-lua-avorion.avorionPath")
  if(String.isNullOrEmpty(location) || String.isNullOrBlank(location)){
    window.atom.notifications.addError("Avorion path is not set, unable to parse documentation")
    return
  }
  if(!fs.existsSync(location))
  {
    window.atom.notifications.addError("Avorion path does not exist, unable to parse documentation")
    return
  }
  if(!fs.lstatSync(location).isDirectory()){
    window.atom.notifications.addError("Avorion path is not set to a directory, unable to parse documentation")
    return
  }
  _checkForUpdates(force)
}

function _checkForUpdates(force: boolean){
  if(!force && window.atom.config.get('autocomplete-lua-avorion.checkForUpdates')){
    return false;
  }

  let lastUpdate = null
  try{
    lastUpdate = window.localStorage.getItem(updateStorageKey)
  } catch(ex){}


}
