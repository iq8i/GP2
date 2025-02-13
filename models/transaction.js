const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    accountingFirm: { type: mongoose.Schema.Types.ObjectId, ref: "AccountingFirm" }
  }, { timestamps: true });
  
  module.exports = mongoose.model("Transaction", TransactionSchema);
  