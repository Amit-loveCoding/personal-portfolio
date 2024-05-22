import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Internship from "./components/Internship/Internship";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Hero />
                <Skills />
                <Projects />
                <Internship />
                <ContactMe />
              </>
            }
          />

          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
