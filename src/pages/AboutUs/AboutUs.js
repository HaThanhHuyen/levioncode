import aboutUs1 from "../../image/aboutUs1.png";
import shelf from "../../image/shelf.png";
import play from "../../image/Play.png";
import people from "../../image/people.png";
import eyes from "../../image/eyes.png";
import mission from "../../image/misson.png";
import work from "../../image/work.png";
import study from "../../image/study.png";
import girl from "../../image/girl.png";
import man from "../../image/man.png";
import woman from "../../image/woman.png";
import boy from "../../image/boy.png";
import dog from "../../image/dog.png";
import animal from "../../image/animal.png";
import points from "../../image/points.png"
import shadow from "../../image/shadow.png";
import line from "../../image/line.png";
import triangle from "../../image/triangle.png";
import halfCircle from "../../image/halfCircle.png";
import lines from "../../image/lines.png";
import shadow2 from "../../image/shadow2.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <Header />
      <div className="part-one">
      <div className="points">
          <img src={points} alt="aboutUs-images"></img>
        </div>
        <div className="part-one-details">
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus
            non venenatis dolor nisl tellus habitant aliquam. Dignissim tellus,
            eu eu sed malesuada pharetra aliquam eu.Dignissim tellus, Tellus
            elementum enim faucibus morbi enim fusce:
          </p>
        </div>
        <div className="part-one-images">
          <img src={aboutUs1} alt="aboutUs-images"></img>
        </div>
      </div>
      <div className="part-two">
        <div className="shadow">
          <img src={shadow} alt="aboutUs-images"></img>
        </div>
        <div className="line">
          <img src={line} alt="aboutUs-images"></img>
        </div>
        <div className="triangle">
          <img src={triangle} alt="aboutUs-images"></img>
        </div>
        <div className="halfCircle">
          <img src={halfCircle} alt="aboutUs-images"></img>
        </div>
        <div className="part-two-left">
          <h2>The Levion story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            sed massa tempor, sagittis non consequat pretium urna nisi. Vitae,
            nunc proin mollis accumsan, velit. Turpis ornare commodo nisl,
            pharetra, tempus nam pellentesque. Nulla et id consectetur suscipit
            sagittis viverra tortor eu tempus. Nibh urna ullamcorper venenatis.
          </p>
        </div>
        <div className="part-two-right">
          <img src={shelf} alt="aboutUs-images"></img>
          <div className="play">
            <img src={play} alt="aboutUs-images"></img>
          </div>
        </div>
      </div>
      <div className="part-three">
        <div className="part-three-left">
          <img src={people} alt="aboutUs-images"></img>
          <div className="point2">
            <img src={points} alt="aboutUs-images"></img>
          </div>
        </div>
        <div className="shadow2">
          <img src={shadow2} alt="aboutUs-images"></img>
        </div>
        <div className="lines">
          <img src={lines} alt="aboutUs-images"></img>
        </div>
        <div className="part-three-right">
          <div className="part-three-right-details">
            <img src={eyes} alt="aboutUs-images"></img>
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              risus non venenatis dolor nisl tellus habitant aliquam. Dignissim
              tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim tellus,
              Tellus elementum enim faucibus morbi enim fusce:
            </p>
          </div>
        </div>
      </div>
      <div className="part-four">
        <div className="part-four-left">
          <div className="part-four-left-detail">
            <img src={mission} alt="aboutUs-images"></img>
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              risus non venenatis dolor nisl tellus habitant aliquam. Dignissim
              tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim tellus,
              Tellus elementum enim faucibus morbi enim fusce:
            </p>
          </div>
        </div>
        <div className="lines2">
          <img src={lines} alt="aboutUs-images"></img>
        </div>
        <div className="triangle2">
          <img src={triangle} alt="aboutUs-images"></img>
        </div>
        <div className="part-four-right">
          <img src={work} alt="aboutUs-images"></img>
        </div>
      </div>
      <div className="part-five">
        <div className="part-five-left">
          <div className="part-five-details">
            <h2>Our “Vi” Mascot story</h2>
            <p>
              At eu ut vitae platea at in. In porttitor mollis eu et ornare odio
              cursus id. Sed eget et nunc vivamus hac et urna, fermentum. Purus
              malesuada tempor donec egestas. Lorem quam aliquam porttitor
              ornare magna condimentum ipsum, gravida. Nascetur eget eget massa
              purus amet vitae facilisi consequat. Iaculis purus, integer
              condimentum sodales vulputate dapibus molestie netus. Suscipit
              fringilla amet leo rutrum aliquet. Tempus mi fringilla fermentum
              feugiat amet leo placerat cras nam. Egestas arcu, egestas
              consectetur scelerisque habitant. Viverra sed adipiscing mi
              dignissim tortor dignissim molestie.
            </p>
          </div>
        </div>
        {/* <div className="van52">
          <img src={van2} alt="van2"></img>
        </div> */}
        <div className="part-five-right">
          <img src={study} alt="aboutUs-images"></img>
        </div>
      </div>
      <div className="part-six-aboutUs">
        <div className="part-six-details">
          <div className="part-six-details-contents">
            <h2>The Levion Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
              sed massa tempor, sagittis non consequat pretium urna nisi. Vitae,
              nunc proin mollis accumsan, velit. Turpis ornare commodo nisl,
              pharetra, tempus nam pellentesque. Nulla et id consectetur
              suscipit sagittis viverra tortor eu tempus. Nibh urna ullamcorper
              venenatis.
            </p>
          </div>
        </div>
        <div className="part-six-images">
          <div className="part-six-images-first">
            <div className="girl">
              <img src={girl} alt="aboutUs-images"></img>
            </div>
            <div className="man">
              <img src={man} alt="aboutUs-images"></img>
            </div>
          </div>
          <div>

            <div className="boy">
              <img src={boy} alt="aboutUs-images"></img>
            </div>
            <div className="dog">
              <img src={dog} alt="aboutUs-images"></img>
            </div>
          </div>
          <div>
          <div className="woman">
              <img src={woman} alt="aboutUs-images"></img>
            </div>
            <div className="animal">
              <img src={animal} alt="aboutUs-images"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}