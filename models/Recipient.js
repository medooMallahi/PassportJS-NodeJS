const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipientSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  responded: {
    type: Boolean,
    required: true,
    default: false,
  },
}); // end of Schema

//model is a function I call and a model basically is important for mongoose behind the scenes to connect
//a schema, a blueprint with a name basically,
module.exports = recipientSchema;
