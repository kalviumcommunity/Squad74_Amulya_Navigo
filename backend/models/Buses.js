const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    default: "State Transport"
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  departureTime: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: String,
    required: true
  },
  fare: {
    type: Number,
    default: 0
  },
  frequency: {
    type: String,
    enum: ['Daily', 'Weekdays', 'Weekends'],
    default: 'Daily'
  }
});

module.exports = mongoose.model('Bus', busSchema);
