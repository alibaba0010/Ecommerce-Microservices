import * as dotenv from "dotenv";

if (process.env.NODE_ENV === "production") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotenv.config({ path: configFile });
} else {
  dotenv.config({ path: "./products/.env" });
}
export default {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  APP_SECRET: process.env.APP_SECRET,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};
