const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const grassSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
});
const grass = mongoose.model("grass", grassSchema);
module.exports = grass;
