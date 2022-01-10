"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteUrl = exports.idLength = exports.dataDir = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// directory to save files at
exports.dataDir = "./data/files/";
// sets length of request ID
exports.idLength = 3;
// complex/environment variables
const siteUrl = () => {
    if (process.env.SITE_URL) {
        return process.env.SITE_URL;
    }
    else {
        dotenv_1.default.config();
        return process.env.SITE_URL;
    }
};
exports.siteUrl = siteUrl;
