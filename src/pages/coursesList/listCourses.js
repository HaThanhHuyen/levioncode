import styles from "../coursesList/coursesList.module.css";
import courseMan from "../../image/courses-man.png";
import heart from "../../image/heart.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";
import { cartList } from "../redux/selector";
import { Link, } from "react-router-dom";
export default function ListOfCourse({ listCourse }) {
  const dispatch = useDispatch();
  const cart = useSelector(cartList);
  const handleAddToCart = (e) => {
    console.log(e.id);
    dispatch(
      addToCart({
        id: e.id,
        name: e.name,
        price: e.price,
      })
    );
  };
  return (
    <div className={styles.listCourse}>
      {listCourse.map((e) => (
        <div className={styles.list} key={e.id}>
          <div className={styles.listCourseTitle}>
            <img className={styles.listCourseTitle_img} src={courseMan} alt="courseMan"></img>
            <div className={styles.listButton}>
              <button>All Levels</button>
              <button>Speaking Skills</button>
              <h3 className={styles.title}>
                <Link to={`/courseDetail/${e.id}`}  >{e.name}</Link>
              </h3>
              <h1>${e.price}.00</h1>
            </div>
            <div className={styles.cart}>
              <button onClick={() => handleAddToCart(e)}>Add To Cart</button>
              <img src={heart} alt="heart"></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}