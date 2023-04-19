import logo1 from "../../image/logo 1.png";
import background from "../../image/OBJECTS.png";
import "../register/Register.css";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
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
    debounce
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
          <h1 className="heading">Create an account</h1>
          <div>
            <label htmlFor="name">Full name</label>
            <br />
            <input
              type="text"
              placeholder="Your Name"
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
            />
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
            <br />
          </div>
          <input
            className="checkbox"
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          I accept Levion's Terms of Service and Privacy Policy.
          <div>
            {loading ?(
              <button type="button" onClick={debounce(onsubmit,1000)}
              className="submit"
              disabled={!isChecked}
              >
                Create Account
              </button>
            ):(
              <button className="button" disabled>
                <div className="loader"></div>

              </button>
            )}
          </div>
          <div>
            <span>Already have an account? </span>
            <Link to="/">Sign In</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default Register;
