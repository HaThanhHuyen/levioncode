import logo1 from "../image/logo 1.png";
import background from "../image/OBJECTS.png";
import "../Components/Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();


  async function onsubmit(){
  const response  = await axios.post(
    "https://dev.go.locate.sa/api/admin/api/v1/test/register",
    {
      name,
      email,
      password,
    }
  );

  try {
    const response = await axios.patch(
      `https://dev.go.locate.sa/api/admin/api/v1/test/users/${response.data.user}/active`,
      {},
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.NjQzNjIyMmQ1NzgwMTEzOWNmYzUyNzMx.FHuabwi3sRHJqU0pBYTZlaZX2nOMgAv88tzNfOPgHpM",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}



  // eslint-disable-next-line no-redeclare
  function onsubmit(){
    // console.log("email", email)
    // console.log("name", name)
    // console.log("password", password)
  }


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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value) }
              required
            />
            <br />
          </div>
          <input className="checkbox" type="checkbox" />I accept Terms of
          Service and Privacy Policy.
          <div>
            <button className="submit" onClick={onsubmit}>Create Account</button>
          </div>
          <div className="forgot_psw">
            <p>Forgot Password</p>
          </div>
          <div>
            <span>Already have an account? </span>
            <Link to="/">Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
