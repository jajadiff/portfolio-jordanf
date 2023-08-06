import React from "react";
import "./style.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiSass, SiSwagger, SiJest } from "react-icons/si";
import { FaCss3Alt, FaReact, FaNode, FaFigma } from "react-icons/fa";
import { BiLogoJavascript, BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import { TbSeo } from "react-icons/tb";
import { GiLighthouse } from "react-icons/gi";

const Iconlist = ({ skills }) => {
  return (
    <ul className="list__icon">
      {skills.map((skill, index) => (
        <li
          key={index}
          className={`list__icon__bg icon__${skill.toLowerCase()}`}
        >
          {skill === "HTML" && <AiFillHtml5 size={30} />}
          {skill === "CSS" && <FaCss3Alt size={30} />}
          {skill === "Javascript" && <BiLogoJavascript size={30} />}
          {skill === "SASS" && <SiSass size={30} className="icon__sass" />}
          {skill === "React" && <FaReact size={30} />}
          {skill === "Github" && <AiFillGithub size={30} />}
          {skill === "NodeJS" && <FaNode size={30} />}
          {skill === "Swagger" && <SiSwagger size={30} />}
          {skill === "Figma" && <FaFigma size={30} />}
          {skill === "MongoDB" && <BiLogoMongodb size={30} />}
          {skill === "SEO" && <TbSeo size={30} />}
          {skill === "Lighthouse" && <GiLighthouse size={30} />}
          {skill === "Jest" && <SiJest size={30} />}
          {skill === "Redux" && <BiLogoRedux size={30} />}
        </li>
      ))}
    </ul>
  );
};

export default Iconlist;
