import dotenv from "dotenv";//for loading env variables(from .env) into process.env
import connectDB from "./db/index.js";//imports our custom mongodb connection 
import { app } from "./app.js";
dotenv.config({
    path:'./.env'
})
//   -r dotnenv/config in package.json for import syntax
connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`server is running on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connetion failed !!!",err);
})


//what are we doing above?
// 1. Connecting to the database:
// connectDB() returns a Promise.
// If successful, you start your Express server.
// 2. Starting the Express server:
// app.listen(...) binds your app to the specified port.
// process.env.PORT is preferred for production flexibility 
// Fallback to 8000 if PORT is not set.
// 3. Catch any DB errors:
// If connectDB() fails (like DB is down), you log the error and don’t start the server.