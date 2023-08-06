import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cardgrid from "./components/Cardgrid";
import Skillsection from "./components/Skillsection";
import About from "./components/About";
import Formsection from "./components/Formsection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cardgrid />
      <Skillsection />
      <About />
      <Formsection />
      <Footer />
    </>
  );
}

export default App;
