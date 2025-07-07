import meter1 from "../assets/images/achievment.png";
import meter2 from "../assets/images/achievment2.jpeg";
import meter3 from "../assets/images/achievment3.jpg";
import meter4 from "../assets/images/achievment4.jpg";
import meter5 from "../assets/images/achievment5.jpg";
import meter6 from "../assets/images/achievment6.png";
import meter7 from "../assets/images/achievment7.png";
import meter8 from "../assets/images/achievment8.png";
import meter9 from "../assets/images/achievment9.png";
import meter10 from "../assets/images/achievment10.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/images/arrow1.svg";
import arrow2 from "../assets/images/arrow2.svg";
import colorSharp from "../assets/images/color-sharp.png";

export const Achievements = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Achievements</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                transitionDuration={500}
                className="owl-carousel owl-theme achievements-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>2rd Place Technology Innovation Challenge</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Public Relations Coordinator</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Finalists of the student digital innovation competition</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>HKI Linguabound</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>R&D Member</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Mindset Digital</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Junior Mobile Programmer</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>Programmer Mobile Pratama</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="Image" />
                  <h5>Ryper Lab Research Assistant</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="Image" />
                  <h5>Ryper Lab Internship Assistant</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
