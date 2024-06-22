import { connect } from "mongoose";
import { MONGO_ONLINE_URL } from "./constant";

export const dbConfig = async () => {
  try {
    await connect(MONGO_ONLINE_URL).then(() => {
      console.clear();
      console.log("Connected 🚀🚀❤️❤️");
    });
  } catch (error) {
    console.error(error);
  }
};
