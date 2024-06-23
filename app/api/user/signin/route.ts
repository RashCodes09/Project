import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { dbConfig } from "@/utils/dbconfig";
import myUserModel from "@/utils/model/userModel";

// to sign in a user
export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { email, password } = await req.json();

    const user = await myUserModel.findOne({ email });

    if (user) {
      const check = await bcrypt.compare(password, user.password);
      if (check) {
        return NextResponse.json({
          status: 200,
          message: "sign in User",
          data: user,
        });
      } else {
        return NextResponse.json({
          status: 404,
          message: "Error in reading password",
        });
      }
    } else {
      return NextResponse.json({
        status: 404,
        message: "Error in finding Email",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
