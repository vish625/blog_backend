const { checkSchema } = require('express-validator');
const { RegisterUserValidationConstants } = require("../constants/ValidationConstants");

// Signup Validation
const signupUserValidationSchema = checkSchema({
  user_name: {
    in: ['body'],
    trim: true,
    notEmpty: {
      errorMessage: RegisterUserValidationConstants.UserNameNotEmpty,
    },
    isLength: {
      options: { min: 3 },
      errorMessage: RegisterUserValidationConstants.UserNameLength,
    }
  },
  email: {
    in: ['body'],
    normalizeEmail: true,
    isEmail: {
      errorMessage: RegisterUserValidationConstants.EmailInvalid,
    }
  },
  password: {
    in: ['body'],
    trim: true,
    notEmpty: {
      errorMessage: RegisterUserValidationConstants.PasswordNotEmpty,
    },
    isLength: {
      options: { min: 6 },
      errorMessage: RegisterUserValidationConstants.PasswordLength,
    }
  }
});

// Login Validation
const loginUserValidationSchema = checkSchema({
  email: {
    in: ['body'],
    normalizeEmail: true,
    isEmail: {
      errorMessage: RegisterUserValidationConstants.EmailInvalid,
    }
  },
  password: {
    in: ['body'],
    trim: true,
    notEmpty: {
      errorMessage: RegisterUserValidationConstants.PasswordNotEmpty,
    },
    isLength: {
      options: { min: 6 },
      errorMessage: RegisterUserValidationConstants.PasswordLength,
    }
  }
});

module.exports = { signupUserValidationSchema, loginUserValidationSchema };
