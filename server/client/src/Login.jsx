import React, { useState } from "react";
import { Dialog, DialogContent, Typography } from "@material-ui/core";
import "./CSS/Login.css";
import { authenticateSignup, authenticateLogin } from "./services/api.js";

const Login = ({ open, setOpen, setAccount }) => {
  const initialValue = {
    login: {
      views: "login",
      heading: "Login",
      subheading: "Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
      views: "signup",
      heading: "SignUp",
      subheading: "Sign up with your mobile number to get started",
    },
  };

  const signupInitialValue = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    number: "",
  };

  const loginInitialValue = {
    email: "",
    password: "",
  };

  const [account, toggleAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
  };

  const toggleUserAccount = () => {
    toggleAccount(initialValue.signup);
  };

  const signupUser = async () => {
    alert("Successfully Registered");
    let response = await authenticateSignup(signup);
    console.log(response);
    setAccount(signup.firstname);
  };

  const loginUser = async () => {
    alert("Login Succefully");
    let response = await authenticateLogin(login);
    if (!response) {
      setError(true);
    }
    handleClose();
    setAccount(login.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Dialog open={open} onClose={() => handleClose()}>
        <DialogContent>
          <div className="login__mainDiv">
            <div className="login__leftDiv">
              <h2>{account.heading}</h2>
              <h4>{account.subheading}</h4>
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                alt="bg-img"
              />
            </div>

            {account.views === "login" ? (
              <div className="login">
                <form>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => onValueChange(e)}
                    placeholder="Enter Email/Mobile Number"
                  />
                  <br />

                  <input
                    type="text"
                    name="password"
                    onChange={(e) => onValueChange(e)}
                    placeholder="Enter Password"
                  />
                  {error && (
                    <Typography className="error">
                      invalid email or password
                    </Typography>
                  )}
                  <p>
                    By continuing, you agree to Flipkart's
                    <span className="term">Terms of Use</span> and
                    <span className="privacy">Privacy Policy</span> .
                  </p>
                  <button
                    variant="contained"
                    className="right__divBtn"
                    onClick={() => loginUser}
                  >
                    Login
                  </button>
                  <p className="or"> OR</p>
                  <h2 variant="contained" className="request">
                    Request OTP
                  </h2>
                  <p onClick={() => toggleUserAccount()} className="new">
                    New to Flipkart? Create an account
                  </p>
                </form>
              </div>
            ) : (
              <div className="login">
                <form>
                  <input
                    type="text"
                    name="firstname"
                    onChange={(e) => onInputChange(e)}
                    placeholder="Your First Name"
                  />
                  <br />

                  <input
                    type="text"
                    name="lastname"
                    onChange={(e) => onInputChange(e)}
                    placeholder="Your Last Name"
                  />
                  <br />

                  <input
                    type="text"
                    name="email"
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Your Email"
                  />
                  <br />

                  <input
                    type="text"
                    name="password"
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Your Password"
                  />
                  <br />

                  <input
                    type="text"
                    name="number"
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Phone Number"
                  />
                  <br />
                  <p>
                    By continuing, you agree to Flipkart's
                    <span className="term">Terms of Use</span> and
                    <span className="privacy">Privacy Policy</span> .
                  </p>
                  <button
                    onClick={() => signupUser()}
                    variant="contained"
                    className="right__divBtn"
                  >
                    Continue
                  </button>
                </form>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
