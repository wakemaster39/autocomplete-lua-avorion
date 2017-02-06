import "./extensions/stringExtensions"

function parseDocumentation (docs, options) {

}


export function checkForUpdate(){
    let location: string = window.atom.config.get("autocomplete-lua-avorion.avorionPath")
  if(String.isNullOrEmpty(location) || String.isNullOrBlank(location)){
    window.atom.notifications.addError("Avorion path is not set, unable to parse documentation")
    return
  }
}
