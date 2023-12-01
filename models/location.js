const mongoose = require("mongoose");

// One user has/tracks many locations 
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
  // rest of location data (temp, conditions, etc) will come from API call ( MainPage > getLocations() )
}, {
  timestamps: true
});

module.exports = mongoose.model("Location", locationSchema);