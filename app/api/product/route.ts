import { NextRequest, NextResponse } from "next/server";
import { dbConfig } from "@/utils/dbconfig";
import myProductModel from "@/utils/model/productModel";

// to view all products
export const GET = async () => {
  try {
    await dbConfig();

    const products = await myProductModel.find();

    return NextResponse.json({
      status: 200,
      message: "Reading all Products",
      data: products,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};

// to create products
export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { title, image } = await req.json();

    const products = await myProductModel.create({
      title,
      image,
    });

    return NextResponse.json({
      status: 200,
      message: "creating all products",
      data: products,
    });
  } catch (error:any) {
    return NextResponse.json({
      status: 404,
      errorMessage: `${error.message}`,
      errorStack: error
    });
  }
};
