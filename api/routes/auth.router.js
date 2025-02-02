import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

//initialize the express.Router
const router = express.Router();

//Handling the HTTP post request to /signup endpoint using the signup function from auth.controller.js
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
