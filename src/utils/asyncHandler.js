const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }
//  asyncHandler.js
//  Purpose:
// Wraps async route handlers to catch errors and forward them to Express’s error handler.
//  Why It’s Important:
// Prevents the need to write try/catch in every async route.
// Keeps controller code clean and readable