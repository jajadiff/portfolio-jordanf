import React from "react";
import "./style.css";
const Button = ({ href, label }) => {
  return (
    <a href={href} className="button" target="_blank" rel="noreferrer">
      {label}
    </a>
  );
};

export default Button;
