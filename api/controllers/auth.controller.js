import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

//Function that handles signin request
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...resDetails } = validUser._doc;
    res
      .cookie("auth_token", token, { httpOnly: true })
      .status(200)
      .json(resDetails);
  } catch (error) {
    next(error);
  }
};
