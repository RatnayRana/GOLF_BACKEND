import { NotFoundError, UnauthorizedError, ValidationError, ForbiddenError, DatabaseError } from "./error-handler";


export const errorHandler = (error: any) => {
    const status = error.response?.status || error.status || error.statusCode || 500;
    const errorMessage = error.response?.data?.message || error.data?.message || error.message || "An unexpected error occurred";
    switch (status) {
        case 500:
            throw new DatabaseError(errorMessage);
        case 404:
            throw new NotFoundError(errorMessage);
        case 401:
            throw new UnauthorizedError(errorMessage);
        case 400:
            throw new ValidationError(errorMessage);
        case 403:
            throw new ForbiddenError(errorMessage);
        default:
            throw new Error(`Unhandled error: ${errorMessage}`);
    }
}