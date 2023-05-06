import Frame from "../../image/Frame.png";
import Asset1 from "../../image/Asset 2 1.png";
import Asset2 from "../../image/Asset 1 3.png";
import Asset3 from "../../image/community 2.png";
import Asset4 from "../../image/Frame 21614.png";
import Travel from "../../image/home1.png";
import WorkLive from "../../image/home2.png";
import Communication from "../../image/home3.png";
import Fun from "../../image/home4.png";
import learn from "../../image/why-learn 1.png";
import achievement from "../../image/achievement.png";
import h11 from "../../image/h11.png";
import h12 from "../../image/h12.png";
import h13 from "../../image/h13.png";
import h14 from "../../image/h14.png";
import avt1 from "../../image/avt1.png";
import avt2 from "../../image/avt2.png";
import avt3 from "../../image/avt3.png";
import cow from "../../image/cow.png";
import rectangle from "../../image/hinhchunhat.png";
import fb from "../../image/facebook.png";
import discord from "../../image/discord.png";
import quotation from "../../image/Vector 1.png";
import star from "../../image/star.png";
// import "../HomePage/HomePage.css";
import styles from "./HomePage.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function HomePage() {
  return (
    <>
      <div className={styles.background}></div>
      <div>
        <Header />
        <div className={styles.header_home}>
          <h1>Vietnamese Journey with LEVION</h1>
          <p>
            We are ready to help you crafting package branding for your products
            according to you target market. We helped more than 1000 product in
            United States
          </p>
          <div className={styles.images_homepage}>
            <div id={styles.images_homepage_first}>
              <div id={styles.Asset1}>
                <img src={Asset1} alt="images" />
              </div>
              <div id={styles.Asset2}>
                <img src={Asset2} alt="images" />
              </div>
            </div>
            <div id={styles.images_homepage_two}>
              <button>Test Now</button>
              <div id={styles.Frame}>
                <img src={Frame} alt="images" />
              </div>
            </div>
            <div id={styles.images_homepage_three}>
              <div id={styles.Asset3}>
                <img src={Asset3} alt="images" />
              </div>
              <div id={styles.Asset4}>
                <img src={Asset4} alt="images" />
              </div>
            </div>
          </div>

          <div className={styles.part_two}>
            <div className={styles.part_two_details}>
              <h1>
                Learn Vietnamese - one of the world’s most interesting and
                popular languages
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit
                sollicitudin eros nisl. Blandit neque accumsan lectus id
                consectetur amet proin. Enim eros habitant euismod porta.
                Sodales sed cras at aliquam commodo mattis pretium.
              </p>
            </div>
            <div className={styles.part_two_image}>
              <div>
                <img src={Travel} alt="images" />
                <h4>Travel</h4>
              </div>
              <div>
                <img src={WorkLive} alt="images" />
                <h4>Work and Live</h4>
              </div>
              <div>
                <img src={Communication} alt="images" />
                <h4>Communication</h4>
              </div>
              <div>
                <img src={Fun} alt="images" />
                <h4>Have Fun</h4>
              </div>
            </div>
          </div>
          <div className={styles.part_three}>
            <h1>Why learning Vietnamese with Levion?</h1>
            <div className={styles.part_three_content}>
              <div className={styles.part_three_image}>
                <img src={learn} alt="images" />
              </div>
              <div className={styles.part_three_detail}>
                <div className="rectangle">
                  <img src={rectangle} alt="rectangle"></img>
                  <div className={styles.box}>
                    <div className={styles.three}>
                  <div className={styles.three_details}>
                    <img src={achievement} alt="images" />
                    <h2>Diverse courses of choice</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id sodales non interdum eget. Platea et quam magna tortor,
                      dolor.
                    </p>
                  </div>
                  <div className={styles.three_details}>
                    <img src={achievement} alt="images" />
                    <h2>Quality lessons with designated journeys</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id sodales non interdum eget. Platea et quam magna tortor,
                      dolor.
                    </p>
                  </div>
                </div>
                <div className={styles.three}>
                  <div className={styles.three_details}>
                    <img src={achievement} alt="images" />
                    <h2>Fun and intuitive ways of learning</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id sodales non interdum eget. Platea et quam magna tortor,
                      dolor.
                    </p>
                  </div>
                  <div className={styles.three_details}>
                    <img src={achievement} alt="images" />
                    <h2>Flexible</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id sodales non interdum eget. Platea et quam magna tortor,
                      dolor.
                    </p>
                  </div>
                </div>
                  </div>
                  
                </div>
                
                
              </div>
            </div>
          </div>

          <div className={styles.images_homepage_2}>
            <div className={styles.images_homepage_title}>
              <h2>What we offer?</h2>
            </div>
            <div className={styles.images_homepage_details}>
              <div className={styles.contents_details}>
                <img src={h11} alt="images" />
                <h4>Test your level and identify your learning journey.</h4>
              </div>
              <div className={styles.contents_details}>
                <img src={h12} alt="images" />
                <h4>Giant supporting resources</h4>
              </div>
              <div className={styles.contents_details}>
                <img src={h13} alt="images" />
                <h4>Community of Vietnamese-language lovers:</h4>
              </div>
              <div className={styles.contents_details}>
                <img src={h14} alt="images" />
                <h4>Giant supporting resources</h4>
              </div>
            </div>
          </div>
          <div className={styles.part_four}>
            <h1>What our learners say?</h1>
            <div className={styles.part_four_detail}>
              <div className={styles.part_four_details}>
                <div className={styles.fixed_content}>
                  <div className={styles.vote}>
                    <div className={styles.vote_left}>
                      <img src={quotation} alt="quotation"></img>&nbsp;
                      <img src={quotation} alt="quotation"></img>
                    </div>
                    <div className={styles.vote_right}>
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>
                    </div>
                  </div>
                  <p>
                    As a Vietnamese learner, you might have realized that
                    pronunciation is not an easy task. I had very refreshing
                    pronunciation sessions with the course. It guided me step by
                    step in order to fix and correct several issues with my
                    Vietnamese pronunciations. Highly recommended!
                  </p>
                </div>
                <div className={styles.card_name}>
                  <img src={avt3} alt="images" />
                  <div>
                    <h4>Tariq</h4>
                    <p>Master Your Pronunciation Course</p>
                  </div>
                </div>
              </div>
              <div className={styles.part_four_details}>
                <div className={styles.fixed_content}>
                  <div className={styles.vote}>
                    <div className={styles.vote_left}>
                      <img src={quotation} alt="quotation"></img>&nbsp;
                      <img src={quotation} alt="quotation"></img>
                    </div>
                    <div className={styles.vote_right}>
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>
                    </div>
                  </div>
                  <p>
                    It is amazing to see my progress even after so many lessons
                    and each one brings me forward! I am so glad that I found
                    Gwen to accompany me on this way with her patience, high
                    energy, and always having something to ask or say!
                  </p>
                </div>
                <div className={styles.card_name}>
                  <img src={avt2} alt="images" />
                  <div>
                    <h4>Konrad S.</h4>
                    <p>Master Your Pronunciation Course</p>
                  </div>
                </div>
              </div>
              <div className={styles.part_four_details}>
                <div className={styles.fixed_content}>
                  <div className={styles.vote}>
                    <div className={styles.vote_left}>
                      <img src={quotation} alt="quotation"></img>&nbsp;
                      <img src={quotation} alt="quotation"></img>
                    </div>
                    <div className={styles.vote_right}>
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>&nbsp;&nbsp;
                      <img src={star} alt="star"></img>
                    </div>
                  </div>
                  <p>
                    Quyen - The instructor of the pronunciation course is a
                    fantastic teacher. She is very knowledgable. I took the
                    5-hour pronunciation course, now we're working our way
                    through the beginner material and I'm definitely progressing
                    faster than I would have expected.
                  </p>
                </div>

                <div className={styles.card_name}>
                  <div className={styles.card_name_images}>
                    <img src={avt1} alt="images" />
                  </div>

                  <div>
                    <h4>Gina H.</h4>
                    <p>Master Your Pronunciation Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.part_five}>
            <div className={styles.part_five_images}>
              <img src={cow} alt="images" />
            </div>

            <div className={styles.part_five_detail}>
              <h2>
                Be a part of our
                <br />
                Vietnamese-speaking community
              </h2>
              <p>
                Join Vietnamese&nbsp;learners from around&nbsp;the world to
                become fluent and confident in&nbsp;the community we are
                building!
              </p>
              <div className={styles.button_community}>
                <div className={styles.button_redirect}>
                  <img src={fb} alt="images" />
                  <button>Join us on Facebook</button>
                </div>
                <div className={styles.button_redirect}>
                  <img src={discord} alt="images" />
                  <button>Join us on Discord</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.part_six}>
            <h2>Join our Newsletter</h2>
            <p>
              Get a notification from us on any updates and tips for your
              learning progress.
            </p>
            <div className={styles.submit}>
              <input
                name={styles.email}
                type="email"
                placeholder="Enter your email"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
