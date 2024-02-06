import React from 'react'
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Work from "./components/Work"

//React-router-dom
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
    
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  }
  return (
    <div onWheel={handleScroll}>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
)}

export default App
