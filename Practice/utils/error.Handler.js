export const errorHandlers = (statusCode, mesage) => {
    const error = new Error();
    error.message = message;
    error.statusCode = statusCode;
    return error;
}