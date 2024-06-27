import { dbConfig } from "@/utils/dbconfig";
import myCompanyModel from "@/utils/model/companyModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"


// to get all companies
export const GET = async () => {
    try {
      await dbConfig();
      const company = await myCompanyModel.find();
      return NextResponse.json({
        status: 200,
        message: "reading all companies",
        data: company,
      });
    } catch (error:any) {
      return NextResponse.json({
        status: 404,
        message: "Error",
        error: error.message
      });
    }
  };

  
// to craete all companies

export const POST = async (req: NextRequest) => {
        try {
          await dbConfig();
          const { email, password, companyName, plan, planCost } = await req.json();
      
          const salt = await bcrypt.genSalt(10);
          const hashed = await bcrypt.hash(password, salt);
      
          const users = await myCompanyModel.create({
            email,
            password: hashed,
            companyName,
            role: "owner",
            plan,
            planCost,
          });
      
          return NextResponse.json({
            status: 201,
            message: "creating company",
            data: users,
          });
        } catch (error:any) {
          return NextResponse.json({
            status: 404,
            message: error.message,
          
          });
        }
      };