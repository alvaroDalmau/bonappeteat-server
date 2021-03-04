const express = require('express');
const router = express.Router();

//we installed bcrypt.js
const bcrypt = require('bcryptjs');

const UserModel = require('../models/User.model');

// will handle all POST requests to http://localhost:5005/api/user/log
router.post('/user/log', (req, res) => {
  const { email, password } = req.body;

  // -----SERVER SIDE VALIDATION ----------

  if (!email || !password) {
    res.status(500).json({
      errorMessage: 'Please enter username, email and password',
    });
    return;
  }
  // const myRegex = new RegExp(
  //   /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
  // );
  // if (!myRegex.test(email)) {
  //   res.status(500).json({
  //     errorMessage: 'Email format not correct',
  //   });
  //   return;
  // }
  // const myPassRegex = new RegExp(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  // );
  // if (!myPassRegex.test(password)) {
  //   res.status(500).json({
  //     errorMessage:
  //       'Password needs to have 8 characters, a number and an Uppercase alphabet',
  //   });
  //   return;
  // }

  UserModel.findOne({ email })
    .then(response => {
      if (response) {
        //if there is a user, loggedIN
        bcrypt
          .compare(password, response.password)
          .then(doesItMatch => {
            //if it matches
            if (doesItMatch) {
              // req.session is the special object that is available to you
              response.password = '***';
              req.session.loggedInUser = response;
              res.status(200).json(response);
            }
            //if passwords do not match
            else {
              res.status(500).json({
                error: "Passwords don't match",
              });
              return;
            }
          })
          .catch(() => {
            res.status(500).json({
              error: 'Email format not correct',
            });
            return;
          });
      } else {
        //if there is no user, create one
        // NOTE: Used the Sync methods here.
        // creating a salt
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        UserModel.create({ email, password: hash })
          .then(user => {
            // ensuring that we don't share the hash as well with the user
            user.passwordHash = '***';
            req.session.loggedInUser = response;
            res.status(200).json(user);
          })
          .catch(err => {
            if (err.code === 11000) {
              res.status(500).json({
                errorMessage: 'username or email entered already exists!',
                message: err,
              });
            } else {
              res.status(500).json({
                errorMessage: 'Something went wrong! Go to sleep!',
                message: err,
              });
            }
          });
      }
    })
    .catch(() => {
      console.log('Something went wrong logging or creating a user');
    });
});

// will handle all POST requests to http://localhost:5005/api/logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  // Nothing to send back to the user
  res.status(204).json({});
});

// middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    //calls whatever is to be executed after the isLoggedIn function is over
    next();
  } else {
    res.status(401).json({
      message: 'Unauthorized user',
      code: 401,
    });
  }
};

// THIS IS A PROTECTED ROUTE
// will handle all get requests to http://localhost:5005/api/user
router.get('/user', isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});
// will handle all DELETE requests to http://localhost:5005/api/user
router.delete('/user/', isLoggedIn, (req, res) => {
  UserModel.findByIdAndDelete(req.params.loggedInUser)
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

// will handle all PATCH requests to http://localhost:5005/api/user
router.patch('/user/', isLoggedIn, (req, res) => {
  let id = req.params.loggedInUser;
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
