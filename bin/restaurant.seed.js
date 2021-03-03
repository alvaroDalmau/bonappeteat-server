const mongoose = require('mongoose');
require('../db/index');
const Restaurant = require('../models/Restaurant.model');
const data = require('../data.js');

Restaurant.insertMany(data)
  .then(response => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log('Error seeding Restaurant model');
  });
