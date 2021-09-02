import React, { useContext } from "react";
import { useState } from "react";
import "../CSS/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import Login from "../Login";
import { LoginContext } from "../Component/ContextProvider";
import { Typography } from "@material-ui/core";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const openLoginDialogue = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="header__imgContent">
            <NavLink to="/">
              <img
                className="header__image"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="flipkart-logo"
              />
            </NavLink>
            <p className="header__explore">
              Explore <span className="plus">Plus</span>
            </p>
          </div>
          <div className="header__input">
            <input
              type="text"
              placeholder="Search for products,brands and more"
            />
            <SearchIcon className="header__searchIcon" />
          </div>

          {account ? (
            <Typography>{account}</Typography>
          ) : (
            <div className="header__button">
              <button onClick={() => openLoginDialogue()}>Login</button>
            </div>
          )}
          <div className="header__more">
            <h3>More</h3>
          </div>
          <div className="header__cart">
            <NavLink to="/cart">
              <ShoppingCartIcon className="header__shoppingIcon" />
            </NavLink>
            <NavLink to="/cart">
              <h4>Cart</h4>
            </NavLink>
            <Login open={open} setOpen={setOpen} setAccount={setAccount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
