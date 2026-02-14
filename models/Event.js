const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  organizer: String,
  location: String,
  date: Date,
  description: String,
  capacity: {
    type: Number,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true
  },
  category: String
});

module.exports = mongoose.model("Event", eventSchema);
