import React, { useEffect } from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import Slide from "../Component/Slide";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/action/productAction";
// import { products } from "../Constant/productData";

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div className="home">
        <Navbar />
        <Banner />
        <Slide title="Deal of the Day" timer={true} products={products} />
        <Slide title="Men's Footwear" timer={false} products={products} />
        <Slide
          title="Furniture Bestsellers"
          timer={false}
          products={products}
        />
        <Slide title="Best Battery Phones" timer={false} products={products} />
        <Slide
          title="Discover the Best Value Deals"
          timer={false}
          products={products}
        />
      </div>
    </>
  );
};

export default Home;
