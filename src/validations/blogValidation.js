const { checkSchema } = require('express-validator');
const { BlogValidationConstants } = require("../constants/ValidationConstants");

// Blog Create / Update Validation
const blogValidationSchema = checkSchema({
  title: {
    in: ['body'],
    trim: true,
    notEmpty: {
      errorMessage: BlogValidationConstants.TitleNotEmpty,
    },
    isLength: {
      options: { min: 3, max: 100 },
      errorMessage: BlogValidationConstants.TitleLength,
    }
  },
  content: {
    in: ['body'],
    trim: true,
    notEmpty: {
      errorMessage: BlogValidationConstants.ContentNotEmpty,
    },
    isLength: {
      options: { min: 10 },
      errorMessage: BlogValidationConstants.ContentLength,
    }
  },
  category_id: {
    in: ['body'],
    notEmpty: {
      errorMessage: BlogValidationConstants.CategoryNotEmpty,
    },
    isMongoId: {
      errorMessage: BlogValidationConstants.CategoryInvalid,
    }
  }
});

module.exports = { blogValidationSchema };
