import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navlist__list">
          <div className="navbar__topOrder">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
              alt="topOrder"
            />
            <h3>Top Order</h3>
          </div>
          <div className="navbar__grocery">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              alt="grocery"
            />
            <h3>Grocery</h3>
          </div>
          <div className="navbar__mobile">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
              alt="mobile"
            />
            <h3>Mobiles</h3>
          </div>
          <div className="navbar__fashion">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
              alt="fashion"
            />
            <h3>Fashion</h3>
          </div>
          <div className="navbar__electronics">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
              alt="electronics"
            />
            <h3>Electronics</h3>
          </div>
          <div className="navbar__home">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=10"
              alt="home"
            />
            <h3>Home</h3>
          </div>
          <div className="navbar__appliances">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
              alt="appliances"
            />
            <h3>Appliances</h3>
          </div>
          <div className="navbar__travel">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
              alt="travel"
            />
            <h3>Travel</h3>
          </div>
          <div className="navbar__beauty">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
              alt="beauty"
            />
            <h3>Beauty</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
