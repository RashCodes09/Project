import { Schema, models, model } from "mongoose";
import { iProductData } from "../interface";

const productModel = new Schema<iProductData>(
  {
    title: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const myProductModel =
  models.products || model<iProductData>("products", productModel);
export default myProductModel;
