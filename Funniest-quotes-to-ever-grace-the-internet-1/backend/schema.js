const mongoose = require('mongoose');






const AnimalSchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  animals: [{
    type: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const AnimalSchool = mongoose.model('AnimalSchool', AnimalSchoolSchema);

module.exports = AnimalSchool;
