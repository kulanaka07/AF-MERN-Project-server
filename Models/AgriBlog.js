const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const agriBlogSchema = new Schema({
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
const AgriBlog = mongoose.model("AgriBlog", agriBlogSchema);
module.exports = AgriBlog;
