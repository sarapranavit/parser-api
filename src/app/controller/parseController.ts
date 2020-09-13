import { PostParseResponse } from '../model/postParseModel';
import { config } from '../config'
import { splitKeep } from '../utils/splitKeep';

export class ParseHandler {

   private appVersion: string = process.env.APP_VERSION;

    public postParserInput = (req, res) => {
        try {

            const data = req.body.data;
            
            let result:PostParseResponse = <PostParseResponse>{};

            const regEx: RegExp = config.REGEX_TYPE;
            let response: any;
        
            result.statusCode = 200;

            if(this.appVersion == config.APP_VERSION_V2){
                response = data.split(regEx);
                let clientId  = splitKeep(response[2],/9+/g);  // Split client id based on 9+
                let parsedClientId:string = `${clientId[0]}-${clientId[1]}`;
            
                result.data = {
                    firstName: response[0],
                    lastname: response[1],
                    clientId: parsedClientId
                }
            }
            else {
                response = splitKeep(data, regEx);
                result.data = {
                    firstName: response[0],
                    lastname: response[1],
                    clientId: response[2]
                }
            }
            res.status(200).json(result);
        }
        catch(error){
            console.log("error", error);
            res.status(500).json(error);
        }
    }
}