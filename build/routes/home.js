"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UploadRequest_1 = __importDefault(require("../controllers/UploadRequest"));
const Logger_1 = __importDefault(require("../logger/Logger"));
const logger = Logger_1.default.getInstance();
const router = (0, express_1.Router)();
//TODO: remove in production
router.route('/')
    .get((req, res) => {
    res.send('Endpoint not Connected').status(500);
});
router.route('/test')
    .get((req, res) => {
    const responseText = 'text';
    res.send('test');
});
router.route('/upload')
    .get((req, res) => {
    res.send('Only post method supported');
})
    .post((req, res) => {
    let uploadRequest = new UploadRequest_1.default(req, res);
});
exports.default = router;
