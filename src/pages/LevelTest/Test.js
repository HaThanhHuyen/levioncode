import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../LevelTest/Test.module.css";
import { Link } from "react-router-dom";
import test from "../../image/test.png";

function Test() {
  return (
    <div>
      <Header />
      <div className={styles.test}>
        <img src={test} alt="img"></img>
        <h1>Welcome to your free Vietnamese level test</h1>
        <p>
          How well do you know Vietnamese? We suggest you complete the following
          test to self-assess your level in Vietnamese, to pick the right
          Vietnamese course for you, or just to pass the time.
        </p>
        <Link to="/coursesList">
          <button>Start the Test</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default Test;