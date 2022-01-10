import { response, Router } from "express";
import RequestHandler from "../controllers/RequestHandler";
import UploadRequest from "../controllers/UploadRequest";
import Logger from "../logger/Logger";

const logger = Logger.getInstance()
const router = Router();

//TODO: remove in production
router.route('/')
    .get((req, res) => {
        res.send('Endpoint not Connected').status(500)
    })

router.route('/test')
    .get((req, res) => {
        const responseText = 'text'
        res.send('test')
    })

router.route('/upload')
    .get((req, res) => {
        res.send('Only post method supported')
    })
    .post((req, res) => {
        let uploadRequest = new UploadRequest(req, res)
    })

export default router;