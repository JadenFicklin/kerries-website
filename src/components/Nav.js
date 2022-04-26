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
          <button
            className="nav-lip-tattoo"
            onClick={() => {
              navigate("/liptattoo");
            }}
          >
            LIP TATTOO
          </button>
          <button
            className="nav-tattoo"
            onClick={() => {
              navigate("/tattoo");
            }}
          >
            TATTOO
          </button>
          <button
            className="nav-faq"
            onClick={() => {
              navigate("/faq");
            }}
          >
            FAQ
          </button>
        </div>
        <button
          className="nav-contact"
          onClick={() => {
            navigate("/contact");
          }}
        >
          CONTACT
        </button>
      </div>
    </>
  );
}

export default Nav;
