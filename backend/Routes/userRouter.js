import express from "express";
import {
  createNewUserService,
  getUserByEmailService,
} from "../Controllers/userController.js";
import { authMiddleware } from "../Middleware/auth.js";

export const userRouter = express.Router();

//Post
userRouter.post("/Users/sign", createNewUserService);
userRouter.post("/Users/login", authMiddleware, getUserByEmailService);
userRouter.post("/Users/getUser", getUserByEmailService);
