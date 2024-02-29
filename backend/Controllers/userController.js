//  
import { createNewUser } from "../Queris/createUser.js";
import { getUsersByEmail } from "../Queris/getAllUser.js";
import { logInUser } from "../Queris/logInUser.js";

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
