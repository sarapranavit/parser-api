import express from  'express';
import { validate } from 'express-validation';
import { config, setAppVersion } from '../config'
import { ParseHandler } from '../controller/parseController';
import { postPayloadValidation } from '../validater/validater' ;

const appVersion = config.APP_VERSION_V2; 
setAppVersion(appVersion); //set version v2

const router = express.Router();
const parseHandler: ParseHandler = new ParseHandler();


router.post("/parse", validate(postPayloadValidation()), parseHandler.postParserInput)

module.exports = router;