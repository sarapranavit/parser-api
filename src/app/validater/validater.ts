
const { Joi } = require('express-validation');

const regexPatern : RegExp = /^[a-zA-Z]+0+[a-zA-Z]+0+[1-9]{5,10}/ // RegEx for Input Payload

export const postPayloadValidation = () => {

    const payloadValidate = {
        body: Joi.object({
            data: Joi.string().regex(regexPatern).required()
        })
    }
    return payloadValidate;
}