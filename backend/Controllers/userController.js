import { getUser } from "../Queris/getUser.js";
import { createNewUser } from "../Queris/createUser.js";
import { getUsersByEmail } from "../Queris/getAllUser.js";
import { logInUser } from "../Queris/logInUser.js";
import { getUserLogin } from "../Queris/getUserLogin.js";
import { authMiddleware } from "../Middleware/auth.js";
//create user
export const createNewUserService = async (req, res) => {
  try {
    const user = await createNewUser(req);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//get user email and login

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await logInUser(req);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//get users

export const getUsersByEmailService = async (req, res) => {
  try {
    const user = await getUsersByEmail(req);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
import jwt from "jsonwebtoken";

export const postRequestService = async (req, res) => {
  const { email } = req.body;
  try {
    const accessToken = jwt.sign( 
      { email: email },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1d" }
    );

    const Postrequest = await authMiddleware(req);
    res.status(200).send({ accessToken, Postrequest });
  } catch (error) {
    res.status(501).send(error.message);
  }
};
