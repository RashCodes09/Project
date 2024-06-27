// import nodemailer from "nodemailer";
// import { google } from "googleapis";
// import {
//   GOOGLE_ID,
//   GOOGLE_SECRET,
//   GOOGLE_URL,
//   GOOGLE_REFRESH,
// } from "./constant";
// import { iUserData } from "./interface";

// const MY_GOOGLE_ID = GOOGLE_ID;
// const MY_GOOGLE_SECRET = GOOGLE_SECRET;
// const MY_GOOGLE_URL = GOOGLE_URL;
// const MY_GOOGLE_TOKEN =
//   "1//04OuoELU6KRsMCgYIARAAGAQSNwF-L9IrzBcLX4DioSjBYbSc3FA-UoFiA4ffOPH72mYdwf4TAZCpDtiMQv7UyEMyag0Uhb9MXHc";

// const oAuth = new google.auth.OAuth2(
//   MY_GOOGLE_ID,
//   MY_GOOGLE_SECRET,
//   MY_GOOGLE_URL
// );

// oAuth.setCredentials({ refresh_token: MY_GOOGLE_TOKEN });

// export const createAdminMail = async (admin: iUserData) => {
//   try {
//     const token: any = (await oAuth.getAccessToken()).token;

//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: "codelabbest@gmail.com",
//         clientId: MY_GOOGLE_ID,
//         clientSecret: MY_GOOGLE_SECRET,
//         refreshToken: MY_GOOGLE_TOKEN,
//         accessToken: token,
//       },
//     });

//     const url: string = `http://localhost:3000/api/v1/verifyadmin/${admin?._id}`;

//     const mailer = {
//       to: admin?.email,
//       from: "codelabbest@gmail.com",
//       subject: "Say hi",
//       html: `
//       <p> Click on this link to verify your account!
//       <br />
//       <br />
//       <br />
//       <a href= ${url}> verify here </a>
//       </p>
      
//       `,
//     };
//     transport.sendMail(mailer).then(() => {
//       console.log("mail sent sucessfully");
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
