import React from 'react'
import '../Estilizacion/footer.css'
import {GrLinkedinOption} from 'react-icons/gr'
import {GoLogoGithub} from 'react-icons/go'

 function Footer() {
  
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
    </div>
  )
}
export default Footer;
