import { dbConfig } from "@/utils/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import userModel from "@/utils/model/userModel"
// import { createAdminMail } from "../../../../utils/email";

export const POST = async (req: NextRequest) => {
    try {
      await dbConfig();
      const { email, password, name } = await req.json();
  
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
  
      const admin = await userModel.create({
        email,
        password: hashed,
        name,
        role: "admin",
      });

      // createAdminMail(admin)
  
      return NextResponse.json({
        status: 200,
        message: "Admin Created ",
        data: admin,
      });
    } catch (error) {
      return NextResponse.json({
        status: 404,
        message: "Error",
      });
    }
  };