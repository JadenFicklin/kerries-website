import React from "react";
import Nav from "./Nav";
import "../css/Eyebrows.css";

function Eyebrows() {
  return (
    <>
      <Nav />
      <div className="Eyeliner-outer">
        <div className="Eyeliner-top-left-box">
          <div className="Eyeliner-header">Powder Brows</div>
        </div>
        <div className="Eyeliner-top-right-box"></div>
        <div className="Eyeliner-top-picture"></div>
      </div>
      <div className="Eyeliner-gray-box">
        <div className="Eyeliner-gray-inner-box">
          <div className="Eyeliner-gray-top">Powder Brows</div>
          <div className="Eyeliner-gray-bottom">
            Permanent Powder Brows is a cosmetic tattoo technique that uses a
            tattoo machine to create a soft "powdery" look. This is NOT
            microblading.
          </div>
        </div>
      </div>
      <div className="Eyeliner-paragraph-one">
        <div className="Eyeliner-paragraph-one-inner">
          If you like the look of hairstrokes, this can be done using a machine
          and in combo of powder brows for a more defined look. Contact me for
          more details and pricing.
        </div>
      </div>
      <div className="Eyeliner-info">
        <div className="Eyeliner-info-inner">
          <div className="Eyeliner-prices">Prices</div>
          <div className="divider">|</div>
          <div className="Eyeliner-questions">Questions & answers</div>
          <div className="divider">|</div>
          <div className="Eyeliner-care"> Pre and Post Care</div>
        </div>
      </div>
      <div className="four-pictures-container">
        <div className="four-pictures-container-inner">
          <div className="eyebrows-pictures-one pic"></div>
          <div className="eyebrows-pictures-two pic"></div>
          <div className="eyebrows-pictures-three pic"></div>
          <div className="eyebrows-pictures-four pic"></div>
        </div>
      </div>
      <div className="Eyeliner-box-mid"></div>
      <div className="Eyeliner-box-mid-line"></div>
      <div className="Eyeliner-portrait-mid"></div>
      <div className="Eyeliner-box-mid-lower"></div>
      <div className="Eyeliner-box-mid-lower-line"></div>
      <div className="Eyeliner-box-bottom">
        <div className="Eyeliner-one">03</div>
      </div>
      <div className="Eyeliner-one-header">
        What It’s Like to Get an Eyebrow Tattoo
      </div>
      <div className="Eyeliner-lower-paragraph">
        This Service is done using a Rotary Tattoo machine and needle cartridges
        just like a regular tattoo! I use different needle configurations for
        different styles of cosmetic Eyeliner tattoos, so we can get the look
        you are going for! I also have over 30 different shades that we can mix
        and match to get your target color! If you have a favorite Eyeliner
        color, you can bring it with you to your appointment and we can color
        match! I have also gotten extra training in scar corrections, so if you
        are concerned about that at all, please contact me and let me see if I
        can help you out! <br></br>
        <br></br>Cosmetic Eyeliner tattoos are considered semi-permanent. The
        color will never fully go away, but thanks to our Eyeliners skin cells
        shedding cycles, you may need a color boost every 3 to five years. If
        you are ever worried about changing your mind on the color you chose,
        most colors can be corrected. The best time to color correct is at your
        initial 6-8 week touchup, however if it takes you longer to decide that
        the color doesnt work for you, I can always get you in for a color
        adjustment :){" "}
      </div>
    </>
  );
}

export default Eyebrows;
