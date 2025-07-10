import { Router } from "express";//importing bcuz this keeps your route logic separate from the main app.js which helps with cleaner and scalable code
// import {registerUser} from  "../controllers/user.controller.js";//importing the actual controller function (registerUser) that contains the logic for what should happen when someone hits the /register endpoint
import { 
    loginUser, 
    logoutUser, 
    registerUser, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser, 
    updateUserAvatar, 
    updateUserCoverImage, 
    getUserChannelProfile, 
    getWatchHistory, 
    updateAccountDetails
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()


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
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)

router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
router.route("/history").get(verifyJWT, getWatchHistory)
export default router