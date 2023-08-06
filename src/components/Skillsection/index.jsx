import React, { useState } from "react";
import "./style.css";
import Data from "../../data/data.json";
import Iconlist from "../Iconlist";
const Skillsection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterSkillsByCategory = () => {
    if (selectedCategory === "Tous") {
      return Data.skillsection;
    } else {
      return Data.skillsection.filter((skill) => {
        if (selectedCategory === "Front-end") {
          return [
            "HTML",
            "CSS",
            "SASS",
            "Javascript",
            "React",
            "Redux",
            "Figma",
          ].includes(skill);
        } else if (selectedCategory === "Back-end") {
          return ["NodeJS", "MongoDB", "Swagger"].includes(skill);
        } else if (selectedCategory === "Autre") {
          return ["Github", "SEO", "Lighthouse", "Jest"].includes(skill);
        }
        return false;
      });
    }
  };

  return (
    <div className="skillsection__container">
      <h2 className="skill__title" id="skill">
        {Data.skillsectionTitle}
      </h2>
      <div className="skillsection__grid">
        <div className="skillsection__select">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="skillsection__select__item"
          >
            <option value="Tous">Tous</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="skillsection__list">
          <Iconlist skills={filterSkillsByCategory()} />
        </div>
      </div>
    </div>
  );
};

export default Skillsection;
