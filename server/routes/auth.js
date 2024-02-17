import express from 'express';
import { signup, signin } from '../controllers/auth.js';

const router = express.Router();


//Create a new user
router.post("/signup", signup)


//SignIn
router.post("/signin", signin)



//Google Auth
router.post("/google",)


export default router;