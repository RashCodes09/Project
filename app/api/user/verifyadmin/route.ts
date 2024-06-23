import { dbConfig } from "@/utils/dbconfig";
import myUserModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
    req: NextRequest,
    params: any
  ) => {
    try {
        
      await dbConfig();
      const { adminID } = params.params;
      const admin = await myUserModel.findById(adminID);
      if (admin.role === "admin") {
        const checkAdmin = await myUserModel.findByIdAndUpdate(
          adminID,
          {
            verify: true,
          },
          {
            new: true,
          }
        );

        return NextResponse.json({
            status: 201,
            message: "admin found",
            data: checkAdmin,
        })
      } else {
        return NextResponse.json({
            status: 404,
            message: "not an amin",
          
        });
      }
    } catch (error: any) {
      return NextResponse.json({
        status: 404,
        message: "admin not verified",
        error: error.message,
      
    });

    }
  };
  