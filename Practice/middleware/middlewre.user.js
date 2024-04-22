export const errorMiddlewre = (err, req, res, next) => {
    const { statusCode, message } = err || (500, "Internal server error");

    res.status(statusCode).json({
        success: false,
        message: message
    });
} 