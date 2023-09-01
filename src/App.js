import './App.css';
import Header from './Componentes/header';
import Main from './Componentes/main';
import Nav from './Componentes/nav';
import Contact from './Componentes/Contact';
import Footer from './Componentes/footer';



function App() {
 
  document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})

  return (
    
    <div className="App">
      <Header/>
      <Main/>
      <Nav/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
