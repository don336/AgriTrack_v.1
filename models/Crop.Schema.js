import { Schema, model } from "mongoose";

const cropSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  plantingDate: { type: Date, required: true },
  harvestDate: { type: Date },
  yield: { type: Number },
  field: { type: mongoose.Schema.Types.ObjectId, ref: "Field" },
});

export default model("Crop", cropSchema);
