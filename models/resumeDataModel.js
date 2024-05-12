const mongoose = require('mongoose');

const biodataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  infodetail: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('Biodata', biodataSchema);
