const mongoose = require("mongoose");

const ObjectionTicketSchema = new mongoose.Schema({
    clientID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    serviceType: String,
    issueDescription: String,
    attachments: [String],
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ["open", "reviewed", "resolved"], default: "open" }
  }, { timestamps: true });
  
  module.exports = mongoose.model("ObjectionTicket", ObjectionTicketSchema);
  