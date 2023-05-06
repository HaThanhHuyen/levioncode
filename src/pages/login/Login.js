import logo1 from "../../image/logo 1.png";
import background from "../../image/OBJECTS.png";
// import "../login/Login.module.css";
import styles from "./Login.module.css"
import { Link } from "react-router-dom";
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
    onSubmit
  } = useLogicLogin();

  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.layout_background}></div>
        <div className={styles.background}>
          <img src={background} alt="a" />
        </div>
        <div id={styles.login}>
          <div className={styles.logo1}>
            <img src={logo1} alt="a" />
          </div>
          <div className={styles.heading}>
            <h1>Sign in to your account</h1>
          </div>
          
          <div className={styles.form}>
            <label htmlFor="email">Email</label>
            <br />
            <input className={styles.login_input}
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
            <input className={styles.login_input}
              type="password"
              placeholder="Your Password"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{validMsg.password}</span>
            <br />
          </div>
          
          <div className={styles.btn_wrapper}>
            <button className= {styles.submit} onClick={onSubmit}>Sign In
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
        </div>
      </div>
    </>
  );
}
export default Login;
