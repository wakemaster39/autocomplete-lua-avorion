"use strict";
class DefaultProvider {
    constructor() {
        this.priority = 20;
        this.getOptions = function (requests, getPreviousOptions, utils, cache) {
            const previousOptions = getPreviousOptions();
            __LOG__ && console.log('Defold detected. Passing autocomplete options...');
            const options = this.getAvorionOptions(utils);
        };
        this.dispose = function () {
        };
    }
    getAvorionOptions(utils) {
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DefaultProvider;
