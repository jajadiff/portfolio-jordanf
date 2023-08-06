import React, { useState } from "react";
import "./style.css";
import Data from "../../data/data.json";
import Card from "../Card";
import Modal from "../Modal";

const Cardgrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="cardgrid__container">
      <h2 className="project__title" id="projet">
        {Data.titleProjects}
      </h2>
      <div className="grid__container">
        {Data.projects.map((project, index) => (
          <Card key={index} project={project} onClick={openModal} />
        ))}
      </div>
      <Modal
        isModalOpen={isModalOpen}
        selectedProject={selectedProject}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Cardgrid;
