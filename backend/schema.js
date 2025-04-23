const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  tags: {
    type: [String],
    default: []
  },
  submitted_by: {
    type: String
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Quote', quoteSchema);
