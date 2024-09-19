import mongoose, { Document, Schema } from "mongoose";

interface IMessage extends Document {
  name: string;
  date: string;
  text: string;
}

const messageSchema = new Schema<IMessage>({
  name: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
});

const Message = mongoose.model<IMessage>("Message", messageSchema);

export default Message;
