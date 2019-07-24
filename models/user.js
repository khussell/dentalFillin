const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String},
  lastName: { type: String },
  userName: {type: String},
  password: {type: String},
  sub: {type: Boolean},
  photo: {type: String},
  location: {type: Number},
  yearsExp: {type: Number},
  about: {type: String},
  anesthesia: {type: Boolean},
  nitrous: {type: Boolean},
  avail: {type: Array},
  officeName: {type: String},
  doctors: {type: Array},
  datesNeeded: {type: Array},
  kindOfPerson: {type: String},
  starRating: {type: Number},
  howManyTimesSubbed: {type: Number},
  howManySubsHaveYouHad: {type: Number},
  pastJobs: {type: Array},
  currentJobs: {type: Array },
  pastSubs: {type: Array},
  currentSubs: {type: Array},
  searchParams: {type: Array},
  date: { type: Date}
});

//making a variable user that makes a mongoose model call User useing userSchema
const User = mongoose.model("User", userSchema);

module.exports = User;
