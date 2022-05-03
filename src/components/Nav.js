import React, { useState } from "react";
import "../css/Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  const [tattoo, setTattoo] = useState(false);
  console.log(tattoo);
  return (
    <>
      <div className="nav">
        <div className="nav-p1">
          <button
            className="nav-home"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </button>
          <button className="nav-tattoos" onClick={() => setTattoo(!tattoo)}>
            TATTOOS
          </button>
          <button
            className="nav-contact"
            onClick={() => {
              navigate("/contact");
            }}
          >
            CONTACT
          </button>
          <button
            className="nav-appointment"
            onClick={() => {
              navigate("/appointment");
            }}
          >
            SETUP APPOINTMENT
          </button>
        </div>
      </div>
      {tattoo && (
        <div className="nav-box">
          <div
            className="nav-lip"
            onClick={() => {
              navigate("/liptattoos");
            }}
          >
            LIP
          </div>
          <div
            className="nav-eyeliner"
            onClick={() => {
              navigate("/eyeliner");
            }}
          >
            EYELINER
          </div>
          <div
            className="nav-eyebrows"
            onClick={() => {
              navigate("/eyebrows");
            }}
          >
            EYEBROWS
          </div>
          <div
            className="nav-tattoo"
            onClick={() => {
              navigate("/tattoos");
            }}
          >
            TATTOO
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
