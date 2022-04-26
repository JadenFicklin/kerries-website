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
    </>
  );
}

export default Home;
