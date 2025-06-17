import { ErrorAttributes } from "../interface/érror/error-attributes";

 const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UN_AUTHORISED: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

class AppError extends Error {
  statusCode: number;
    isOperational: boolean;
    errorStack: string | undefined;
    logError: any;
  constructor(
   errorAttr:ErrorAttributes
  ) {
    super(errorAttr.description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = errorAttr.name;
    this.statusCode = errorAttr.statusCode;
    this.isOperational = errorAttr.isOperational;
    this.errorStack = errorAttr.errorStack;
    this.logError = errorAttr.loggingErrorResponse;
    Error.captureStackTrace(this);
  }
}

//api Specific Errors
class APIError extends AppError {
  constructor(
    name:string,
    statusCode = STATUS_CODES.INTERNAL_ERROR,
    description = "Internal Server Error",
    isOperational = true
  ) {
    super({name, statusCode, description, isOperational});
  }
}

//400
class BadRequestError extends AppError {
  constructor(description = "Bad request", logingErrorResponse:any) {
    super({
      name: "BAD_REQUEST",
      statusCode: STATUS_CODES.BAD_REQUEST,
      description,
      isOperational: true,
      loggingErrorResponse:logingErrorResponse,
    });
  }
}

//400
class ValidationError extends AppError {
  constructor(description = "Validation Error", errorStack:any) {
    super({
      name:"BAD REQUEST",
      statusCode:STATUS_CODES.BAD_REQUEST,
      description,
      isOperational:true,
      errorStack
  });
  }
}

export { AppError, APIError, BadRequestError, ValidationError, STATUS_CODES };
