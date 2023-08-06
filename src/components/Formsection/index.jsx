import React from "react";
import "./style.css";
import Form from "../Form";
import Data from "../../data/data.json";

const Formsection = () => {
  return (
    <div className="formsection__container">
      <h2 className="formsection__title" id="contact">
        {Data.formsectiontitle}
      </h2>
      <Form />
    </div>
  );
};

export default Formsection;
