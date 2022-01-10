import { Express, Request, Response } from "express";
import express from "express";
import home from './routes/home'
import Logger from "./logger/Logger";
import bodyparser from "body-parser";
import fileUpload from "express-fileupload";

export class Server {

    private static instance: Server;
    constructor() {
        const app = express();
        this.app = app;

        // middleware
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json()) // To parse the incoming requests with JSON payloads
        app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/'
        }));

        // routes
        app.use('/api', home)
    }

    getInstance() {
        if (!Server.instance) {
            Server.instance = new Server()
        }
        return Server.instance
    }
    private app: Express;

    public start(port: number): void {
        const logger = Logger.getInstance();
        this.app.listen(port, () => logger.success(`Server listening on port ${port}!`));
    }
}


