import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/LevionContext";
import logo1 from "../../image/logo 1.png";
import styles from "./Login.module.css";
import facebook from "../../image/fb.png";
import google from "../../image/google.png";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// import firebaseConfig from "./firebase";

function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "authData");
        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user, "authData");
      navigate("/profile"); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/"); 
    }
  }, [user, navigate]);

  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.layout_background}>
          <div className={styles.background}></div>
        </div>

        <div id={styles.login}>
          <div className={styles.logo1}>
            <a href="/homePage">
              <img src={logo1} alt="a" />
            </a>
          </div>

          <div className={styles.heading}>
            <h1 onClick={() => setLogin(true)}>Sign in to your account</h1>
          </div>

          <div className={styles.form}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className={styles.login_input}
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              className={styles.login_input}
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>

          <div className={styles.btn_wrapper}>
            <button className={styles.submit} onClick={handleSubmit}>
              Sign In
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
              <button
                className={styles.continue_google}
                onClick={handleGoogleSignIn}
              >
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
