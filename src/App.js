import React, { useRef } from "react";
import Nav from "./components/nav";
import About from "./components/About";
import Gallery from "./components/Gallary";
import constants from "./components/constants";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './index.css'
const App = () => {
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  let sectionRefs = {
  };
  sectionRefs[constants.HOME.ref] = aboutRef;
  sectionRefs[constants.GALLARY.ref] = galleryRef;
  sectionRefs[constants.CONTACT.ref] = galleryRef;

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };
    return (
        <>
            <Nav scrollToSection={scrollToSection}/>
            <About ref={aboutRef} />
            <Gallery ref={galleryRef} />
            <Contact ref={contactRef} />
            <Footer />
        </> 
    )
};

export default App;
