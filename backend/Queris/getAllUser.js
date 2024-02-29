import fs from "fs";

const userDb = "/Users/23LP7916/Desktop/newLog/backend/Models/User.json";

export const getUsersByEmail = async () => {
  try {
    const allUser = JSON.parse(await fs.readFileSync(userDb, "utf-8"));
    return allUser;
  } catch (err) {
    throw new Error(err.message);
  }
};
