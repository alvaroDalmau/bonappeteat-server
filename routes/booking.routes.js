// const express = require('express');
// const router = express.Router();

// let BookingModel = require('../models/Booking.model');

// // NOTE: All your API routes will start from /api




// // will handle all DELETE requests to http:localhost:5005/api/todos/:id
// router.delete('/bookings/:bookingId', (req, res) => {
//   BookingModel.findByIdAndDelete(req.params.id)
//     .then((response) => {
//       res.status(200).json(response);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: "Something went wrong",
//         message: err,
//       });
//     });
// });

// // will handle all PATCH requests to http:localhost:5005/api/todos/:id
// router.patch("/bookings/:bookingId", (req, res) => {
//   let id = req.params.id;
//   const { user, restaurant, time, date, pax } = req.body;
//    BookingModel.findByIdAndUpdate(
//      id,
//      {
//        $set: {
//          user: user,
//          restaurant: restaurant,
//          time: time,
//          date: date,
//          pax: pax,
//        },
//      },
//      { new: true }
//    )
//      .then((response) => {
//        res.status(200).json(response);
//      })
//      .catch((err) => {
//        console.log(err);
//        res.status(500).json({
//          error: "Something went wrong",
//          message: err,
//        });
//      });
// });

// // // will handle all GET requests to http:localhost:5005/api/todos/:todoId
// // //PS: Don't type :todoId , it's something dynamic,
// // router.get('/todos/:todoId', (req, res) => {
// //   TodoModel.findById(req.params.todoId)
// //     .then(response => {
// //       res.status(200).json(response);
// //     })
// //     .catch(err => {
// //       res.status(500).json({
// //         error: 'Something went wrong',
// //         message: err,
// //       });
// //     });
// // });

// module.exports = router;
