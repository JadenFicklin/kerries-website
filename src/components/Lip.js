import React from "react";
import Nav from "./Nav";
import "../css/Lip.css";

function Lip() {
  return (
    <>
      <Nav />
      <div className="lip-outer">
        <div className="lip-top-left-box">
          <div className="lip-header">Lip Tattoos</div>
        </div>
        <div className="lip-top-right-box"></div>
        <div className="lip-top-picture"></div>
      </div>
      <div className="lip-gray-box">
        <div className="lip-gray-inner-box">
          <div className="lip-gray-top">Permanent Lip Blush</div>
          <div className="lip-gray-bottom">
            Lip Blush creates a soft and subtle blush of color defining the
            shape and giving the appearance of plump and flushed lips. Lip color
            is customized to each client based on natural lip color, undertone
            and skin tone.
          </div>
        </div>
      </div>
      <div className="lip-paragraph-one">
        <div className="lip-paragraph-one-inner">
          Lip Blush creates a soft and subtle blush of color defining the shape
          and giving the appearance of plump and flushed lips. Lip color is
          customized to each client based on natural lip color, undertone and
          skin tone.
        </div>
      </div>
      <div className="lip-info">
        <div className="lip-info-inner">
          <div className="lip-prices">Prices</div>
          <div className="divider">|</div>
          <div className="lip-questions">Questions & answers</div>
          <div className="divider">|</div>
          <div className="lip-care"> Pre and Post Care</div>
        </div>
      </div>
    </>
  );
}

export default Lip;
