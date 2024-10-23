import { useEffect } from "react";

interface BurgerMenuProps {
  scrollToSection: (sectionId: string) => void;
  currentLocation: string; 
}

export default function BurgerMenu({ scrollToSection, currentLocation }: BurgerMenuProps) {

  console.log(currentLocation, "current location");
  const areas = ["Home", "About", "Analytics", "Services"];

  const getMenuItemClass = (sectionId: string) => {
    return `p-4 cursor-pointer ${
      currentLocation === sectionId
        ? "bg-orange-500 text-black" 
        : "hover:bg-orange-500 text-white hover:text-black" 
    }`;
  };

  const menuClass = `fixed top-0 left-0 h-full w-48 bg-black text-white transform transition-transform duration-300 ease-in-out `;

  useEffect(() => {
    areas.forEach(area => {
      const section = document.getElementById(area);
      if (section) {
        section.style.backgroundColor = currentLocation === area ? "rgb(249, 114, 22)" : "";
      }
    });
  }, [currentLocation]);

  return (
    <>
      <div className={menuClass}>
        <strong className="text-orange-500 ml-4 mt-10 block border-b-2 border-b-orange-400">
          Run-Nest
        </strong>
        <nav>
          <ul>
            {areas.map((area) => (
              <li
                key={area}
                className={getMenuItemClass(area)}  
                onClick={() => scrollToSection(area)}  
              >
                <div>{area}</div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}