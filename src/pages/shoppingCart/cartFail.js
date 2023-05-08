import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../shoppingCart/cartFail.module.css";
import cryFace from "../../image/cry.png";
import { Link } from "react-router-dom";

function cartFail(){
    return (
        <div>
            <Header />
            <div className={styles.cart}>
                <h1>Shopping Cart</h1>
                <img src={cryFace} alt="img"></img>
                <h2>Something Went Wrong</h2>
                <p>Let’s Try Again</p>
                <Link to='/coursesList'><button>Back to Check Out</button></Link>
            </div>
            <Footer />
        </div>
    );
}
export default cartFail;