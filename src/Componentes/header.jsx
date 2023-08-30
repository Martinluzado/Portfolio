import React from "react";
 import { BsJournalCode } from "react-icons/bs";
 import { FiDownload } from "react-icons/fi";
 import pdfFile from '../PDFCV/CV2.pdf'
 import Logo from '../Imagenes/LogoSinFondo.png'
import "../Estilizacion/header.css";
function Header() {
   const handleDownloadPDF = () => {
   const link = document.createElement('a');
     link.href = pdfFile;
     link.download = 'archivo.pdf'; // Nombre del archivo descargado
     link.click();
   };
  return (
    <div className="general">
     <section className='HeaderGeneral'>
        <div class="skewed">  <div className="tituloContainer">
        <img className="Logo" src={Logo} alt="Logo" />
      </div>
      <div className="buttonContainerHeader">  
        <a href="https://github.com/Martinluzado?tab=repositories">
          {" "}
          <button className="headerButton2">
            Proyects <BsJournalCode />
          </button>
        </a>     
        <button className='headerButton2' onClick={handleDownloadPDF}>Curriculum<FiDownload /></button>   
      </div></div>
      </section>
    </div>
  );
}

export default Header;
