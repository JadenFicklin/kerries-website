import React, { useState } from "react";
import Nav from "./Nav";
import "../css/Eyeliner.css";

function Eyeliner() {
  const [open, setOpen] = useState(true);
  const [questions, setQuestions] = useState(true);
  const [priceText, setPriceText] = useState(false);
  const [questionsText, setQuestionsText] = useState(false);
  const [preText, setPreText] = useState(false);

  const questionsClick = () => {
    setOpen(false);
    setQuestions(true);
    setQuestionsText(true);
    setPriceText(false);
    setPreText(false);
  };
  const pricesClick = () => {
    setOpen(false);
    setQuestions(true);
    setQuestionsText(false);
    setPriceText(true);
    setPreText(false);
  };
  const careClick = () => {
    setOpen(false);
    setQuestions(true);
    setQuestionsText(false);
    setPriceText(false);
    setPreText(true);
  };

  return (
    <>
      <Nav />
      <div className="eyeliner-outer">
        <div className="eyeliner-top-left-box">
          <div className="eyeliner-header">Permanent eyeliner</div>
        </div>
        <div className="eyeliner-top-right-box"></div>
        <div className="eyeliner-top-picture"></div>
      </div>
      <div className="eyeliner-gray-box">
        <div className="eyeliner-gray-inner-box">
          <div className="eyeliner-gray-top">Permanent eyeliner</div>
          <div className="eyeliner-gray-bottom">
            Permanent eyeliner is an Enhancing tattoo that helps to define your
            eyes!
          </div>
        </div>
      </div>
      <div className="eyeliner-paragraph-one">
        <div className="eyeliner-paragraph-one-inner">
          You can have it applied as subtle as you would like for a more natural
          look (called a Lash Enhancement - where most of the pigment is
          embedded into your lash line) or a more noticeable look with above the
          lash line with or without a wing, with or without bottom liner. I do
          not recommend getting dramatic liners, as your preference can change.
        </div>
      </div>
      <div className="eyeliner-info">
        <div className="eyeliner-info-inner">
          <div className="eyeliner-prices">Prices</div>
          <div className="divider">|</div>
          <div className="eyeliner-questions">Questions & answers</div>
          <div className="divider">|</div>
          <div className="eyeliner-care"> Pre and Post Care</div>
        </div>
      </div>
      {/* start */}
      {open ? (
        <div className="lip-info">
          <div className="lip-info-inner">
            <div className="lip-prices" onClick={() => pricesClick()}>
              Prices
            </div>
            <div className="divider">|</div>
            <div className="lip-questions" onClick={() => questionsClick()}>
              Questions & answers
            </div>
            <div className="divider">|</div>
            <div className="lip-care" onClick={() => careClick()}>
              {" "}
              Pre and Post Care
            </div>
          </div>
        </div>
      ) : (
        <div className="lip-info-2">
          <div className="info-box">
            {questions ? (
              <div className="q-outer-outer">
                <div className="q-outer">
                  <div className="q-close" onClick={() => setOpen(true)}>
                    X
                  </div>
                </div>
                {priceText ? (
                  <div className="prices-text">these are the prices</div>
                ) : (
                  <div></div>
                )}
                {questionsText ? (
                  <div className="questions-text">these are the questions</div>
                ) : (
                  <div></div>
                )}
                {preText ? (
                  <div className="pre-text">these are the pre</div>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="lip-info-inner-2">
            <div className="lip-prices-2" onClick={() => pricesClick()}>
              Prices
            </div>
            <div className="divider-2">|</div>
            <div className="lip-questions-2" onClick={() => questionsClick()}>
              Questions & answers
            </div>
            <div className="divider-2">|</div>
            <div className="lip-care-2" onClick={() => careClick()}>
              {" "}
              Pre and Post Care
            </div>
          </div>
        </div>
      )}
      {/* end */}
      <div className="four-pictures-container">
        <div className="four-pictures-container-inner">
          <div className="eyeliner-pictures-one pic"></div>
          <div className="eyeliner-pictures-two pic"></div>
          <div className="eyeliner-pictures-three pic"></div>
          <div className="eyeliner-pictures-four pic"></div>
        </div>
      </div>
      <div className="eyeliner-box-mid"></div>
      <div className="eyeliner-box-mid-line"></div>
      <div className="eyeliner-portrait-mid"></div>
      <div className="eyeliner-box-mid-lower"></div>
      <div className="eyeliner-box-mid-lower-line"></div>
      <div className="eyeliner-box-bottom">
        <div className="eyeliner-one">01</div>
      </div>
      <div className="eyeliner-one-header">
        What It’s Like to Get a eyeliner Tattoo
      </div>
      <div className="eyeliner-lower-paragraph">
        This Service is done using a Rotary Tattoo machine and needle cartridges
        just like a regular tattoo! I use different needle configurations for
        different styles of cosmetic eyeliner tattoos, so we can get the look
        you are going for! I also have over 30 different shades that we can mix
        and match to get your target color! If you have a favorite eyeliner
        color, you can bring it with you to your appointment and we can color
        match! I have also gotten extra training in scar corrections, so if you
        are concerned about that at all, please contact me and let me see if I
        can help you out! <br></br>
        <br></br>Cosmetic eyeliner tattoos are considered semi-permanent. The
        color will never fully go away, but thanks to our eyeliners skin cells
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

export default Eyeliner;
