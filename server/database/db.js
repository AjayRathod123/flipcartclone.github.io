import mongoose from "mongoose";

const connect = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("HO GAYA");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
