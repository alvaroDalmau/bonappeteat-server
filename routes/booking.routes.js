const express = require('express');
const router = express.Router();

let BookingModel = require('../models/Booking.model');

// NOTE: All your API routes will start from /api

// will handle all GET requests to http:localhost:5005/api/todos
router.get('/bookings', (req, res) => {
  BookingModel.find({ user: req.session.loggedInUser })
    .populate('user')
    .populate('restaurant')
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});
// will handle all POST requests to http:localhost:5005/api/create
router.post('/:restaurantId/create', (req, res) => {
  const { dateTime, pax } = req.body;
  console.log(req.body);
  BookingModel.create({
    user: req.session.loggedInUser,
    restaurant: req.params.restaurantId,
    dateTime: dateTime,
    pax: pax,
  })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

module.exports = router;
