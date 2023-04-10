import { createServer } from "http";
import * as dotenv from "dotenv";
import connectDB from "./db.js";
import app from "./app.js";
import config from "./config/config.js";

const PORT = config.PORT || 1002;
const uri = config.MONGO_URL;
const server = createServer(app);

(async () => {
  //   await connectDB(uri);
  server.listen(PORT, () =>
    console.log(`Listening to port @ http://localhost:${PORT}`)
  );
})();
