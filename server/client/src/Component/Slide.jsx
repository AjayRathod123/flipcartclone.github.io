import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Countdown from "react-countdown";
import "../CSS/Slide.css";
import { NavLink } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles({
  image: {
    height: 150,
  },
});

const Slide = ({ title, timer, products }) => {
  const classes = useStyle();
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  };

  return (
    <Box>
      <div className="slide">
        <div className="slide__header">
          <h2 className="slide__heading">{title}</h2>
          {timer && (
            <>
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
                alt="timer"
              />
              <Countdown
                className="slide__timing"
                date={Date.now() + 5.04e7}
                renderer={renderer}
              />
            </>
          )}
          <button>View All</button>
        </div>

        <Carousel
          className="slide__content"
          responsive={responsive}
          infinite={true}
          centerMode={true}
          autoPlay={true}
        >
          {products.map((product) => (
            <NavLink
              to={`product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box textAlign="centre" paddingTop="10px">
                <img
                  src={product.url}
                  alt="productimg"
                  className={classes.image}
                />

                <Typography
                  style={{
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                  className="product__shortTitle"
                >
                  {product.title.shortTitle}
                </Typography>
                <Typography
                  style={{
                    color: "#388e3c",
                  }}
                  className="product__discount"
                >
                  {product.discount}
                </Typography>
                <Typography
                  style={{ color: "gray" }}
                  className="product__tagline"
                >
                  {product.tagline}
                </Typography>
              </Box>
            </NavLink>
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default Slide;
