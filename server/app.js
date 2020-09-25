// app.js
import express from "express";

import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import formsRouter from "./routes/forms";
import cors from "cors";

import connectToDatabase from "./db";

const app = express();

connectToDatabase();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/forms", formsRouter);

export default app;
