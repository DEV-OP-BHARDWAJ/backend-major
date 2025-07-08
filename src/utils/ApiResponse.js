class ApiResponse {
    constructor(statusCode, data, message = "Success"){//The constructor is a special method called when you create a new instance of ApiResponse..
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }
// Provides a structured way to send consistent success responses.
// Why It’s Important:
// Ensures that all API responses follow a uniform format.
// Helps frontend developers consume consistent response shapes.
// Significance of ApiResponse Class
// Provides a consistent, structured way to send API responses.
// Helps frontend developers expect the same format every time, making error handling and data processing easier.
// Separates response formatting from business logic, improving code clarity and maintainability.