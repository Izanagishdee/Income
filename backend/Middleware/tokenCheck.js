import jwt from "jsonwebtoken";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZCIsImlhdCI6MTcwOTI3Mjk3OSwiZXhwIjoxNzA5MzU5Mzc5fQ.h_cY2l1VQD5QtuBYK2BkZR14Oaedm3JGx5XnqG4uNHc";

export const tokenCheck = (req, res, next) => {
  return jwt.verify(
    token,
    process.env.JWT_SECRET || "defaultSecret",
    (err, result) => {
      if (err) {
        res.status(401).send("provided token is not valid");
        console.log(err.message);
        return;
      } else {
        console.log(result);
        next();
        //
        res.send(result);
      }
    }
  );
};
