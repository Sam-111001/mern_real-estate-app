import express from "express";
import { signin, signup, google } from "../controllers/auth.controller.js";

//initialize the express.Router
const router = express.Router();

//Handling the HTTP post request to /signup,/signin./google endpoint using the signup,signin,google function from auth.controller.js
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
