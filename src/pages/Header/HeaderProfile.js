import logo from "../../image/logo 1.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import cart1 from "../../image/Icon Cart.png";
import cow_header from "../../image/cow-header.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import heart from "../../image/heart1.png";
import noti from "../../image/notification.png";
import avtProfile from "../../image/avtcourse.png";
import { signOut } from "firebase/auth";
import { database } from "../login/firebase";
import { useNavigate } from "react-router-dom";

function HeaderProfile({ loggedInEmail, email }) {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      navigate("/");
    });
  };

  const navRef = useRef();
  console.log("email", email);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const renderHeaderRight = () => {
    if (loggedInEmail) {
      return (
        <div className="header_right">
          <Link to="/shoppingCart">
            <img className="addToCart" src={cart1} alt="cart" />
          </Link>
          <Link to="#" id="noti">
            <img className="" src={noti} alt="noti" />
          </Link>
          <Link to="#" id="Heart">
            <img className="" src={heart} alt="heart" />
          </Link>
          <div className="Profile">
            <ul>
              <li className="menuImg">
                <img className="" src={avtProfile} alt="avtProfile" />
                <ul className="menuProfile">
                  <button>
                    <li onClick={handleClick}>Log out</li>
                  </button>
                  <Link to="/profile">
                    <li>
                      <button>Profile</button>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header_right1">
          <Link to="/shoppingCart">
            <img className="addToCart" src={cart1} alt="cart" />
          </Link>
          <Link to="/" id="SignIn">
            <button id="btn_left">Sign in</button>
          </Link>
          <Link to="/register" id="SignUp">
            <button id="btn_right">Sign up</button>
          </Link>
        </div>
      );
    }
  };

  return (
    <header>
      <Link to="/homePage" className="imgheader">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="cow_header">
        <Link to="/homePage">
          <img src={cow_header} alt="cow_header" />
        </Link>
      </div>
      <div className="navContents">
        <nav ref={navRef}>
          <div className="cow_header_nav">
            <Link to="/homePage">
              <img src={cow_header} alt="cow_header" />
            </Link>
          </div>
          <Link to="/test">Level Test</Link>
          <Link to="/courseList">Courses</Link>
          <div className="Learning">
            <ul>
              <li className="menuIcon">
                <Link to="/learningResources" className="titleLearning">
                  Learning Resources
                </Link>
                <div className="LearningIcon">
                  <BiChevronDown />
                </div>
                <ul className="menuLearning">
                  <li>
                    <Link to="/podcast">Podcast</Link>
                  </li>
                  <li>
                    <Link to="#">Digital Flashcards</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/socialNetwork">Social Network</Link>
                  </li>
                  <li>
                    <Link to="#">Our Community</Link>
                  </li>
                  <li>
                    <Link to="#">eBooks</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/aboutUs">About us</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          {renderHeaderRight()}
        </nav>
      </div>
      <div className="btnCart">
        <Link to="/shoppingCart">
          <img className="addToCart1" src={cart1} alt="cart" />
        </Link>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default HeaderProfile;
