import React from "react";
import "../Estilizacion/nav.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { SiPostman } from "react-icons/si";
import { SiInformatica } from "react-icons/si";

function Nav() {
  return (
    <div className="General">
        <h3 style={{color:"white", textAlign:"center",margin:"0"}}>Technologies <SiInformatica style={{color:"white"}}/></h3>
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
          <FaReact className="a1" />
          React
        </button>
        <button className="buttonNav">
          <FaNode className="a1" />
          Node
        </button>
        <button className="buttonNav">
          <SiPostgresql className="a1" />
          Postgresql
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
        <button className="buttonNav">
          <SiPostman className="a1" />
          Postman
        </button>
      </div>
      <p className="PP" style={{color:"white", textAlign:"center",margin:"0"}}>And More!</p>
    </div>
  );
}
export default Nav;
