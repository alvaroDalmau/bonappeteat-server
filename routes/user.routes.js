const express = require('express');
const router = express.Router();

let UserModel = require('../models/User.model');

// NOTE: All API routes will start from /api


// will handle all DELETE requests to http:localhost:5005/api/user/:userId
router.delete('/user/:userId', (req, res) => {
  UserModel.findByIdAndDelete(req.params.userId)
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

// will handle all PATCH requests to http:localhost:5005/api/user/:userId
router.patch('/user/:userId', (req, res) => {
  let id = req.params.userId;
  const { email, password } = req.body;
  TodoModel.findByIdAndUpdate(id, { email, password })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      });
    });
});

module.exports = router;
