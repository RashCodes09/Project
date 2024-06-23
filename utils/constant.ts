import dotenv from "dotenv"
dotenv.config()

// export const MONGO_ONLINE_URL = process.env.MONGODB_ONLINE as string;
export const MONGO_LOCAL_URL = process.env.MONGODB_LOCAL! as string;
export const PORT = process.env.PORT;
// export const APP_URL = process.env.APP_URL;
export const GOOGLE_ID = process.env.GOOGLE_ID! as string;
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET! as string;
export const GOOGLE_URL = process.env.GOOGLE_URL! as string;
export const GOOGLE_REFRESH = process.env.GOOGLE_REFRESH! as string;