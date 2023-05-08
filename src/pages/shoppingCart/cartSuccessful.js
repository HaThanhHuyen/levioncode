import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../shoppingCart/cartSuccessful.module.css";
import success from "../../image/success.png";
import { Link } from "react-router-dom";

function cartSuccesful(){
    return (
        <div>
            <Header />
            <div className={styles.cart}>
                <h1>Shopping Cart</h1>
                <img src={success} alt="img"></img>
                <h2>Your Payment is Successful</h2>
                <p>Let’s Getting into Your Course</p>
                <div className={styles.btnCart}>
                <Link to='/coursesList'><button className={styles.btnCourses}>My Coureses</button></Link>
                <Link to='/homePage'><button className={styles.btnHome}>Back to Home</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default cartSuccesful;