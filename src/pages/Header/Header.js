import logo from "../../image/logo 1.png";
import cart from "../../image/Icon Cart.png";
// import "../Header/Header.css";
import styles from "./Header.module.css"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="logo"></img>
        <div className={styles.header_category}>
          <Link to='/#'>Level Test</Link>
          <Link to='/#'>Courses</Link>
          <Link to='/#'>Learning Resources</Link>
          <Link to='/aboutUs'>About us</Link>
        </div>
        <div className={styles.header_right}>
          <img src={cart} alt="cart"></img>
          <Link to='/'><button id={styles.btn_left}>Sign in</button></Link>
          <Link to='/register'><button>Sign up</button></Link>
        </div>
      </div>
    </>
  );
}