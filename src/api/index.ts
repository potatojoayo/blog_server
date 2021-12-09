import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

dotenv.config({ path: "/home/ubuntu/blog/server/.env" });

export const initDB = () => {
  const URI = process.env.MONGO_URI + "";
  const connectOption: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(URI, connectOption, () => {
      console.log("connected to db");
    });
  } catch (e) {
    console.log(e);
  }
};
