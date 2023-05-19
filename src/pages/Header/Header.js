import logo from "../../image/logo 1.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import cart1 from "../../image/Icon Cart.png";
import cow_header from "../../image/cow-header.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a href="/homePage">
        <img src={logo} alt="logo" className="logo"></img>
      </a>
      <div className="cow_header">
        <a href="/homePage">
          <img src={cow_header} alt="cow_header"></img>
        </a>
      </div>
      <nav ref={navRef}>
      <div className="cow_header_nav">
        <a href="/homePage">
          <img src={cow_header} alt="cow_header"></img>
        </a>
      </div>
      <a href="/test">Level Test</a>
        <a href="/coursesList">Courses</a>
        <div className="Learning">
          <ul>
            <li>
              <a href="">Learning Resources</a>
              <ul>
                <li>
                  <a href="#">Podscast</a>
                </li>
                <li>
                  <a href="#">Digital Flashcards</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="/socialNetwork">Social Network</a>
                </li>
                <li>
                  <a href="#">Our Community</a>
                </li>
                <li>
                  <a href="#">eBooks</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a href="/aboutUs">About us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <div className="header_right">
          <Link to="/shoppingCart">
            <img className="addToCart" src={cart1} alt="cart"></img>
          </Link>
          <Link to="/">
            <button id="btn_left">Sign in</button>
          </Link>
          <Link to="/register">
            <button id="btn_right" >Sign up</button>
          </Link>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
