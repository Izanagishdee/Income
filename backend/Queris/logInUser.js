import fs from "fs";

const userDb = "/Users/23LP7916/Desktop/newLog/backend/Models/User.json";

export const logInUser = async (req, res) => {
  try {
    return req.userdata;
  } catch (err) {
    throw new Error(err.message);
  }
};
