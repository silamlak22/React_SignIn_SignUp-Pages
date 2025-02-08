// src/components/SignUp.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const SignUp = () => {
  return (
    <div className="container">
      <h1 className="signup-h1">Sign Up</h1>
      <form className="form">
        <div className="container-2">
          <div className="email-pass-confirm">
            <div className="input-group">
              <div className="lbl-mbtm">
                <label>Name:</label>
              </div>
              <input
                type="text"
                className="input-field"
                placeholder="Enter your name"
              />
            </div>
            <div className="input-group">
              <div className="lbl-mbtm">
                <label>Email:</label>
              </div>
              <input
                type="email"
                className="input-field"
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <div className="lbl-mbtm">
                <label>Password:</label>
              </div>
              <input
                type="password"
                className="input-field"
                placeholder="Enter password"
              />
            </div>
            <div className="input-group">
              <div className="lbl-mbtm">
                <label>Confirm Password:</label>
              </div>
              <input
                type="password"
                className="input-field"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <button type="submit" className="sub-btn">
            Sign In
          </button>
        </div>
      </form>
      <div className="signin">
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="signin-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>

    // <div className="container">
    //   <div className="signup-box">
    //     <h1 className="signin-h1">Sign In</h1>
    //     <form className="signup-form">
    //       <div className="input-group">
    //         <label>Name</label>
    //         <input type="text" placeholder="Enter your name" />
    //       </div>
    //       <div className="input-group">
    //         <label>Email</label>
    //         <input type="email" placeholder="Enter your email" />
    //       </div>
    //       <div className="input-group">
    //         <label>Password</label>
    //         <input type="password" placeholder="Enter password" />
    //       </div>
    //       <div className="input-group">
    //         <label>Confirm Password</label>
    //         <input type="password" placeholder="Confirm password" />
    //       </div>
    //       <button type="submit" className="signup-button">
    //         Sign Up
    //       </button>
    //     </form>
    //     <p>
    //       Already have an account?{" "}
    //       <Link to="/signin" className="signin-link">
    //         Sign In
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
};

export default SignUp;
