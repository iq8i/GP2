const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String,  required: true }, // must be "client", "accounting_firm", "admin"
  phoneNumber: String,
  name: { type: String }, // this can be a frim name and client name
  // address: String,// has been move to the accounting_frim
  // certificationDetails: String, // has been move to the accounting_frim
  // commercialRegister:String,// has been move to the accounting_frim
  // firmName: String, // has been move to the accounting_frim
  accountingFirm: { type: mongoose.Schema.Types.ObjectId, ref: "AccountingFirm" }, 
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }]
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
