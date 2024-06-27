
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { dbConfig } from "@/utils/dbconfig";
import myStaffModel from "@/utils/model/staffModel";
import myCompanyModel from "@/utils/model/companyModel";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    await dbConfig();

    const company = await myCompanyModel.findOne({
      email,
    });

    const staff = await myStaffModel.findOne({
      email,
    });

    if (company) {
      const check = await bcrypt.compare(password, company.password);

      if (check) {
        console.log("show me: ", check);
        return NextResponse.json({
          message: "company sign in",
          data: company,
          status: 201,
        });
      } else {
        return NextResponse.json({
          message: "Error signin company in",
          status: 404,
        });
      }
    } else if (staff) {
      const checkStaff = await bcrypt.compare(password, staff.password);
      if (checkStaff) {
        return NextResponse.json({
          message: "staff sign in",
          data: staff,
          status: 201,
        });
      } else {
        return NextResponse.json({
          message: "Error signin staff in",
          status: 404,
        });
      }
    } else {
      return NextResponse.json({
        message: "Error with Email",
        status: 404,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Error reading companies signin data",
      error: error.message || error,
      status: 404,
    });
  }
};

