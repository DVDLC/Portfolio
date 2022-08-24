// React
import { HashRouter, Route, Routes } from "react-router-dom"
// Components
import About from "./components/About"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Footer  from "./components/Footer"
import MyWork from "./components/MyWork"
import Contact from "./components/Contact"
// SASS
import './sass/index.scss'

function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <div className="container">
          <Routes>  
            <Route path="/" element={ <Banner /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/skills" element={ <Skills /> } />
            <Route path="/my-work" element={ <MyWork /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
