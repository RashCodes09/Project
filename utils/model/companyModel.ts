import { Schema, models, model, Types } from "mongoose";
import { iCompanyData} from "../interface";

const companyModel = new Schema<iCompanyData>(
  {
    companyName: {
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
    plan: {
      type: String,
    },
    planCost: {
      type: Number,
    },
    role: {
      type: String,
    },
    address: {
      type: String,
    },
    staff: [
        {
            type: Types.ObjectId,
            ref: "Staffs",
          },
    ],
    project: [
        {
            type: Types.ObjectId,
            ref: "Projects",
          },
    ],
  },
  { timestamps: true }
);

const myCompanyModel = models.Companies || model<iCompanyData>("Companies", companyModel);
export default myCompanyModel;
