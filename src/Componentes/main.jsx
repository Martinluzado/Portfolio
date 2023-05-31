import React from 'react'
import Perfil from '../Imagenes/porfile.png'
import '../Estilizacion/main.css'
function Main() {
  return (
    <div className='mainContainer'>
        <div>
      <h2 className='fraseMain'>This is me!</h2>
        <p className='pMain'>Hello, I introduce myself, I am a junior web developer "Full Stack".</p>
        <p className='pMain'>I really like this world of technology and everything that comes with it.</p>
        <p className='pMain'>I hope you like my personal website and if you want to use it as inspiration go ahead!</p>
      </div>
      <img className='perfilFoto' src={Perfil} alt={""}/>
    </div>
  )
}

export default Main
