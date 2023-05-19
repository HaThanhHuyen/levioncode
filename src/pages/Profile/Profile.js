import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../Profile/Profile.css";
import avtProfile from "../../image/avtProfile.png";
import upload from "../../image/upload.png";
import editImg from "../../image/edit.png";
import account from "../../image/account.png";
import call from "../../image/call.png";
import birthday from "../../image/birthday.png";
import email from "../../image/email.png";
import imageMain from "../../image/imageMain.png";
import process from "../../image/process.png";
import sadFace from "../../image/sadface.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index);
    // console.log(index);
  };

  return (
    <div className="profile">
      <Header />
      <div className="contents">
        <div className="profilePerson">
          <div className="uploadImg">
            <img src={avtProfile} alt="avt"></img>
          </div>
          <div className="uploadButton">
            <button>
              <img src={upload} alt="upload"></img>
              <h4>Upload image</h4>
            </button>
          </div>
          <div className="frameInfo">
            <div className="userInfo">
              <p>User Infomation</p>
              <div className="editUser">
                <img src={editImg} alt="edit"></img>
              </div>
            </div>
            <div className="userInfomationDetails">
              <img src={account} alt="account"></img>
              <div className="UserInfoDetails">
                <p>Họ và tên</p>
                <div className="inputInfo">
                  <input type="text" name="name" />
                </div>
              </div>
            </div>
            <div className="userInfomationDetails">
              <img src={call} alt="call"></img>
              <div className="UserInfoDetails">
                <p>Số điện thoại</p>
                <div className="inputInfo">
                  <input name="phone" type="text" />
                </div>
              </div>
            </div>
            <div className="userInfomationDetails">
              <img src={birthday} alt="birthday"></img>
              <div className="UserInfoDetails">
                <p>Ngày sinh</p>
                <div className="inputInfo">
                  <input name="birthday" type="date" />
                </div>
              </div>
            </div>
            <div className="userInfomationDetails">
              <img src={email} alt="email"></img>
              <div className="UserInfoDetails">
                <p>Email</p>
                <div className="inputInfo">
                  <input name="email" type="email" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="tabs">
            <div
              onClick={() => action(1)}
              className={`${state === 1 ? "tab active-tab" : "tab"}`}
            >
              <p>My Learning Journey</p>
            </div>
            <div
              onClick={() => action(2)}
              className={`${state === 2 ? "tab active-tab" : "tab"}`}
            >
              <p>Password</p>
            </div>
            <div
              onClick={() => action(3)}
              className={`${state === 3 ? "tab active-tab" : "tab"}`}
            >
              <p>Billing & Purchases</p>
            </div>
            <div
              onClick={() => action(4)}
              className={`${state === 4 ? "tab active-tab" : "tab"}`}
            >
              <p>Whishlist</p>
            </div>
          </div>
          <div className="contentTabs">
            <div
              onClick={() => action(1)}
              className={`${
                state === 1 ? "content content-active" : "content"
              }`}
            >
              <div className="Content-Learning">
                <div className="LearningJourney">
                  <img src={imageMain} alt="imageMain"></img>
                  <div className="infoCourse">
                    <h6>Master your pronunciation Course</h6>
                    <p>By Vo Hanh Quyen</p>
                    <div className="skills">
                      <div className="levels">
                        <p>All Levels</p>
                      </div>
                      <div className="speaking">
                        <p>Speaking Skills</p>
                      </div>
                    </div>
                    <a href="/coursesList">
                      <button>Go to course</button>
                    </a>
                  </div>
                  <div className="process">
                    <img src={process} alt="process"></img>
                    <p>Your Progress</p>
                  </div>
                </div>
                <div className="LearningJourney">
                  <img src={imageMain} alt="imageMain"></img>
                  <div className="infoCourse">
                    <h6>Master your pronunciation Course</h6>
                    <p>By Vo Hanh Quyen</p>
                    <div className="skills">
                      <div className="levels">
                        <p>All Levels</p>
                      </div>
                      <div className="speaking">
                        <p>Speaking Skills</p>
                      </div>
                    </div>
                    <a href="/coursesList">
                      <button>Go to course</button>
                    </a>
                  </div>
                  <div className="process">
                    <img src={process} alt="process"></img>
                    <p>Your Progress</p>
                  </div>
                </div>
                <div className="LearningJourney">
                  <img src={imageMain} alt="imageMain"></img>
                  <div className="infoCourse">
                    <h6>Master your pronunciation Course</h6>
                    <p>By Vo Hanh Quyen</p>
                    <div className="skills">
                      <div className="levels">
                        <p>All Levels</p>
                      </div>
                      <div className="speaking">
                        <p>Speaking Skills</p>
                      </div>
                    </div>
                    <a href="/coursesList">
                      <button>Go to course</button>
                    </a>
                  </div>
                  <div className="process">
                    <img src={process} alt="process"></img>
                    <p>Your Progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                state === 2 ? "content content-active" : "content"
              }`}
            >
              <div className="password">
                <div className="changePassword">
                  <div className="changePasswordDetail">
                    <label>Current Password</label>
                    <br />
                    <input type="text" placeholder="Example"></input>
                  </div>
                  <div className="changePasswordDetail">
                    <label>New Password</label>
                    <br />
                    <input type="text" placeholder="Example"></input>
                  </div>
                  <div className="changePasswordDetail">
                    <label>Re-type Password</label>
                    <br />
                    <input type="text" placeholder="Example"></input>
                  </div>
                  <div className="saveChanges">
                    <button>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                state === 3 ? "content content-active" : "content"
              }`}
            >
              {/* <h2>Password1</h2> */}
            </div>
            <div
              className={`${
                state === 4 ? "content content-active" : "content"
              }`}
            >
              <div className="WishList">
                <img src={sadFace} alt="img"></img>
                <p>Your Wishlist is empty. Keep Going to find a course!</p>
                <Link to="/coursesList">
                  <button>Go to Courses</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
