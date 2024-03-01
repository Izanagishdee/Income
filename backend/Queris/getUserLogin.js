import jwt from "jsonwebtoken";

export const getUserLogin = async (req, res) => {
  const { email } = req.body;
  try {
    const accessToken = jwt.sign(
      { email: email },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1d" }
    );
    return { accessToken: accessToken };
  } catch (err) {
    throw new Error(err.message);
  }
};
