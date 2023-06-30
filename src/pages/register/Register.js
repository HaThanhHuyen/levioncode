import logo1 from "../../image/logo 1.png";
import background from "../../image/OBJECTS.png";
import styles from "./Register.module.css";
import facebook from "../../image/fb.png";
import google from "../../image/google.png";
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useLogicRegister from "./useLogicRegister";

function Register() {
  const {
    nameRef,
    onsubmit,
    setName,
    emailRef,
    setEmail,
    passwordRef,
    setPassword,
    setIsChecked,
    isChecked,
    validMsg,
  } = useLogicRegister();

  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.layout_background}>
        <div className={styles.background}>
          {/* <img src={background} alt="a" /> */}
        </div>
        </div>
        <div id={styles.register}>
          <div className={styles.logo1}>
          <a href="/homePage">
              <img src={logo1} alt="a" />
            </a>
          </div>
          <div className={styles.heading}>
            <h1>Create an account</h1>
          </div>
          
          <div>
            <label htmlFor="name">Full name</label><strong>*</strong>
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
            <label htmlFor="email">Email</label><strong>*</strong>
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
            <label htmlFor="password">Password</label><strong>*</strong>
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
          <div className={styles.input_checkbox}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className={styles.term_policy}>
              I accept Levion's <span>Terms of Service</span> and <span>Privacy Policy</span>.
            </div>
          </div>
          <div className={styles.btn_wrapper}>
            <button
              type="button"
              onClick={onsubmit}
              className={`submit ${!isChecked ? "disabled_btn" : ""}`}
            >
              Create Account
              {/* {!loading && (
                <div class={styles.lds_ring}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )} */}
            </button>
          </div>
          <div className={styles.change_to_signIp}>
            <span>Already have an account? </span>
            <Link to="/">Sign In</Link>
          </div>
          <hr />
          <div className={styles.continue}>
            <Link href="">
              <button className={styles.continue_facebook}>
                <img src={facebook} alt="a" />
                Continue with Facebook
              </button>
            </Link>
            <br />
            <Link href="">
              <button className={styles.continue_google}>
                <img src={google} alt="a" />
                Continue with Google
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
}
export default Register;