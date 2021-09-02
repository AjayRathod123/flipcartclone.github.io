import Mongoose from "mongoose";

const schema = new Mongoose.Schema({
  id: String,
  url: String,
  detailURL: String,
  title: Object,
  price: Object,
  description: String,
  discount: String,
  tagline: String,
});

const product = Mongoose.model("product", schema);
export default product;
