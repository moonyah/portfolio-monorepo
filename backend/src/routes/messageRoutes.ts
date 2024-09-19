import express, { Request, Response } from "express";
const Message = require("../models/Message");
const router = express.Router();

// POST 요청: 메시지 추가
router.post("/", async (req: Request, res: Response) => {
  console.log(req.body);

  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).send(newMessage);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET 요청: 모든 메시지 가져오기
router.get("/", async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();
    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
