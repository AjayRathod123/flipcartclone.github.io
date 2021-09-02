import { products } from "./constants/productData.js";
import product from "./model/schema.js";

const DefaultData = async () => {
  try {
    await product.deleteMany({});
    await product.insertMany(products);
    console.log("mil gaye bhai sabhi data");
  } catch (error) {
    console.log("data mai kuch gadbad hai");
  }
};

export default DefaultData;
