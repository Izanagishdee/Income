import { verify } from "crypto";
import fs from "fs";
const userDb = "/Users/23LP7916/Desktop/newLog/backend/Models/User.json";

import jwt from "jsonwebtoken";
export const getUser = async (req, res) => {
  const header = req.headers.authorization;
  // console.log(header);
  if (!header) {
    res.status(400).send("token not found");
    return;
  }

  const token = header.split(" ")[1];
  const { email } = jwt.decode(token);
  console.log(email);
  return email;
};
