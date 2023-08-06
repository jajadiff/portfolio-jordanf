import React from "react";
import "./style.css";
import Typed from "react-typed";
import Data from "../../data/data.json";

const Hero = () => {
  return (
    <div className="hero__container">
      <Typed
        className="hero__welcome"
        strings={[`${Data.welcome}`]}
        typeSpeed={120}
        backSpeed={140}
      />
      <h1 className="hero__title">{Data.name}</h1>
      <div className="hero__typed__container">
        <p className="hero__subtitle">{Data.subtitle}</p>
        <Typed
          className="hero__subtitle__anim"
          strings={[`${Data.subtitleAnim}`]}
          typeSpeed={200}
          backSpeed={100}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
