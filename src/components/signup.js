// src/components/SignUp.js
import { Link } from "react-router-dom";
import react, { useState } from "react";
import "../styles/signup.css";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassVisibility = () => {
    setShowPassword(!showPassword);
  };
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
                type={showPassword ? "text" : "password"}
                className="input-field pass-field "
                value={password}
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                onClick={togglePassVisibility}
                className={`fa ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } eye-icon-signup`}
              ></i>
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
  );
};

export default SignUp;
