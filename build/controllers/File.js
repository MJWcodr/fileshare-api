"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class File {
    constructor(fileName, fileData, filePath) {
        this.data = fileData;
        this.name = fileName;
        if (filePath) {
            this.path = filePath;
        }
    }
}
exports.default = File;
