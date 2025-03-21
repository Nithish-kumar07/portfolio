import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./About";
import Skills from "./Components/Skills";
import Education from "./Education";
import Projects from "./Components/Projects";
import Contact from "./Contact";
import Footer from "./Footer";


const User = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education/>
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default User;
