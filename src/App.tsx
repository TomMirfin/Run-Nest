import React, { useState, useEffect, useRef } from "react";
import BurgerMenu from "./Navigation/BurgerMenu";
import HomePage from "./HomePage";
import About from "./About";
import Analytics from "./Analytics";


const App = () => {
  const [currentLocation, setCurrentLocation] = useState("Home");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentLocation(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.keys(sectionsRef.current).forEach((key) => {
      const section = sectionsRef.current[key];
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.keys(sectionsRef.current).forEach((key) => {
        const section = sectionsRef.current[key];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  
  return (
    <div>
      <BurgerMenu scrollToSection={scrollToSection} currentLocation={currentLocation} />
      <div id="Home" ref={(el) => (sectionsRef.current["Home"] = el)}><HomePage/></div>
      <div id="About" ref={(el) => (sectionsRef.current["About"] = el)}><About /></div>
      <div id="Analytics" ref={(el) => (sectionsRef.current["Analytics"] = el)}><Analytics/></div>
      <div id="Services" ref={(el) => (sectionsRef.current["Services"] = el)}>Services Section</div>
    </div>
  );
};

export default App;