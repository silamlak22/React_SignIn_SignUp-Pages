import react, { useState } from "react";
import "../styles/signin.css";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <h1 className="signin-h1">Sign In</h1>
      <form className="form">
        <div className="container-2">
          <div className="email-password">
            <div className="inputs email">
              <span>
                <div className="lbl-mbtm">
                  <label className="lebel-btm">Email or Username: </label>
                </div>
                <input
                  type="text"
                  className="input-field email-field"
                  placeholder="Enter your Email or Username"
                />
              </span>
            </div>
            <div className="inputs password">
              <span>
                <div className="lbl-mbtm">
                  <label>Password: </label>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input-field pass-field fas fa-eye"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  type="button"
                  onClick={togglePassVisibility}
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                />
              </span>
            </div>
          </div>
          <button type="submit" className="sub-btn">
            Sign In
          </button>
        </div>
      </form>
      <div className="forgot-signup">
        <Link to="/forgotpass" className="forgot-link">
          Forgot Password?
        </Link>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
