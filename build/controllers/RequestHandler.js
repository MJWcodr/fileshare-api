"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const variables_1 = require("../variables");
class RequestHandler {
    constructor(req, res) {
        this.res = res;
        if (req.body) {
            this.body = req.body;
        }
        if (req.headers) {
            if (req.headers.scheme != undefined && typeof String) {
                this.scheme = req.headers.scheme;
            }
        }
        if (req.headers.id != undefined && typeof String) {
            this.id = req.headers.id;
        }
        else {
            this.id = crypto_1.default.randomBytes(variables_1.idLength).toString('hex');
        }
        this.fullfilled = true;
    }
    sendResponse() {
        let response = {
            'id': this.id,
            'status': 'success'
        };
        this.res.json(response);
    }
}
exports.default = RequestHandler;
