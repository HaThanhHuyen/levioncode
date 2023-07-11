import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import upload from "../../image/upload.png";
import defaultProfile from "../../image/avtProfile.png";
import editImg from "../../image/edit.png";
import account from "../../image/account.png";
import call from "../../image/call.png";
import birthday from "../../image/birthday.png";
import email from "../../image/email.png";

import LayoutWithHeader from "../../components/layoutWithHeader";
import coursesMan from "../../image/courses-man.png";
import { getAuth } from "firebase/auth";
import { getItemsFromLearningJourney } from "../login/firebase";
import Empty from "./Empty";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "Tran Van Nhan",
    phone: "0960 123 456",
    birthday: "1996-05-04",
    email: "huongnt@gmail.com",
  });
  const [learningJourneyItems, setLearningJourneyItems] = useState([]);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index);
  };

  const currentUser = getAuth().currentUser;
  useEffect(() => {
    if (currentUser) {
      getItemsFromLearningJourney(currentUser.email)
        .then((shoppingCart) => {
          setLearningJourneyItems(shoppingCart);
          localStorage.setItem(
            "learningJourneyItems",
            JSON.stringify(shoppingCart)
          ); // Lưu danh sách mục vào localStorage
        })
        .catch((error) => {
          console.error("Error getting learning journey items:", error);
        });
    } else {
      const storedItems = localStorage.getItem("learningJourneyItems");
      if (storedItems) {
        setLearningJourneyItems(JSON.parse(storedItems));
      }
    }
  }, [currentUser]);
  return (
    <div className="profile">
      <LayoutWithHeader>
        <div className="contents">
          <div className="profilePerson">
            <div className="uploadImg">
              <img src={defaultProfile} alt="avt"></img>
            </div>
            <div className="information">
              {/* <div className="uploadButton">
                <input
                  id="fileInput"
                  type="file"
                />
              </div> */}
              <button>
                <img src={upload} alt="upload"></img>
                <h4>Upload image</h4>
              </button>

              <div className="frameInfo">
                <div className="userInfo">
                  <p>User Information</p>
                  <div className="editUser">
                    <img onClick={handleEdit} src={editImg} alt="edit"></img>
                    <p onClick={handleEdit}>{edit ? "Done" : "Edit"}</p>
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={account} alt="account"></img>
                  <div className="UserInfoDetails">
                    <p>Họ và tên</p>
                    {edit ? (
                      <div className="edit">
                        <input
                          type="text"
                          name="name"
                          defaultValue={profile.name}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="edit2">
                        <input
                          type="text"
                          name="name"
                          defaultValue={profile.name}
                          disabled
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={call} alt="call"></img>
                  <div className="UserInfoDetails">
                    <p>Số điện thoại</p>
                    {edit ? (
                      <div className="edit">
                        <input
                          name="phone"
                          type="text"
                          onChange={handleChange}
                          defaultValue={profile.phone}
                        />
                      </div>
                    ) : (
                      <div className="edit2">
                        <input
                          type="text"
                          name="phone"
                          defaultValue={profile.phone}
                          disabled
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={birthday} alt="birthday"></img>
                  <div className="UserInfoDetails">
                    <p>Ngày sinh</p>
                    {edit ? (
                      <div className="edit">
                        <input
                          name="birthday"
                          type="date"
                          defaultValue={profile.birthday}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="edit2">
                        <input
                          type="date"
                          name="birthday"
                          defaultValue={profile.birthday}
                          disabled
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={email} alt="email"></img>
                  <div className="UserInfoDetails">
                    <p>Email</p>
                    {edit ? (
                      <div className="edit">
                        <input
                          name="email"
                          type="email"
                          defaultValue={profile.email}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="edit2">
                        <input
                          type="email"
                          name="email"
                          defaultValue={profile.email}
                          disabled
                        />
                      </div>
                    )}
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
                <p>Wishlist</p>
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
                    {learningJourneyItems.length === 0 ? (
                      <Empty />
                    ) : (
                      <div className="LearningJourneyLeft">
                        {learningJourneyItems.map((item) => (
                          <div className="itemLearning" key={item.id}>
                            <img src={coursesMan} alt="coursesMan" />
                            <div className="infoCourse">
                              <h6>{item.courseName}</h6>
                              <div className="skills">
                                <div className="levels">
                                  <p>{item.level}</p>
                                </div>
                                <div className="speaking">
                                  <p>{item.skill}</p>
                                </div>
                              </div>
                              <a href="/coursesList">
                                <button>Go to course</button>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* <div className="process">
                      <img src={process} alt="process" />
                      <p>Your Progress</p>
                    </div> */}
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
                      <input type="text" placeholder="Example" />
                    </div>
                    <div className="changePasswordDetail">
                      <label>New Password</label>
                      <br />
                      <input type="text" placeholder="Example" />
                    </div>
                    <div className="changePasswordDetail">
                      <label>Re-type Password</label>
                      <br />
                      <input type="text" placeholder="Example" />
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
                <div className="Billing">
                  <Empty />
                </div>
              </div>
              <div
                className={`${
                  state === 4 ? "content content-active" : "content"
                }`}
              >
                <div className="WishList">
                  <Empty />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithHeader>
    </div>
  );
}
