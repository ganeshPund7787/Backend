export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Interbal storage error";

    res.status(statusCode).json({
        success: false,
        message: message
    });
}