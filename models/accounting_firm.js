
const mongoose = require("mongoose");

const AccountingFirmSchema = new mongoose.Schema({
    firmName: { type: String, required: true ,unique: true},
    status: { type: String, enum: ["pending", "verified", "rejected"], default: "pending" },
    industrySpecialization: String,
    firmSize: Number,
    rating: { type: Number, default: 0 },
    office: {
      location: String,
      services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }]
    },
    address: String,// it was in the user model
    certificationDetails: String, // it was in the user model
    commercialRegister:String,// it was in the user model
    //transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }]
  }, { timestamps: true });
  
  module.exports = mongoose.model("AccountingFirm", AccountingFirmSchema);
