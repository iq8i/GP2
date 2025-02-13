const mongoose = require("mongoose");


const ServiceSchema = new mongoose.Schema({
    firmID: { type: mongoose.Schema.Types.ObjectId, ref: "AccountingFirm", required: true },
    name: { type: String, required: true },
    description: String,
    price: Number,
    specialization: String,
    rating: { type: Number, default: 0 },
    workNames: [String]
  }, { timestamps: true });
  
  module.exports = mongoose.model("Service", ServiceSchema);
  