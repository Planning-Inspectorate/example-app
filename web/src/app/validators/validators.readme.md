# Validators

Express-Validator is a middleware for Express.js that provides functionalities for validating and sanitizing data. It's built on top of the validator.js library, which provides dozens of string validation and sanitization methods.

It works by checking the request body against validator that has been defined. In this app, if this happens, an error object will be created and added to the request body containing details of the error.