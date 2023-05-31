import React from 'react'
import '../Estilizacion/footer.css'
import {GrLinkedinOption} from 'react-icons/gr'
import {GoLogoGithub} from 'react-icons/go'
import pdfFile from '../PDFCV/CV.pdf'

 function Footer() {
    const handleDownloadPDF = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = 'archivo.pdf'; // Nombre del archivo descargado
        link.click();
      };
  return (
    <div className='footerContainer'>
         <div className='footerContainer2'>
            <a href="https://www.linkedin.com/in/m4rtinluza4rdo/">
        <GrLinkedinOption style={{color:"white", fontSize:"40px", margin:"0"}}/>
             </a>
             <a href="https://github.com/Martinluzado">
        <GoLogoGithub style={{color:"white", fontSize:"80px" ,marginTop:"15px"}}/>
                </a>
        </div>
        <button className='cvButton' onClick={handleDownloadPDF}>Download CV</button>
    </div>
  )
}
export default Footer;
