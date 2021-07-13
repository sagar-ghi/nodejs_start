import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
import * as path from "path";
import { errorHandler } from "./middleware/error.js";

import userRoute from "./api/user/route.js";
import categoryRoute from "./api/category/route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(path.resolve(), "public")));

app.use("/users", userRoute);
app.use("/categories", categoryRoute);

// error handler
app.use(errorHandler);

// module.exports = app;
export default app;

//mongodb

//scaling
//sql vertical scaling

//no-sql
//amazon prime
//vertical and horizontal scaling
