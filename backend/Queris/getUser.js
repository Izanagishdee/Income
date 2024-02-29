import { verify } from "crypto";
import fs from "fs";
const userDb = "/Users/23LP7916/Desktop/newLog/backend/Models/User.json";

export const getUser = async (req, res) => {
  const headers = req.headers;

  // verifyToken;
  console.log(headers);

  try {
    res.send("helo");
  } catch (err) {
    console.log(err);
  }
};
