import mongoose from "mongoose";//odm library for interacting with MongoDB
import { DB_NAME } from "../constant.js";
const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(process.env.MONGODB_URI);
        // console.log("🔍 Using DB URI:", `${process.env.MONGODB_URI}}`);
        // console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.error("error",error);
        process.exit(1);
    }
}
export default connectDB;
