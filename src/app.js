import express from "express";//backbone of the server (for -routing,middleware,req&res,Apis,static files etc.)
import cors from "cors";//allows backend to communicate with backend(Cross - orgin Resource Sharing)
import cookieParser from "cookie-parser";//imports middleware to parse cookies(cookies are essential for managing user session ,tracking state etc.)
const app=express();
//apply middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,//tells which frontend domains are allowed to access this backend(set in .env)
    credentials: true//for authentication(allows frontend to send cookies)
}))

app.use(express.json({limit: "16kb"}))//parse incoming json req and adds to req.body ensures the request body doesn’t exceed 16 kilobytes for security and performance ....why its needed ? bcuz it lets us access req.body in our routes
app.use(express.urlencoded({extended: true, limit: "16kb"}))//Parses URL-encoded form data (like from HTML forms) extended: true allows nested objects
app.use(express.static("public"))//Serves static files like HTML, CSS, images, or JavaScript from the public folder ex-public/logo.png can be accessed at http://yourserver.com/logo.png
app.use(cookieParser())//Parses cookies from the Cookie header and makes them available under req.cookies
//routes
import userRouter from "./routes/user.routes.js"//only give this type of statement when export default is here
//routes declaration
app.use("/api/v1/users",userRouter)
export {app} 
