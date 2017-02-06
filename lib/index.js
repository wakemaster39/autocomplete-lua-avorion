"use strict";
const provider_1 = require("./provider");
window.__LOG__ = window.localStorage.getItem('__LOG__');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
    getOptionProvider() {
        return new provider_1.default();
    }
};
