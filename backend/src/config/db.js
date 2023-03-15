/* MONGODB CONNECT */
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
    console.log("Unable to connect !");
  }
};

module.exports = { connect };
