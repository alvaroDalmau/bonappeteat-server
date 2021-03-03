const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  pax: {
    type: Number,
    required: true,
  },
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
