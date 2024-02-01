const mongoose = require("mongoose");

const DbConnection = async (username, password) => {
  const ConnectionURL = `mongodb+srv://${username}:${password}@skribblecruster.mqxpovo.mongodb.net/?retryWrites=true&w=majority`;

  try {
    //connecting to mongo db
    mongoose.connect(ConnectionURL, {
      autoIndex: true,
    });
    console.log("Databse connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};
module.exports = DbConnection;
