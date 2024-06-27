import { Schema, models, model } from "mongoose";
import { Types } from "mongoose";
import myCompanyModel from "./companyModel";
import { iStaffData } from "../interface";

const staffModel = new Schema<iStaffData>(
  {
    name: {
        type: String,
    },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
  },
  bio: {
    type: String,
  },
  steps:[
    {
        type: Types.ObjectId,
        ref: "Steps",
      },
  ],
  company: {
     type: Types.ObjectId,
    ref: "Companies",
  },
  
  },
  { timestamps: true }
);

const myStaffModel =
  models.Staffs || model<iStaffData>("Staffs", staffModel);
export default myStaffModel;
