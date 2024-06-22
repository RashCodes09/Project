import { dbConfig } from "@/utils/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import userModel from "@/utils/model/userModel"
import bcrypt from "bcryptjs"

// to get all users
export const GET = async () => {
    try {
      await dbConfig();
  
      const users = await userModel.find();
      return NextResponse.json({
        status: 200,
        message: "reading all Users",
        data: users,
      });
    } catch (error) {
      return NextResponse.json({
        status: 404,
        message: "Error",
      });
    }
  };

//   to create a user
  export const POST = async (req: NextRequest) => {
    try {
      await dbConfig();
      const { email, password, name } = await req.json();
  
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
  
      const users = await userModel.create({
        email,
        password: hashed,
        name,
        role: "user",
      });
  
      return NextResponse.json({
        status: 200,
        message: "creating all User",
        data: users,
      });
    } catch (error) {
      return NextResponse.json({
        status: 404,
        message: "Error",
      });
    }
  };