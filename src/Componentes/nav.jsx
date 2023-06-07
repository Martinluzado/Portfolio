import React from "react";
import "../Estilizacion/nav.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";

function Nav() {
  return (
    <div className="General">
        <h3 className="H3oo">Technologies</h3>
      <div className="tecnologiasContainer">
        <button className="buttonNav">
          <AiFillHtml5 className="a1" />
          Html5
        </button>
        <button className="buttonNav">
          {" "}
          <DiCss3 className="a1" />
          Css3
        </button>
        <button className="buttonNav">
          {" "}
          <SiJavascript className="a1" />
          Javascript
        </button>
        <button className="buttonNav">
          <SiTypescript className="a1" />
          Typescript
        </button>
        <button className="buttonNav">
          <FaReact className="a1" />
          React
        </button>
        <button className="buttonNav">
          <TbBrandReactNative className="a1" />
          ReactNative
        </button>
        <button className="buttonNav">
          <FaNode className="a1" />
          NodeJS
        </button>
        <button className="buttonNav">
          {" "}
          <SiMysql className="a1" />
          Mysql
        </button>
        <button className="buttonNav">
          <AiOutlineGithub className="a1" />
          Github
        </button>
      </div>
      <p className="PP" >and more</p>
    </div>
  );
}
export default Nav;
