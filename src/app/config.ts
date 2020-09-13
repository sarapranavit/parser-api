
const PORT:number = 3000;
const appVersionV1: string = 'v1';
const appVersionV2: string = 'v2';
const regEx:RegExp = /0+/g;



export const config ={
    PORT: PORT,
    APP_VERSION_V1: appVersionV1,
    APP_VERSION_V2: appVersionV2,
    REGEX_TYPE: regEx,
}

export const setAppVersion = (appVersion) => {
    process.env.APP_VERSION = appVersion;
}