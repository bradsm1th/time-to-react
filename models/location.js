const mongoose = require("mongoose");

// One user has/tracks many locations 
// One post belongs to one user
const locationSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  cityName: {
    type: String,
    required: true
  },
  openWeatherID: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model("Location", locationSchema);