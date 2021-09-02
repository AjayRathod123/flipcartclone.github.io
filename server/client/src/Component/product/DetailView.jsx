import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/action/productAction";
import "../../CSS/DetailView.css";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { addToCart } from "../../redux/action/cartAction";
import { useHistory } from "react-router-dom";

const DetailView = ({ match }) => {
  const { product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const addToCartItems = () => {
    dispatch(addToCart(product.id));
    history.push("/cart");
  };

  return (
    <div className="productCart__main">
      {product && Object.keys(product).length && (
        <div className="productCart">
          <div className="productCart__left">
            <div className="left__img">
              <img
                className="productimg"
                src={product.url}
                alt="pruducturlimg"
                style={{ width: "300px", height: "350px" }}
              />
            </div>
            <div className="left__buttons">
              <div className="addToCart">
                <h2 className="add__button" onClick={() => addToCartItems()}>
                  <ShoppingCartIcon className="shopIcon" /> Add To Cart
                </h2>
              </div>
              <div className="buyNow">
                <h2 className="buy__button">
                  <FlashOnIcon className="flashIcon" /> Buy Now
                </h2>
              </div>
            </div>
          </div>
          <div className="productCart__right">
            <div className="productCart__rightTitle">
              <div className="shortTitle">{product.title.shortTitle}</div>
              <div className="longTitle">{product.title.longTitle}</div>
            </div>
            <div className="rightPrice">
              <div className="cost">{`₹${product.price.cost}`}</div>
              <div className="mrp"> {`₹${product.price.mrp}`} </div>
              <div className="discount">{`${product.price.discount} off`}</div>
              <div className="hurry">Hurry, Only a few left!</div>
            </div>
            <div className="rating">
              <div className="ratingstar">
                <p>4.2 ⭐ </p>
              </div>
              <div className="ratinginfo">
                <p> 28,928 ratings and 4,797 reviews </p>
                <div className="ratinginfo__img">
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="availableoffer">
              <h3>Avaiable offers</h3>
              <p>
                <LocalOfferIcon
                  style={{
                    fontSize: "17px",
                    marginRight: "15px",
                    color: "#26a541",
                  }}
                />
                <span style={{ fontWeight: "bold" }}>Bank Offer</span> 5%
                Unlimited Cashback on Flipkart Axis Bank Credit Card{" "}
                <span
                  className="hover"
                  style={{ color: "#2874f0", fontWeight: "bold" }}
                >
                  T&C
                </span>
              </p>
              <p>
                <LocalOfferIcon
                  style={{
                    fontSize: "17px",
                    marginRight: "15px",
                    color: "#26a541",
                  }}
                />
                <span style={{ fontWeight: "bold" }}>Bank Offer</span> 20% off
                on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd
                Bank,SBI Cards and Mobikwik{" "}
                <span
                  className="hover"
                  style={{ color: "#2874f0", fontWeight: "bold" }}
                >
                  T&C
                </span>
              </p>

              <p>
                <LocalOfferIcon
                  style={{
                    fontSize: "17px",
                    marginRight: "15px",
                    color: "#26a541",
                  }}
                />
                <span style={{ fontWeight: "bold" }}>Bank Offer</span> 10% Off
                on Bank of Baroda Mastercard debit card first time transaction,
                Terms and Condition apply{" "}
                <span
                  className="hover"
                  style={{ color: "#2874f0", fontWeight: "bold" }}
                >
                  T&C
                </span>
              </p>
              <p>
                <LocalOfferIcon
                  style={{
                    fontSize: "17px",
                    marginRight: "15px",
                    color: "#26a541",
                  }}
                />
                <span style={{ fontWeight: "bold" }}>Bank Offer</span> 10% Off
                on First time ICICI Bank Mastercard Credit Card transaction, TnC
                Applicable{" "}
                <span
                  className="hover"
                  style={{ color: "#2874f0", fontWeight: "bold" }}
                >
                  T&C
                </span>
              </p>
            </div>
            <div className="delivery__info">
              <div className="delivery">
                <p>Delivery</p>
                <p className="deliveryDate">{date.toString()}</p>
              </div>
              <div className="Warrenty">
                <p>Warrenty</p>
                <p className="nowarrenty">No Warrenty</p>
              </div>
              <div className="Seller">
                <p>Seller</p>
                <div className="Seller__info">
                  <p className="supercomnet">SuperComNet</p>
                  <p className="sellinfo">GST invoice available</p>
                  <p className="sellinfo">14 Days Return Policy</p>
                  <p className="sellinfo">
                    View more sellers starting from ₹300{" "}
                  </p>
                </div>
              </div>
              <div className="supercoin">
                <img
                  src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
                  alt="supercoin"
                />
              </div>
              <div className="desc">
                <p>Description</p>
                <p className="descrip">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
