import { Schema, model } from "mongoose";

const fieldSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  size: { type: Number },
});

export default model("Field", fieldSchema);
