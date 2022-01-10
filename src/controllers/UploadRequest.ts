import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { dataDir, siteUrl } from "../variables";
import fs from 'fs'
import File from "./File";
import pythonFormatting from "./handleUploads/pythonFormatting";
import RequestHandler from "./RequestHandler";
import Logger from "../logger/Logger";

const logger = Logger.getInstance()

export default class UploadRequest extends RequestHandler {
    files: Array<File>;
    constructor(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        super(req, res);
        this.files = this.getFileArray(req.files)
        this.saveFileArray()
        logger.info(`successfully uploaded ${this.id}`)

        this.sendResponse()

    }

    getFileArray(files: any) {
        let out = []
        for (let i = 0; i < files.files.length; i++) {
            const element = files.files[i];
            out.push(pythonFormatting(element))
        }

        return out
    }
    saveFileArray() {
        let prePath: string = dataDir + this.id + '/'

        if (!fs.existsSync(prePath)) {
            fs.mkdirSync(prePath)

        }

        for (let i = 0; i < this.files.length; i++) {
            const file = this.files[i];

            let savePath: string = `${prePath}${file.name}`
            fs.writeFileSync(savePath, file.data)

        }
    }
    public getStatus() {
        return {
            'fullfilled': this.fullfilled,
            'id': this.id,
        }
    }
    override sendResponse(): void {
        let response = {
            'id': this.id,
            'status': 'success',
            'url': `${siteUrl()}/${this.id}/`
        }
        this.res.json(response)
    }
   
}