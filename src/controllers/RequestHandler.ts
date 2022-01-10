import Logger from "../logger/Logger";
import pythonFormatting from "./handleUploads/pythonFormatting";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import crypto from "crypto";
import { idLength } from "../variables";


export default class RequestHandler {

    fullfilled: boolean;
    id: string;
    body?: object;
    scheme?: string | string[];
    res: Response<any, Record<string, any>, number>;

    constructor(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        this.res = res;

        if (req.body) {
            this.body = req.body
        }
        if (req.headers) {
            if (req.headers.scheme != undefined && typeof String) {
                this.scheme = req.headers.scheme
            }
        }
        if (req.headers.id != undefined && typeof String) {
            this.id = req.headers.id as string;
        } else {
            this.id = crypto.randomBytes(idLength).toString('hex')
        }
        this.fullfilled = true
    }
    sendResponse() {
        let response = {
            'id': this.id,
            'status': 'success'
        }
        this.res.json(response)
    }
}
