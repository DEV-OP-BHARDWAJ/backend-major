import { Router } from "express";//importing bcuz this keeps your route logic separate from the main app.js which helps with cleaner and scalable code
import {registerUser} from  "../controllers/user.controller.js";//importing the actual controller function (registerUser) that contains the logic for what should happen when someone hits the /register endpoint
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()
import { 
    loginUser, 
    logoutUser,  
    refreshAccessToken, 
    // changeCurrentPassword, 
    // getCurrentUser, 
    // updateUserAvatar, 
    // updateUserCoverImage, 
    // getUserChannelProfile, 
    // getWatchHistory, 
    // updateAccountDetails
} from "../controllers/user.controller.js";

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }/*two field i.e. we are uploading 2 files  */,
        {
            name: "coverImage",
            maxCount: 1
        }
    ])//kind of a middleware,
    ,registerUser)
// defining a POST route on /register.
// router.route("/register"): declares the base path.
// .post(registerUser): handles POST requests and delegates the logic to the registerUser controller function.
// So this means:
// POST /api/v1/users/register → registerUser is executed
// (assuming this router is mounted at /api/v1/users in app.js)

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
export default router