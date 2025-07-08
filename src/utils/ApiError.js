// custom error class that plays a critical role in making your backend robust, maintainable, and developer-friendly
class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
// statusCode: Helps your error handler send the correct HTTP status.
// data: Set to null since this is an error — no data to return.
// message: Custom or default error message.
// success: Always false for errors — helps structure API responses consistently.
// errors: Can hold a list of extra errors (e.g., validation errors).
        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}
// A custom Error class used to throw meaningful and structured errors from anywhere in the code.
// Why It’s Important:
// Gives a standard format for errors (with status code + message).
// Helps your global error handler return consistent error responses.
// Significance of ApiError
// Custom error class for your API that standardizes error responses.
// Attaches important info like HTTP status code, error messages, extra details (errors), and stack trace.
// Helps centralize error handling so your error middleware can respond uniformly.
// Improves debugging and makes the API easier to consume for frontend or external clients.