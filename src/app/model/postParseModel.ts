export interface data{
    firstName: string;
    lastname: string;
    clientId: string;
}

export interface PostParseResponse {
    statusCode: number;
    data: data;
}