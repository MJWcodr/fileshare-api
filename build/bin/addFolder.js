"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
function addFolder(folderName) {
    const _datadir = "./data/files";
    if (!node_fs_1.default.existsSync(_datadir)) {
        node_fs_1.default.mkdir(_datadir, (err) => {
            console.log(!node_fs_1.default.existsSync(_datadir));
            console.error(err);
        });
    }
    const _filedir = _datadir + "/" + folderName;
    console.log(`--debug--
    `);
    console.log(_filedir);
    console.log(`
--debug--
`);
}
exports.default = addFolder;
