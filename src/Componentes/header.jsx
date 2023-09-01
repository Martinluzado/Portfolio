import React, { useEffect, useState } from "react";
import { BsJournalCode } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import pdfFile from "../PDFCV/CV2.pdf";
import Logo from "../Imagenes/LogoSinFondo.png";
import "../Estilizacion/header.css";
function Header() {
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "archivo.pdf"; // Nombre del archivo descargado
    link.click();
  };

  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const newLeftOffset = 50 * (scrollY / window.innerHeight);
      setLeftOffset(newLeftOffset);
    }

    // Verifica el ancho de la ventana
    const windowWidth = window.innerWidth;

    if (windowWidth >= 599) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // Si el ancho de la ventana es menor a 600px, establece leftOffset en 0
      setLeftOffset(0);
    }
  }, []);

  return (
    <div className="general">
      <section className="HeaderGeneral">
        <div class="skewed"  style={{  left: window.innerWidth >= 600 ? `calc(40% - ${leftOffset}%)` : '0',}}>
          {" "}
          <div className="tituloContainer">
            <img className="Logo" src={Logo} alt="Logo" />
          </div>
          <div className="buttonContainerHeader">
            <a href="https://github.com/Martinluzado?tab=repositories">
              {" "}
              <button className="headerButton2">
                Proyects <BsJournalCode />
              </button>
            </a>
            <button className="headerButton2" onClick={handleDownloadPDF}>
              Curriculum
              <FiDownload />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
