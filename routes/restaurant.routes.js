const express = require('express');
const router = express.Router();

let RestaurantModel = require('../models/Restaurant.model');

// NOTE: All your API routes will start from /api

// will handle all GET requests to http:localhost:5005/api/todos
router.get('/restaurants', (req, res) => {
  RestaurantModel.find()
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

// will handle all GET requests to http:localhost:5005/api/todos/:todoId
//PS: Don't type :todoId , it's something dynamic,
router.get('/restaurant/:restaurantId', (req, res) => {
  RestaurantModel.findById(req.params.restaurantId)
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
