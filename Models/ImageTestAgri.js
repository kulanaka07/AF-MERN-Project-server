const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  articlebody: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ImageAgri = mongoose.model("ImageTestAgri", imageSchema);

module.exports = ImageAgri;