import logo1 from "../../image/logo 1.png";
import background from "../../image/OBJECTS.png";
import "../forgot_password/forgot_password.css";

import React from "react";
import { Link } from "react-router-dom";
import useLogicForgotPassword from "./useLogicForgotPassword";

function forgot_password() {
  const {
    formData,
    isLoading,
    onsubmit,
    emailRef,
    email,
    setEmail,
    loading,
    setLoading,
    validMsg,
  } = useLogicForgotPassword;

  return (
    <>
      <div id="wrapper">
        <div className="layout_background"></div>
        <div className="background">
          <img src={background} alt="a" />
        </div>
        <div id="login">
          <div className="logo1">
            <img src={logo1} alt="a" />
          </div>
          <h1 className="heading">Forgot Password</h1>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Your Email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{validMsg.email}</span>
            <br />
          </div>
          <div className="btn-wrapper">
            <button
              type="button"
              onClick={onsubmit}
              className=""
            >
              Reset Password
              {!loading && (
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </button>
          </div>
          <div className="change-to-signIn">
            <span>Already have an account? </span>
            <Link to="/">Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default forgot_password;