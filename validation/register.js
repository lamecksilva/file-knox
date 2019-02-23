// Loading the validator module and isEmpty module
const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateRegisterInput = (data) => {
  const errors = {};

  /*
  If data.any not is empty, returns the data.any
  else
  */
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // Check the lenght of the name
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  // Check the email String
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Check the lenght of the password
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  // Check if the passwords are equals
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Password must match';
  }

  // If is empty
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // If is empty
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // If is empty
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  // If is empty
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
