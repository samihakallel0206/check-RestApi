//require mongoose

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    adress: {
      type: String,
    },
    phone: Number,
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('contact', contactSchema);
module.exports = Contact