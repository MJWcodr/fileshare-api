"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("../variables");
const fs_1 = __importDefault(require("fs"));
const pythonFormatting_1 = __importDefault(require("./handleUploads/pythonFormatting"));
const RequestHandler_1 = __importDefault(require("./RequestHandler"));
const Logger_1 = __importDefault(require("../logger/Logger"));
const logger = Logger_1.default.getInstance();
class UploadRequest extends RequestHandler_1.default {
    constructor(req, res) {
        super(req, res);
        this.files = this.getFileArray(req.files);
        this.saveFileArray();
        logger.info(`successfully uploaded ${this.id}`);
        this.sendResponse();
    }
    getFileArray(files) {
        let out = [];
        for (let i = 0; i < files.files.length; i++) {
            const element = files.files[i];
            out.push((0, pythonFormatting_1.default)(element));
        }
        return out;
    }
    saveFileArray() {
        let prePath = variables_1.dataDir + this.id + '/';
        if (!fs_1.default.existsSync(prePath)) {
            fs_1.default.mkdirSync(prePath);
        }
        for (let i = 0; i < this.files.length; i++) {
            const file = this.files[i];
            let savePath = `${prePath}${file.name}`;
            fs_1.default.writeFileSync(savePath, file.data);
        }
    }
    getStatus() {
        return {
            'fullfilled': this.fullfilled,
            'id': this.id,
        };
    }
    sendResponse() {
        let response = {
            'id': this.id,
            'status': 'success',
            'url': `${(0, variables_1.siteUrl)()}/${this.id}/`
        };
        this.res.json(response);
    }
}
exports.default = UploadRequest;
