import React from "react";
import "./style.css";

const Card = ({ project, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(project)}>
      {project.new && <span className="card__label">Nouveau</span>}
      <img src={project.image} alt={project.title} className="card__image" />
      <div className="card__content">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__description">{project.description}</p>
        <p className="card__description__mobile">{project.shortdescription}</p>
      </div>
    </div>
  );
};

export default Card;
