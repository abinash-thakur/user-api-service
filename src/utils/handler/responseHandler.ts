import { HttpStatus } from '@nestjs/common';

export class ResponseService {
    constructor() { }

    private isSuccess(statusCode: number): boolean {
        const errorStatusCodes = [
            HttpStatus.BAD_REQUEST,
            HttpStatus.UNAUTHORIZED,
            HttpStatus.NOT_FOUND,
            HttpStatus.FORBIDDEN,
            HttpStatus.INTERNAL_SERVER_ERROR,
            HttpStatus.PRECONDITION_FAILED,
            HttpStatus.UNPROCESSABLE_ENTITY,
        ];
        return !errorStatusCodes.includes(statusCode);
    }

    protected formatResponse<T = any>(
        statusCode: number,
        data: T | null,
        message: string,
    ) {
        return {
            success: this.isSuccess(statusCode),
            statusCode,
            message,
            data,
        };
    }

    protected sendResponse<T = any>(data: T, message : string) {
        return this.formatResponse(HttpStatus.OK, data, message);
    }

    protected serviceResponse<T = any>(data: T, message : string) {
        return this.formatResponse(HttpStatus.CREATED, data, message);
    }

    protected error(statusCode: number, message = 'An error occurred', data: any = null) {
        return this.formatResponse(statusCode, data, message);
    }
}
