import background from "../../image/footer.png";
import logo from "../../image/cow-footer.png";
import facebook from "../../image/facebook.png";
import youtube from "../../image/youtube.png";
import tiktok from "../../image/tiktok.png";
import instagram from "../../image/ig.png";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <div id={styles.footer}>
        <div id={styles.footer_bg}>
          <img src={background} alt="footer"></img>
        </div>
      </div>
      <div id={styles.logo}>
        <img src={logo} alt="footer"></img>
      </div>
      <div className={styles.category}>
        <a href="#">Home</a>
        <a href="#">Level Test</a>
        <a href="#">Courses</a>
        <a href="#">Learning Resources</a>
        <a href="#">About us</a>
      </div>
      <div className={styles.social_media}>
        <img src={facebook} alt="footer"></img>
        <img src={instagram} alt="footer"></img>
        <img src={youtube} alt="footer"></img>
        <img src={tiktok} alt="footer"></img>
      </div>
      <div className={styles.tittle}>
        <p>©2022 Levion. All copyrights reserved</p>
      </div>
    </>
  );
}