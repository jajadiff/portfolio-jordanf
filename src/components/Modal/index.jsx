import React from "react";
import Slider from "../Slider";
import Iconlist from "../Iconlist";
import Button from "../Button";
import "./test.css";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isModalOpen, selectedProject, closeModal }) => {
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal__overlay")) {
      closeModal();
    }
  };
  return (
    <div>
      {isModalOpen && selectedProject && (
        <div className="modal__overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <AiOutlineClose
              size={30}
              onClick={closeModal}
              className="modal__close-icon"
            />
            <div className="modal__content">
              <Slider images={selectedProject.sliderdesktop} />
              <h2 className="modal__title">{selectedProject.title}</h2>
              <p className="modal__subtitle">{selectedProject.description}</p>
              <h3 className="modal__skilltitle">
                {selectedProject.skilltitle}
              </h3>
              {selectedProject.skill && (
                <Iconlist skills={selectedProject.skill} />
              )}
              <div className="button__modal">
                {selectedProject.livelink && (
                  <Button
                    href={selectedProject.livelink}
                    label={selectedProject.buttonlive}
                  />
                )}
                {selectedProject.codelink && (
                  <Button
                    href={selectedProject.codelink}
                    label={selectedProject.buttoncode}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
