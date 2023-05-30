const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

// Here's how the code works:

// The mongoose module is imported using require('mongoose'). This allows you to use the Mongoose library in your code.

// The connectDB function is defined as an asynchronous function. It is responsible for establishing a connection to the MongoDB database.

// Within the connectDB function, mongoose.connect() is called to establish the connection. The connection string is obtained from the process.env.DB_STRING environment variable. This allows you to securely store the connection string in an environment variable and access it in your code. The mongoose.connect() function also accepts an options object that configures various settings for the connection. In this case, the options include useNewUrlParser: true, useUnifiedTopology: true, and useFindAndModify: false.

// If the connection is established successfully, the console.log() function is called to print a message indicating that the MongoDB connection is successful, including the hostname of the connected database.

// If an error occurs during the connection process, the catch block is executed. The error is logged using console.error() and the process is exited with a non-zero exit code using process.exit(1). This helps to terminate the application if the database connection cannot be established, indicating a critical failure.

// Finally, the connectDB function is exported as a module, making it available for other parts of your application to use.

// To use this module in your application, you would typically import it in another file and call the connectDB() function to establish the database connection.