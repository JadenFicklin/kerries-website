import React, { useState } from "react";
import Nav from "./Nav";
import "../css/Lip.css";

function Lip() {
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
                  <div className="prices-text">
                    <div className="prices-top">Prices</div>

                    <div className="prices-primary">
                      Primary and Color Corrections
                    </div>
                    <div className="prices-primary-sub">
                      First time or correcting a color previously applied
                    </div>
                    <div className="prices-primary-sub-amount">$500</div>

                    <div className="prices-touchups">Touchups</div>
                    <div className="prices-touchups-sub">
                      I highly recommend getting a 4-6 week touch up to ensure
                      even healing and to make any necessary adjustments. Any
                      touchups after that are charged according to the amount of
                      time since your initial appointment.
                    </div>
                    <div className="prices-touchups-sub-amount">
                      4-10 weeks/$100 $500
                    </div>

                    <div className="prices-color-boost">Color Boost</div>
                    <div className="prices-color-boost-sub">
                      If your application needs a color boost but has been more
                      than 6 months since the primary application, or it got
                      applied by someone else
                    </div>
                    <div className="prices-color-boost-sub-amount">$250+</div>
                  </div>
                ) : (
                  <div></div>
                )}
                {questionsText ? (
                  <div className="questions-text">
                    <div className="questions-top">Questions and Answers</div>
                    <div className="q1">Can I get the exact color I want?</div>
                    <div className="a1">
                      I have several colors to choose from. If you have a
                      favorite color bring it in and I can match it :)
                    </div>
                    <div className="q2">Does the procedure hurt?</div>
                    <div className="a2">
                      There are several topical anesthetics if you need one, I
                      use great numbing creams. I numb you for 15 minutes before
                      I start. If you are on your period, you may be more
                      sensitive. Caffeine and sugar will stimulate the nerves so
                      it should be avoided the day before and the day of the
                      procedure. If you have a hard time numbing at the dentist
                      office, it is recommended to take 10mg of valium and or
                      10mg of percocet. Ask your doctor for a prescription.
                    </div>
                    <div className="q3">How long does the procedure take?</div>
                    <div className="a3">Typically 2-3 hours</div>
                    <div className="q4">
                      How long does permanent make up last?
                    </div>
                    <div className="a4">
                      The permanent makeup that I do lasts 5-10 years. I use
                      high quality pigments that make it last longer. I use the
                      rotary pen method which goes deeper and lasts longer. I
                      encourage my clients to get a color boost to darken their
                      colors back up after 3-7 years.
                    </div>
                    <div className="q5">
                      How many appointments are necessary for a procedure?
                    </div>
                    <div className="a5">
                      I recommend a touchup at 4-6 weeks. This is so I can check
                      how they healed, make any adjustments to the shape or
                      color if desired. Any touch up or color boosts after will
                      be charged based on the time it’s been since your initial
                      appointment.
                    </div>
                    <div className="q6">
                      How long does it take for permanent lip tattoo to heal?
                    </div>
                    <div className="a6">
                      The healing process for lips is unique person to person,
                      generally 7 to 10 days to get passed the peeling point.
                      The true healed color will come within 3-6 weeks, so it is
                      normal to get fluctuations in color intensity during that
                      time frame.
                    </div>
                    <div className="q7">
                      Is permanent make-up like a regular tattoo?
                    </div>
                    <div className="a7">
                      No, it is similar to the same procedure but is not as deep
                      as a regular tattoo so therefore it is not completely
                      permanent. The equipment I use is made for fine detail
                      work. It is recommended to do makeup that looks natural
                      and enhances your natural beauty.
                    </div>
                    <div className="q8">
                      What if I don’t like the makeup anymore?
                    </div>
                    <div className="a8">
                      I can lighten, darken, or change the color. You can also
                      get it removed with a laser
                    </div>
                    <div className="q9">
                      Will there be swelling after the procedures?
                    </div>
                    <div className="a9">
                      Some people swell and some don’t. If you do swell it only
                      lasts for 3 days. After your procedure you can take 800 mg
                      of Ibuprofen. I recommend icing the area after your
                      procedure for comfort and to reduce swelling
                    </div>
                  </div>
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
          <div className="lip-pictures-one pic"></div>
          <div className="lip-pictures-two pic"></div>
          <div className="lip-pictures-three pic"></div>
          <div className="lip-pictures-four pic"></div>
        </div>
      </div>
      <div className="lip-box-mid"></div>
      <div className="lip-box-mid-line"></div>
      <div className="lip-portrait-mid"></div>
      <div className="lip-box-mid-lower"></div>
      <div className="lip-box-mid-lower-line"></div>
      <div className="lip-box-bottom">
        <div className="lip-one">01</div>
      </div>
      <div className="lip-one-header">What It’s Like to Get a Lip Tattoo</div>
      <div className="lip-lower-paragraph">
        This Service is done using a Rotary Tattoo machine and needle cartridges
        just like a regular tattoo! I use different needle configurations for
        different styles of cosmetic lip tattoos, so we can get the look you are
        going for! I also have over 30 different shades that we can mix and
        match to get your target color! If you have a favorite lip color, you
        can bring it with you to your appointment and we can color match! I have
        also gotten extra training in scar corrections, so if you are concerned
        about that at all, please contact me and let me see if I can help you
        out! <br></br>
        <br></br>Cosmetic lip tattoos are considered semi-permanent. The color
        will never fully go away, but thanks to our lips skin cells shedding
        cycles, you may need a color boost every 3 to five years. If you are
        ever worried about changing your mind on the color you chose, most
        colors can be corrected. The best time to color correct is at your
        initial 6-8 week touchup, however if it takes you longer to decide that
        the color doesnt work for you, I can always get you in for a color
        adjustment :){" "}
      </div>
    </>
  );
}

export default Lip;
