import { createServer } from "http";
import * as dotenv from "dotenv";
// import connectDB from "./db.js";
// import config from "config"
import app from "../app.js";
dotenv.config({
  path: "/server/customers/env",
});
console.log(dotenv.config());
const PORT = process.env.PORT || 1001;
console.log(process.env.PORT);
const uri = process.env.MONGO_URL;
const server = createServer(app);

(async () => {
  //   await connectDB(uri);
  server.listen(PORT, () =>
    console.log(`Listening to port @ http://localhost:${PORT}`)
  );
})();
