const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  fname: String,
  lname: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);
