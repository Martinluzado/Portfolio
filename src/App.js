import './App.css';
import Header from './Componentes/header';
import Main from './Componentes/main';
import Nav from './Componentes/nav';
import Contact from './Componentes/Contact';
import Footer from './Componentes/footer';

function App() {
  return (
    <div className="App">
      <section>
        <div class="skewed"></div>
      </section>
      <Header />
      <Main/>
      <Nav/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
