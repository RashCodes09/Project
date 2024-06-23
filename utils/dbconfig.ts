import { connect } from "mongoose";
// import { MONGO_ONLINE_URL } from "./constant";
// import { MONGO_LOCAL_URL } from "./constant";

export const dbConfig = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/projectDB").then(() => {
      console.clear();
      console.log("Connected 🚀🚀❤️❤️");
    });
  } catch (error) {
    console.error(error);
  }
};
