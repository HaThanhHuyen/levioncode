import logo1 from "../image/logo 1.png";
import background from "../image/OBJECTS.png";
import "../Components/sign_in.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div id="wrapper">
        <div className="layout_background"></div>
        <div className="background">
          <img src={background} alt="a" />
        </div>
        <form action="" id="login">
          <div className="logo1">
            <img src={logo1} alt="a" />
          </div>
          <h1 className="heading">Sign in to your account</h1>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              className="input"
              placeholder="Your Email"
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              className="input"
              placeholder="Your Password"
              required
            />
            <br />
          </div>
          <div>
            <button className="submit">Sign in</button>
          </div>
          <div className="forgot_psw">
            <p>Forgot Password</p>
          </div>
          <div>
            <span>Don't have an account? </span>
            <Link to="/register">Sign Up</Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
