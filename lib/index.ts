

import DefaultProvider from "./provider"

window.__LOG__ = window.localStorage.getItem('__LOG__')


export default {
  config: {
    checkForUpdates: {
      type: 'boolean',
      default: true,
      title: 'Check for updates to Avorions library definitions',
      order: 0
    },
    avorionPath: {
      type: 'string',
      default: '',
      title: 'Path to Avorions installation folder',
      order: 1
    }
  },

  getOptionProvider () {
    return new DefaultProvider()
  }
}
