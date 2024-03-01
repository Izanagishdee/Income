import express from "express";
import {
  createNewUserService,
  getUserByEmailService,
} from "../Controllers/userController.js";
import { authMiddleware } from "../Middleware/auth.js";
import { tokenCheck } from "../Middleware/tokenCheck.js";
import { postRequestService } from "../Controllers/userController.js";

export const userRouter = express.Router();

//Post
userRouter.post("/Users/sign", createNewUserService);
userRouter.post("/Users/login", postRequestService);
userRouter.post("/Users/getUser", getUserByEmailService);

userRouter.get("/Users", tokenCheck);
