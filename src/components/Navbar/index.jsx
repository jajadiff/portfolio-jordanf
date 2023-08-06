import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillCode } from "react-icons/ai";
import "./style.css";
import Data from "../../data/data.json";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleLinkClick = () => {
    setNav(false);
  };
  return (
    <div className="nav__container">
      <h1 className="nav__title">
        <AiFillCode size={50} />
      </h1>
      <ul className="nav__list__flex">
        {Data.navbar.map((item, index) => (
          <li key={index} className="list__item__flex">
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="nav__button">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? "list__mobile__ul" : "list__mobile__ul__else"}>
        <h1 className="list__mobile__title">
          <AiFillCode size={50} />
        </h1>
        {Data.navbar.map((item, index) => (
          <li
            key={index}
            className={
              index === Data.navbar.length - 1
                ? "list__mobile__li__last"
                : "list__mobile__li"
            }
          >
            <a href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
