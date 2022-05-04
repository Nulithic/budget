import mongoose from "mongoose";

const statementSchema = new mongoose.Schema({
  date: String,
  amount: Number,
  reason: String,
  method: String,
});

export default mongoose.models.statements || mongoose.model("statements", statementSchema);
