import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../CSS/Cart.css";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(cartItems);
  });

  return (
    <>
      <div className="main__cart">
        <div className="left__cart">
          <div className="left__heading">
            <h2>My Cart (1) </h2>

            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="
              alt="locationlogo"
            />
            <p className="deliver">Deliver to</p>

            <p className="location">Navi Mumbai - 400614</p>
          </div>
          <div className="left__body">
            <div className="body__left">
              <img
                src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70"
                alt="watch"
              />
              <div className="bottom">
                <div className="count">
                  <p onClick={() => minus()}>-</p>
                  <p>{count}</p>
                  <p onClick={() => plus()}>+</p>
                </div>
              </div>
            </div>
            <div className="body__right">
              <p className="body__rightheader">
                Molife Sense 500 Smartwatch (Black Strap, Freesize)
              </p>
              <p className="smart">Smart Watch</p>
              <p className="seller">Seller : SuperComNet</p>
              <div className="price">
                <p className="fakeprice">₹4049</p>
                <strike className="realprice">₹ 6999</strike>
                <p className="discountt">52% off</p>
              </div>
              <div className="saveorremove">
                <h2 className="save">Save For Later</h2>
                <h2 className="remove">Remove</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="right__cart">
          <div className="right__header">
            <h3>Price Details</h3>
          </div>
          <div className="right__details">
            <div className="right__price">
              <h3>Price ({count} items)</h3>
              <h3>₹ 6999</h3>
            </div>
            <div className="right__discount">
              <h3>Discount</h3>
              <h3>- ₹ 2950</h3>
            </div>
            <div className="right__charges">
              <h3>Delivery Charges</h3>
              <h3 className="free">FREE</h3>
            </div>
            <div className="right__total">
              <h2>Total Amount</h2>
              <h2>₹ 4049</h2>
            </div>
            <div className="right__save">
              <h3>You will save ₹ 2950 on this order</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
