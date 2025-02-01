import express from "express";
import { signup } from "../controllers/auth.controller.js";

//initialize the express.Router
const router = express.Router();

//Handling the HTTP post request to /signup endpoint using the signup function from auth.controller.js
router.post("/signup", signup);

export default router;
