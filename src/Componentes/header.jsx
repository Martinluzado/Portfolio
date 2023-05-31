import React from "react";
import { BsJournalCode } from "react-icons/bs";
import "../Estilizacion/header.css";
function Header() {
  return (
    <div className="general">
      <div className="tituloContainer">
        <h1 className="tituloName1">Martín Luzardo</h1>
        <p className="tituloName2">Full stack developer</p>
      </div>
      <div className="buttonContainerHeader">  
        <a href="https://github.com/Martinluzado?tab=repositories">
          {" "}
          <button className="headerButton2">
            Proyects <BsJournalCode />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
