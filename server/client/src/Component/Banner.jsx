import React from "react";
import Carousel from "react-material-ui-carousel";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel
        className="carousel"
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/1600/1600/image/f0c2d073bfa33be2.jpeg?q=50"
          alt="bannerimg"
        />
        <img
          src="https://rukminim1.flixcart.com/flap/1600/1600/image/6948a26136841ca7.jpg?q=50"
          alt="bannerimg"
        />
        <img
          src="https://rukminim1.flixcart.com/flap/1600/1600/image/cdb0d3f21835c81e.jpg?q=50"
          alt="bannerimg"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
