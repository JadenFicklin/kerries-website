import React from "react";
import "../css/Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();

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
          <button className="nav-tattoos">TATTOOS</button>
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
    </>
  );
}

export default Nav;
