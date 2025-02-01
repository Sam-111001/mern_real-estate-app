import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

//Function that handles the signup request
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body; //Object destructuring

  const hassedPassword = bcryptjs.hashSync(password, 10); //Encrypting the password

  const newUser = new User({ username, email, password: hassedPassword }); //Creating a new user object with the hashed password

  try {
    await newUser.save(); //updating the database
    res.status(201).json("Successfully added new user!");
  } catch (error) {
    next(error);
  }
};
