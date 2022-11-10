const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(
      process.env.DATABASE_MONGO,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
    }catch(error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};
