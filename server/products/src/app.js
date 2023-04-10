import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
// import { errorHandler } from "./errors/error.js";

// import { routeError } from "./errors/route.error.js";
dotenv.config();

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const app = express();
app
  .use(json())
 
//   .use(routeError)
//   .use(errorHandler);

export default app;

