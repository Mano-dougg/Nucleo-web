// messagem, código de status, códigos de erro, erro


export class HttpException extends Error {
    message: string;
    errorCode: any;
    statusCode: number;
    errors: ErrorCode;

    constructor(message:string, errorCode:ErrorCode, statusCode:number, error:any) {
        super(message)
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.errors = error
    }
}

export enum ErrorCode {
    USER_NOT_FOUND = 1001,
    EMAIL_IN_USE = 1002,
    INCORRECT_PASSWORD = 1003,
}