import "./index.css";
import HomePage from "./HomePage";
import BurgerMenu from "./Navigation/BurgerMenu";
import { act, useEffect, useRef, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    analytics: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section based on the ID of the intersecting element
        }
      });
    }, options);

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up the observer on unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <BurgerMenu
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <HomePage sectionRef={sectionRef} />
    </div>
  );
}

export default App;
