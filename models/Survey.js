const RecipientSchema = require("./Recipient");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const surveySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  datesent: Date,
  lastResponded: Date,
}); // end of Schema

//model is a function I call and a model basically is important for mongoose behind the scenes to connect
//a schema, a blueprint with a name basically,
mongoose.model("surveys", surveySchema);
