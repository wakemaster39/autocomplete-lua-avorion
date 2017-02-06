declare var __LOG__: any;

interface Provider{
  priority: number
  getOptions: Function
  dispose: Function
}

interface Utils{
  reviveOptions(options: Object)
  mergeOptions(previousOptions: Object, newOptions: Object)
  mergeOptionsCache(previousOptions: Object, newOptions: Object, cache: Object)
  
}

export default class DefaultProvider implements Provider{
  priority=20;

  getOptions = function(requests, getPreviousOptions: Function, utils: Object, cache){
    const previousOptions = getPreviousOptions()
    __LOG__ && console.log('Defold detected. Passing autocomplete options...')

    const options = this.getAvorionOptions(utils)
  };

  getAvorionOptions(utils: Object){

  };

  dispose = function(){

  };
}
