const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  roomName: { type: String},
  message: { type: String },
  author: {type: String},
  date: {type: Date},
});

//making a variable user that makes a mongoose model call User useing userSchema
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;