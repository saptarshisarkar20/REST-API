const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connect_it = async () => {
  try {
    const result = mongoose.connect("mongodb://127.0.0.1/students-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Students-api connection successful");
  } catch (err) {
    console.log(`Not connected to students api - ${err}`);
  }
};

connect_it();
