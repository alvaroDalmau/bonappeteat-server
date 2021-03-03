const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Chinese', 'Indian', 'Burguer', 'Italian', 'Spanish'],
  },
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
