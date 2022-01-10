"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consola = require('consola');
class Logger {
    constructor() {
        this.logs = [];
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    addLog(text) {
        let now = new (Date);
        this.logs.push([now.toISOString(), text]);
    }
    info(text) {
        consola.info(text);
        this.addLog(text);
    }
    success(text) {
        consola.success(text);
        this.addLog(text);
    }
    error(text) {
        consola.error(text);
        this.addLog(text);
    }
}
exports.default = Logger;
