import Logger from "./logger/Logger";
import { Server } from "./Server";
import dotenv from "dotenv"

dotenv.config()


const port = Number(process.env.PORT) || 3090;
const server = new (Server)
const logger = Logger.getInstance()

server.start(port)
