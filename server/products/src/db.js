import pkg from 'mongoose';
const { connect, connection } = pkg;

const connectDB = (url) => {
  connection.once("open", () => console.log("MongoDB connected"));
  return connect(url);
};

export default connectDB;
