import React, { useState, useEffect } from "react";
import styles from "../../pages/shoppingCart/shoppingCart.module.css";
import coursesMan from "../../image/courses-man.png";
import CartEmpty from "./cartEmpty";
import HeaderProfile from "../Header/HeaderProfile";
import Footer from "../Footer/Footer";
import {
  getItemShoppingCartFromFirestore,
  removeItemFromFirestore,
} from "../login/firebase";
import { getAuth } from "firebase/auth";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  let total = 0;
  cart.forEach((e) => (total += e.price));
  const discount = 20;

  const handleRemove = async (id) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmRemove) {
      // Xóa mục từ giỏ hàng trong state
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));

      // Xóa mục từ Firestore
      await removeItemFromFirestore(id);
    }
  };

  const currentUser = getAuth().currentUser;

  useEffect(() => {
    if (currentUser) {
      getItemShoppingCartFromFirestore(currentUser.email).then((courseList) => {
        setCart(courseList);
      });
    }
  }, [currentUser]);

  return (
    <div className={styles.ShoppingCart}>
      <HeaderProfile loggedInEmail={"aaaaa"} />
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className={styles.cart}>
          <div className={styles.title}>
            <h3>Shopping Cart</h3>
          </div>
          <div className={styles.cart_details}>
            <div className={styles.yourCart}>
              <h5>Your Cart</h5>
              {cart.map((course) => (
                <div key={course.id} className={styles.courses}>
                  <div className={styles.course}>
                    <img src={coursesMan} alt="imgCourse" />
                    <div className={styles.courseDetail}>
                      <div className={styles.courseDetail_left}>
                        <h6>{course.name}</h6>
                        <div className={styles.courseDetail_buttons}>
                          <button>{course.level}</button>
                          <button>{course.skill} Skills</button>
                        </div>
                      </div>
                      <div className={styles.courseDetail_right}>
                        <div className={styles.fee}>
                          <div className={styles.feeDiscount}>
                            <h6>${course.price}.00</h6>
                            <p>$84.99</p>
                          </div>
                        </div>
                        <div className={styles.remove}>
                          <p onClick={() => handleRemove(course.id)}>Remove</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.coupon}>
              <div className={styles.couponDiscount}>
                <h5>Coupon Discount</h5>
                <div className={styles.couponCode}>
                  <label>Couple Code</label>
                  <div className={styles.couponApply}>
                    <input type="search" placeholder="Example" />
                    <button>Apply</button>
                  </div>
                </div>
              </div>
              <div className={styles.couponDetail}>
                <div className={styles.price}>
                  <p>Original Price</p>
                  <h6>${total}</h6>
                </div>
                <div className={styles.discountDiv}>
                  <div className={styles.discount}>
                    <p>Discount</p>
                    <h6>-${discount}</h6>
                  </div>
                </div>
                <div className={styles.total}>
                  <p>Total</p>
                  <h6>${total - discount}</h6>
                </div>
                <div className={styles.checkout}>
                  <button>Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
