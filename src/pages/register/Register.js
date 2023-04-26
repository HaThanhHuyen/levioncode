import logo1 from "../../image/logo 1.png";
import background from "../../image/OBJECTS.png";
import "../register/Register.css";

import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useLogicRegister from "./useLogicRegister";

function Register() {
  const {
    formData,
    isLoading,
    nameRef,
    onsubmit,
    name,
    setName,
    emailRef,
    email,
    setEmail,
    passwordRef,
    password,
    setPassword,
    setIsChecked,
    isChecked,
    loading,
    setLoading,
    debounce,
    checkboxbutton,
    validMsg,
  } = useLogicRegister();

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
          <div className="heading">
            <h1>Create an account</h1>
          </div>
          
          <div>
            <label htmlFor="name">Full name</label>
            <br />
            <input
              type="text"
              placeholder="Your Name"
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
            />
            <span>{validMsg.fullname}</span>
            <br />
          </div>
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
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Your Password"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{validMsg.password}</span>
            <br />
          </div>
          <div className="input-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className="term_policy">
              I accept Levion's <span>Terms of Service</span> and <span>Privacy Policy</span>.
            </div>
          </div>
          <div className="btn-wrapper">
            <button
              type="button"
              onClick={onsubmit}
              className={`submit ${!isChecked ? "disabled-btn" : ""}`}
            >
              Create Account
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
export default Register;