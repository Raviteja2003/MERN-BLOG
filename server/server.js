import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT||5000;

app.use(
    '*',
    cors({
    origin:true,
    credentials:true
}));
app.use(express.json());


app.use("/api/auth",authRouter)

const start = async () => {
    try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();

