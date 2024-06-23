import { dbConfig } from "@/utils/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import userModel from "@/utils/model/userModel"

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
        role: "admin",
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