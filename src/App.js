import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home.js'
import About from './pages/about/About.js'
import Skills from './pages/skills/Skills.js'
import Education from './pages/education/Education.js'
import Contact from './pages/contact/Contact.js'
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'

import './assets/css/App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/portfolio/" element={ <Home />} />
        <Route path="/portfolio/about" element={ <About />} />
        <Route path="/portfolio/skills" element={ <Skills />} />
        <Route path="/portfolio/education" element={ <Education />} />
        <Route path="/portfolio/contact" element={ <Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
