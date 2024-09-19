import express, { Request, Response } from "express";
import mongoose, { MongooseError } from "mongoose";
import dotenv from "dotenv";
import messageRoutes from "./routes/messageRoutes"; // 라우트 파일 경로에 맞게 수정

dotenv.config();

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI is not defined in the environment variables");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err: MongooseError) =>
    console.error("MongoDB connection error:", err)
  );

const app = express();
app.use(express.json()); // JSON 요청 본문 파싱을 위한 미들웨어

// 메시지 라우트 연결
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
