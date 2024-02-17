import express from 'express';
import { update, deleteUser, getUser, subscribe, unsubscribe, like, dislike } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//Update User
router.put("/:id", verifyToken, update)

//Delete User
router.delete("/:id",verifyToken, deleteUser)


//Get a User
router.get("/find/:id", getUser)


//Subscribe a User
router.put("/sub/:id", verifyToken, subscribe)


//Unsubscribe a User
router.put("/unsub/:id", verifyToken, unsubscribe)


//Like a Video
router.put("/like/:videoId", verifyToken, like)


//Dislike a Video
router.put("/dislike/:id", verifyToken, dislike)


export default router;