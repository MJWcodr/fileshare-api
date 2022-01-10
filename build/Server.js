"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("./routes/home"));
const Logger_1 = __importDefault(require("./logger/Logger"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
class Server {
    constructor() {
        const app = (0, express_1.default)();
        this.app = app;
        // middleware
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use(express_1.default.json()); // To parse the incoming requests with JSON payloads
        app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            tempFileDir: '/tmp/'
        }));
        // routes
        app.use('/api', home_1.default);
    }
    getInstance() {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    }
    start(port) {
        const logger = Logger_1.default.getInstance();
        this.app.listen(port, () => logger.success(`Server listening on port ${port}!`));
    }
}
exports.Server = Server;
