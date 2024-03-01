import fs from "fs";
import { makeHash } from "../Utils/PasswordHash.js";
import { log } from "console";
import { client } from "../../backend/index.js";
const userDb = "/Users/23LP7916/Desktop/newLog/backend/Models/User.json";

const createUser = async (username, email, password, age) => {
  const userCreateQuery = `
  INSERT INTO users( username, email, password, age ) VALUES ($1, $2, $3, $4) RETURNING id`;

  const userId = await client.query(userCreateQuery, [
    username,
    email,
    makeHash(password),
    age,
  ]);
  return userId.rows;
};

export const createNewUser = async (req, res) => {
  const { username, email, password, age } = req.body;
  try {
    if (!username || !email || !password) {
      res.send("Fill all fields");
    }

    const userId = await createUser(username, email, password, age);

    console.log(userId);
    res.send(userId);
    return "Created";
  } catch (err) {
    console.log(err);
  }
};
// try {
//   const { username, email, password, repassword } = req.body;
//   if (password & repassword & !password || !repassword) {
//     throw new Error("Check your pasword");
//   }
//   if (!username || !email || !password || !repassword) {
//     throw new Error("Fill all submit");
//   }
//   const newUser = await fs.readFileSync(userDb, "utf-8");
//   const existUser = JSON.parse(newUser);
//   const useExisted = existUser.find((userDb) => userDb.email === email);
//   if (useExisted) {
//     throw new Error("User already exist");
//   }
//   const pass = makeHash(password);
//   const repass = makeHash(repassword);
//   existUser.push({
//     username: username,
//     email: email,
//     password: pass,
//     repassword: repass,
//   });
//   await fs.writeFileSync(userDb, JSON.stringify(existUser));
//   return "success";
// } catch (err) {
//   throw new Error(err);
// }
