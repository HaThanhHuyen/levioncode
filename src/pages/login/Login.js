import logo1 from "../../image/logo 1.png";
import background from "../../image/OBJECTS.png";
// import "../login/Login.module.css";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import facebook from "../../image/fb.png";
import google from "../../image/google.png";
import { useState } from "react";
import axios from "axios";
import useLogicLogin from "./useLogicLogin";

function Login() {
  const {
    setEmail,
    setPassword,
    isChecked,
    loading,
    emailRef,
    validMsg,
    passwordRef,
    setIsChecked,
    onSubmit,
  } = useLogicLogin();

  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.layout_background}>
          <div className={styles.background}>
            {/* <img src={background} alt="a" /> */}
          </div>
        </div>

        <div id={styles.login}>
          <div className={styles.logo1}>
            <a href="/homePage">
              <img src={logo1} alt="a" />
            </a>
          </div>

          <div className={styles.heading}>
            <h1>Sign in to your account</h1>
          </div>

          <div className={styles.form}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className={styles.login_input}
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
              className={styles.login_input}
              type="password"
              placeholder="Your Password"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{validMsg.password}</span>
            <br />
          </div>

          <div className={styles.btn_wrapper}>
            <button className={styles.submit} onClick={onSubmit}>
              Sign In
              {!loading && (
                <div class={styles.lds_ring}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </button>
          </div>
          <div className={styles.forgot_psw}>
            <a href="../forgot_password">Forgot Password</a>
          </div>
          <div className={styles.change_to_signUp}>
            <span>Don't have an account? </span>
            <Link to="../register">Sign Up</Link>
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
export default Login;
