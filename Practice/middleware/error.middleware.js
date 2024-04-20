export const errorMiddleware = (err, req, res, next) => {
    const { statusCode, message } = err || (500, "Internal storage error");

    res.status(statusCode).json({
        success: false, message
    });
}