import multer from "multer";//middleware used to handle multipart/form-data — necessary when uploading files (images, PDFs, etc.) from the client
//below is storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
//above we are basically telling multer where and how to store uploaded files temporarily on the server.
// diskStorage: Files will be saved on disk (vs. memory or cloud directly).
// destination: A function that tells multer to store files in ./public/temp/.
// filename: You're saving files with their original name from the client.
// 📌 cb = callback function. First argument is null (no error), second is the result (path or filename)
export const upload = multer({ 
    storage, 
})//creates actual middleware using the custom storage
// Why Save in /public/temp?
// we are saving the uploaded file temporarily so you can:
// Validate it (size, type, etc.)
// Upload it to Cloudinary or S3
// Then delete it from local disk (to save space)