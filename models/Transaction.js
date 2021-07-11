const mongoose = require('mongoose');

const TranscationSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Please add some description'],
  },
  amount: {
    type: Number,
    required: [true, 'please add positive or negative number'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transcation', TranscationSchema);
