import {v2 as cloudinary} from "cloudinary"//The Cloudinary SDK (v2 version) used to interact with their API.
import fs from "fs"//used here to delete the local file after uploading
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
//Accepts localFilePath (e.g., ./public/temp/image.png) as input.
/*This file was saved temporarily by multer*/
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null//return null if no file path is given.
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"//tells cloudinary to auto-detect whether the file is an img,video or raw document
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}
export {uploadOnCloudinary}