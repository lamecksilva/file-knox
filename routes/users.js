// /server/routes/users.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const gravatar = require("gravatar");

// Load the User Model
const User = require("../db/models/User");

// Load Register Validation
const validateRegisterInput = require("../validation/register");

// Load Login Validation
const validateLoginInput = require("../validation/login");

// Declaring Routes

// @Route   POST api/users/register
// @desc    Register a new User
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    console.log("Not Valid");

    res.status(400).json(errors);
  } else {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          // If exists an user with that email, return an error
          console.log("User Found");

          errors.email = "Email already exists";
          return res.status(400).json(errors);
        } else {
          // Else, create and save an new user
          const avatar = gravatar.url(req.body.email, {
            size: "200",
            rating: "pg",
            default: "mm"
          });

          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            avatar,
            password: req.body.password
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;

              newUser.password = hash;
              console.log("Saving a new user");

              newUser
                .save()
                .then(user => res.json(user))
                .catch(error => console.log(error));
            });
          });
        }
      })
      .catch(error => {
        console.log("Error in FindOne");
        console.log(error);
      });
  }
});

// @Route   POST api/users/login
// @desc    Login
// @access  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    res.status(400).json(errors);
  }

  // Find user by email
  User.findOne({ email })
    .then(user => {
      // Check for user
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }

      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched

          const payload = {
            id: user.id,
            name: user.name,
            avatar: user.avatar
          }; // Create JWT payload

          // Sign Token
          jwt.sign(
            // When user log in, the backend creates a signed token and returns it in response
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Password incorrect";
          return res.status(400).json(errors);
        }
      });
    })
    .catch(error => console.log(error));
});

router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// @Route   GET api/users/:id
// @desc    Get an user by id
// @access  Public
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => {
      return res.json(user);
    })
    .catch(error => console.log(error));
});

// @Route   DELETE api/users/:id
// @desc    Delete an user by id
// @access  Public
router.delete("/:id", (req, res) => {
  let errors = {};

  User.findByIdAndDelete({ _id: req.params.id })
    .then(user => {
      if (!user) {
        errors.noUser = "There is no user for this ID";
        return res.status(400).json(errors);
      }

      res.json(user);
    })
    .catch(error => {
      console.log(error);
      return res.status(404).json({ noUser: "There is no user for this ID" });
    });
});

// Exporting the Router
module.exports = router;
