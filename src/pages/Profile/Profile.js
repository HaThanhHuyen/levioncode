import React, { useEffect, useState } from "react";
import "../Profile/Profile.css";
import editImg from "../../image/edit.png";
import account from "../../image/account.png";
import call from "../../image/call.png";
import birthday from "../../image/birthday.png";
import email from "../../image/email.png";
import ImageUpload from "./ImageUpload"
import LayoutWithHeader from "../../components/layoutWithHeader";
import coursesMan from "../../image/courses-man.png";
import { getAuth } from "firebase/auth";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../login/firebase";
import Empty from "./Empty";
import { getItemsFromLearningJourney } from "../login/firebase";

export default function Profile() {
  const currentUser = getAuth().currentUser;
  const [state, setState] = useState(1);
  const [learningJourneyItems, setLearningJourneyItems] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const action = (index) => {
    setState(index);
  };

  const saveUserDetails = (userData) => {
    localStorage.setItem("userDetails", JSON.stringify(userData));
  };

  const updateUserDetails = async () => {
    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, userDetails);
      console.log("User details updated successfully");
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  useEffect(() => {
    const fetchLearningJourneyItems = async () => {
      try {
        if (currentUser) {
          const learningItems = await getItemsFromLearningJourney(
            currentUser.email
          );
          if (learningItems) {
            setLearningJourneyItems(learningItems);
            localStorage.setItem(
              "learningJourneyItems",
              JSON.stringify(learningItems)
            );
          } else {
            setLearningJourneyItems([]);
          }
        } else {
          const storedItems = localStorage.getItem("learningJourneyItems");
          if (storedItems) {
            setLearningJourneyItems(JSON.parse(storedItems));
          }
        }
      } catch (error) {
        console.error("Error getting learning journey items:", error);
      }
    };

    const fetchUserDetails = async () => {
      try {
        if (currentUser) {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setUserDetails(userData);
            saveUserDetails(userData); // Lưu thông tin vào localStorage
          }
        } else {
          const storedUserDetails = localStorage.getItem("userDetails");
          if (storedUserDetails) {
            setUserDetails(JSON.parse(storedUserDetails));
          }
        }
      } catch (error) {
        console.error("Error getting user details:", error);
      }
    };

    fetchLearningJourneyItems();
    fetchUserDetails();
  }, [currentUser]);

  useEffect(() => {
    if (userDetails) {
      updateUserDetails(userDetails);
    }
  }, [userDetails]);

  return (
    <div className="profile">
      <LayoutWithHeader>
        <div className="contents">
          <div className="profilePerson">
            <div className="information">
              <ImageUpload/>
              <div className="frameInfo">
                <div className="userInfo">
                  <p>User Information</p>
                  <div className="editUser">
                    <img
                      onClick={handleEdit}
                      src={editImg}
                      alt="edit"
                      className="editIcon"
                    />
                    {edit === true ? (
                      <p onClick={handleEdit}>Done</p>
                    ) : (
                      <p onClick={handleEdit}>Edit</p>
                    )}
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={account} alt="account" />
                  <div className="UserInfoDetails">
                    <p>Họ và tên</p>
                    {edit === true ? (
                      <div className="edit">
                        <input
                          id="name"
                          type="text"
                          name="displayName"
                          value={userDetails?.displayName || ""}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="edit2">
                        <input
                          id="name"
                          type="text"
                          name="displayName"
                          value={userDetails?.displayName || ""}
                          onChange={handleChange}
                          disabled={!edit}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={call} alt="call" />
                  <div className="UserInfoDetails">
                    <p>Số điện thoại</p>
                    {edit === true ? (
                      <div className="edit">
                        <input
                          id="phoneNumber"
                          type="text"
                          name="phoneNumber"
                          value={userDetails?.phoneNumber || ""}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="edit2">
                        <input
                          id="phoneNumber"
                          type="text"
                          name="phoneNumber"
                          value={userDetails?.phoneNumber || ""}
                          onChange={handleChange}
                          disabled={!edit}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={birthday} alt="birthday" />
                  <div className="UserInfoDetails">
                    <p>Ngày sinh</p>
                    {edit === true ? (
                      <div className="edit">
                        <input
                          id="dateOfBirth"
                          type="date"
                          name="dateOfBirth"
                          value={userDetails?.dateOfBirth || ""}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="edit2">
                        <input
                          id="dateOfBirth"
                          type="date"
                          name="dateOfBirth"
                          value={userDetails?.dateOfBirth || ""}
                          onChange={handleChange}
                          disabled={!edit}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="userInfomationDetails">
                  <img src={email} alt="email" />
                  <div className="UserInfoDetails">
                    <p>Email</p>
                    <div className="edit2">
                      <input
                        type="email"
                        name="email"
                        value={currentUser?.email || ""}
                        disabled
                      />
                    </div>
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
                    {learningJourneyItems !== null &&
                    learningJourneyItems.length === 0 ? (
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
