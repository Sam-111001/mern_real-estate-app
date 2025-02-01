import express from "express";
import { test } from "../controllers/user.controller.js";

//Initializing the express.Router
const router = express.Router();

//Handling HTTP get requests to /test endpoint using test from user.controller
router.get("/test", test);

export default router;
