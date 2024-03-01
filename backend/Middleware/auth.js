import fs from "fs";
import { compareHash } from "../Utils/PasswordHash.js";
import { client } from "../index.js";
// const userDb = "/Users/23LP7916/Desktop/newLog/backend/Models/User.json";

// export const authMiddleware = async (req, res, next) => {
//   const { password, email: paramEmail } = req.body;

//   try {
//     const newUserJson = await fs.readFileSync(userDb, "utf-8");

//     const newUserData = JSON.parse(newUserJson);

//     const checkUser = newUserData.find(({ email }) => email === paramEmail);

//     if (!checkUser) {
//       res.status(401).send("email or password is wrong");
//       return;
//     }

//     const clientPass = checkUser.password;

//     const compare = compareHash(password, clientPass);

//     if (compare) {
//       req.userdata = checkUser;
//       next();
//       return;
//     } else {
//       res.status(401).send("password is wrong");
//     }
//   } catch (err) {
//     res.status(401).send(err.message);
//   }
// };

const getUserQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);

  return user.rows[0];
};

export const authMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(password);
  try {
    const user = await getUserQuery(email);
    console.log(user);
    const checkedHash = compareHash(password, user.password);

    if (!checkedHash) {
      return "email or password is not suodfhijaosk";
    }

    return user;
  } catch (error) {
    res.status(400).send(error.message);
  }
};
