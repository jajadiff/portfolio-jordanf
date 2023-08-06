import React from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import Data from "../../data/data.json";

const Popup = ({ onClose }) => {
  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <AiOutlineClose size={20} onClick={onClose} className="popup__icon" />
        <h2>{Data.dependencetitle}</h2>
        <ul className="popup__list">
          {Data.dependence.map((dependency) => (
            <li key={dependency.name} className="popup__list__item">
              <a
                href={dependency.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dependency.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup;
