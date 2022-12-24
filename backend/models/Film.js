const { Schema, model } = require("mongoose");
const filmSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  year: {
    type: Number,
    required: false,
    default: 2020,
  },
  rating: {
    type: Number,
    required: false,
    default: 0.0,
  },
  lang: {
    type: String,
    enum: ["UA", "EN", "PL", "DE"],
    required: false,
  },
});
module.exports = model("film", filmSchema);
