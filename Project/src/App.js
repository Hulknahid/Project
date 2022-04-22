import React from "react";
import { Routes, Route } from "react-router";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Service from "./Component/Service";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};
export default App;
