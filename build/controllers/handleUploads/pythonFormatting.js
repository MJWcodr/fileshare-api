"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const File_1 = __importDefault(require("../File"));
function pythonFormatting(file) {
    let fileName = file.name;
    let fileDir = file.tempFilePath;
    let fileData = fs_1.default.readFileSync(fileDir);
    return new File_1.default(fileName, fileData, fileDir);
}
exports.default = pythonFormatting;
