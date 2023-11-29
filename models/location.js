const mongoose = require("mongoose");

// One user has/tracks many locations 
// One post belongs to one user
const locationSchema = new mongoose.Schema({
  residentName: {
    type: String,
    required: true
  },
  cityName: {
    type: String,
    required: true
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
  // currentTemp: Number,
  // openWeatherID: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model("Location", locationSchema);