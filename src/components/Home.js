import React from "react";
import "../css/Home.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="header"></div>
      <div
        className="contact-me-button"
        onClick={() => {
          navigate("/appointment");
        }}
      >
        SETUP APPOINTMENT
      </div>
      <div className="section-two">
        <div className="section-two-top">
          <div className="box-one">
            <div className="inner-one">
              <span>A Unique Place</span>
              <span>_</span>
              <p>
                Integer diam quam, ultrices non lobortis ut, ultricies at libero
                phasellus luctus{" "}
              </p>
            </div>
          </div>
          <div className="box-two"></div>
          <div className="box-three">
            <div className="inner-three">
              <span>Lip Tattoos</span>
              <span>_</span>
              <p>
                Integer diam quam, ultrices non lobortis ut, ultricies at libero
                phasellus luctus{" "}
              </p>
            </div>
          </div>
          <div className="box-four"></div>
        </div>
        <div className="section-two-bottom">
          <div className="box-five"></div>
          <div className="box-six">
            <div className="inner-six">
              <span>Tattoos</span>
              <span>_</span>
              <p>
                Integer diam quam, ultrices non lobortis ut, ultricies at libero
                phasellus luctus{" "}
              </p>
            </div>
          </div>
          <div className="box-seven"></div>
          <div className="box-eight">
            <div className="inner-eight">
              <span>Makeup</span>
              <span>_</span>
              <p>
                Integer diam quam, ultrices non lobortis ut, ultricies at libero
                phasellus luctus{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three">
        <div className="section-three-left">
          <div className="portrait-one-box"></div>
          <div className="portrait-one-outline"></div>
          <div className="portrait-one"></div>
        </div>
        <div className="section-three-right">
          <span className="who-header">Who I am</span>
          <p className="who-paragraph">
            Im a mom to 2 kids, a dog and wife! I enjoy being creative and love
            to draw up all the tattoo ideas! I started out doing permanent
            makeup at the beginning of my tattooing career and fell in love with
            doing lips, so I decided to focus my energy on Lips alone! But I
            have always felt like I was missing the creative side that artistic
            tattooing could give me, so I took on some more training and here I
            am :) I love my job and I love working with people! Send me any and
            all of your ideas :) Lets see what we can create!
          </p>
          <div
            className="who-i-am-button"
            onClick={() => {
              navigate("/contact");
            }}
          >
            LEARN MORE
          </div>
        </div>
      </div>
      <div className="section-four">
        <div className="section-four-left">
          <span className="what-header">What I do</span>
          <p className="what-paragraph">
            I can do any type of tattoo, I am open to all styles and I will let
            you know if something seems out of my comforting zone. I love doing
            Linework, Geometric, Florals and love working with color! For Lip
            tattoo, my specialty is Watercolor lips! it heals soft and natural
            but gives your lips plenty of color and definition :) I am also
            trained in Lipstick technique if you are looking for a more solid
            look
          </p>
          <div
            className="who-i-am-button"
            onClick={() => {
              navigate("/contact");
            }}
          >
            LEARN MORE
          </div>
        </div>
        <div className="section-four-right">
          <div className="portrait-two-box"></div>
          <div className="portrait-two-outline"></div>
          <div className="portrait-two"></div>
        </div>
      </div>
      <div className="footer">
        <div
          className="request-an-appointment-button"
          onClick={() => {
            navigate("/appointment");
          }}
        >
          Request an Appointment
        </div>
      </div>
    </>
  );
}

export default Home;
