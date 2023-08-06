import React, { useState } from "react";
import "./style.css";
import Popup from "../Popup";
import Data from "../../data/data.json";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopupClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <h2 className="footer__title">{Data.footertitle}</h2>
        <a href={Data.footerlink} target="_blank" rel="noreferrer">
          <AiFillGithub size={30} />
        </a>
      </div>
      <div className="footer__build">
        <p className="footer__build__link" onClick={handlePopupClick}>
          {Data.footerbuildlink}
        </p>
      </div>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </footer>
  );
};

export default Footer;
