import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../../pages/shoppingCart/shoppingCart.module.css";
import coursesMan from "../../image/courses-man.png";
import { cartList } from "../redux/selector";
import { removeFromCart } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CartEmpty from "./cartEmpty";


function ShoppingCart() {


  const dispatch = useDispatch();
  const handleRemove = (course) => {
    console.log(course);
    dispatch(
      removeFromCart({
        id: course.id,
      })
    );
  };

  const cart = useSelector(cartList);
  let total = 0;
  cart.forEach((e) => (total += e.price));
  const discount = 20;

  return (
    <div className={styles.ShoppingCart}>
      <Header />
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
                    <img src={coursesMan} alt="imgCourse"></img>
                    <div className={styles.courseDetail}>
                      <div className={styles.courseDetail_left}>
                        <h6>{course.name}</h6>
                        <div className={styles.courseDetail_buttons}>
                          <button>All Levels</button>
                          <button>Speaking Skill</button>
                        </div>
                      </div>
                      <div className={styles.courseDetail_right}>
                        <div className={styles.fee}>
                          <div className={styles.feeDiscount}>
                            <h6>$20.00</h6>
                            <p>$84.99</p>
                          </div>
                        </div>
                        <div className={styles.remove}>
                          <p onClick={() => handleRemove(course)}>Remove</p>
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
                    <input type="search" placeholder="Example"></input>
                    <button>Apply</button>
                  </div>
                </div>
              </div>
              <div className={styles.couponDetail}>
                <div className={styles.price}>
                  <p>Orginal Price</p>
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
      <Footer />
    </div>
  );
}

export default ShoppingCart;
