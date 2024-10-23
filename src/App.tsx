import "./index.css";
import HomePage from "./HomePage";
import BurgerMenu from "./Navigation/BurgerMenu";
import {  useEffect, useRef, useState } from "react";


function App() {
  const [currentLocation, setCurrentLocation] = useState("");


  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
  
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
 

  return (
    <div>
      <BurgerMenu
        scrollToSection={scrollToSection}
        currentLocation = {currentLocation}
      
      />
      <HomePage setCurrentLocation={setCurrentLocation} />
    </div>
  );
}

export default App;
