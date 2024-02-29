// import express from "express";
import fs from "fs";

import cors from "cors";
import { userRouter } from "./Routes/userRouter.js";

// const app = express();

// const port = 8000;

// app.use(express.json());
// app.use(cors());

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import pg from "pg";
import express from "express";

const CONNECTION_STRING =
  "postgresql://Azjrgl:RW3nMT5qPAez@ep-black-queen-a14eupsi.ap-southeast-1.aws.neon.tech/Income-Expence?sslmode=require";

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

const createUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY ,
  username TEXT NOT NULL ,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  age SMALLINT 
)`;

  await client.query(userTableCreateQuery);
};

const dbInit = async () => {
  await client.connect();
  await createUserTable();
  client.on("error", async (error, cl) => {
    if (error) {
      await client.connect();
    }
  });
};

dbInit();

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
