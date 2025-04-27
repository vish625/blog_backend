const RegisterUserValidationConstants = {
    NameString: "Name must be a string",
    NameNotEmpty: "Name should not be null or empty",
    EmailInvalid: "Email is invalid",
    PasswordNotEmpty: "Password should not be null or empty",
    PasswordLength: "Password must be atleast 8 characters"
}
const BlogValidationConstants = {
    TitleNotEmpty: "Blog title cannot be empty",
    TitleLength: "Blog title must be between 3 and 100 characters",
    ContentNotEmpty: "Blog content cannot be empty",
    ContentLength: "Blog content must be at least 10 characters",
    CategoryNotEmpty: "Category must be provided",
    CategoryInvalid: "Category ID must be valid Mongo ID"
  };
  
  module.exports = { 
    RegisterUserValidationConstants, 
    BlogValidationConstants 
  };
  
