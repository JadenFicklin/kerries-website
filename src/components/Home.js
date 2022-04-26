import React from "react";
import "../css/Home.css";
import Nav from "./Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="header"></div>
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
        </div>
      </div>
    </>
  );
}

export default Home;
