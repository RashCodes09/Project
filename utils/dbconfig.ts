import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/projectDB").then(() => {
      console.clear();
      console.log("Project Connected ");
    });
  } catch (error) {
    console.error(error);
  }
};
