
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    senderID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,
    timestamp: { type: Date, default: Date.now }
  });
  
  const ChatSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    messages: [MessageSchema]
  }, { timestamps: true });
  
  module.exports = mongoose.model("Chat", ChatSchema);
  