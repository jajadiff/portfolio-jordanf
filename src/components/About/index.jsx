import React from "react";
import "./style.css";
import Data from "../../data/data.json";
import { GiJourney, GiSkills } from "react-icons/gi";

const About = () => {
  const iconMap = {
    "Mon parcours": <GiJourney size={30} color="white" />,
    "Mes compétences": <GiSkills size={30} color="white" />,
  };
  return (
    <div className="about__container">
      <h2 className="about__title" id="about">
        {Data.aboutsectionTitle}
      </h2>
      <div className="about__card__container">
        {Data.about.map((item, index) => (
          <div className={`about__card${index + 1}`} key={index}>
            <div className="about__card__content">
              <h3 className="about__card__content__title">
                {item.abouttitle} {iconMap[item.abouttitle]}
              </h3>

              <p>{item.aboutsubtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    //   <div className="about__container">
    //     <h2 className="about__title" id="about">
    //       About
    //     </h2>
    //     <div className="about__card__container">
    //       <div className="about__card1">
    //         <div className="about__card__content">
    //           <h3 className="about__card__content__title">Mon parcours</h3>
    //           <p>
    //             Je suis un développeur web passionné de 25 ans, déterminé à
    //             transformer ma passion en métier. J'ai suivi une formation
    //             d'intégrateur web sur Openclassrooms pour approfondir mes
    //             compétences et créer des expériences en ligne captivantes.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="about__card2">
    //         <div className="about__card__content">
    //           <h3 className="about__card__content__title">Mes compétences</h3>
    //           <p>
    //             Pendant ma formation en tant qu'intégrateur web, j'ai acquis des
    //             compétences en HTML, CSS (y compris SASS), JavaScript. J'ai créé
    //             des sites web interactifs en utilisant ces technologies et exploré
    //             des bibliothèques populaires comme React pour des applications web
    //             modernes. J'ai également découvert des outils de gestion de projet
    //             tels que Notion et les méthodologies agiles comme Kanban pour une
    //             meilleure organisation des projets.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="about__card3">
    //         <div className="about__card__content">
    //           <h3 className="about__card__content__title">Titre 3</h3>
    //           <p>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
    //             ipsam harum ad expedita quis ea fugiat ex? Eaque, asperiores
    //             quibusdam!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default About;
