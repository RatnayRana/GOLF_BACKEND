export class CustomError extends Error {
    statusCode: number
    isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational = true){
        super(message)
          this.statusCode = statusCode;
      this.isOperational = isOperational;
  
      Object.setPrototypeOf(this, CustomError.prototype);
    }

}

export  class DatabaseError extends CustomError{
    constructor(message:string){
        super(message,500)
    }
}
export class NotFoundError extends CustomError{
    constructor(message:string){
        super(message,404)
    }
}

export class BadRequestError extends CustomError {
        constructor(message: string) {
        super(message, 400);
        }
    }
    export class UnauthorizedError extends CustomError {
        constructor(message: string) {
        super(message, 401);
        }
    }
    export class ValidationError extends CustomError {
        constructor(message: string) {
        super(message, 400);
        }
    }
    export class ForbiddenError extends CustomError {
        constructor(message: string) {
        super(message, 403);
        }
    }

    export class InternalServerError extends CustomError {
        constructor(message: string) {
        super(message, 500);
        }
    }

    export class ServiceUnavailable extends CustomError {
        constructor(message: string) {
        super(message, 503);
        }
    }
   
    export class AxiosError extends CustomError {
        [x: string]: any;
        constructor(message: string) {
        super(message, 500);
        }
    }