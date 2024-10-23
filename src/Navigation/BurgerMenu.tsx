interface BurgerMenuProps {
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function BurgerMenu({
  scrollToSection,
  activeSection,
}: BurgerMenuProps) {
  const sections = ["Home", "About", "Services", "Analytics"];

  console.log(sectionRef);
  const menuClass = `fixed top-0 left-0 h-full w-48 bg-black text-white transform transition-transform duration-300 ease-in-out `;

  const menuItemClass =
    "p-4 hover:bg-gray-700 cursor-pointer border-b-1 border-gray-600 hover:translate-x-2 hover:translate-x-0 transform transition-transform duration-300 delay-150 ";

  return (
    <>
      <div className={`${menuClass} `}>
        <strong className="text-orange-500 ml-4 mt-10 block border-b-2 border-b-orange-400">
          Run-Nest
        </strong>
        <nav>
          <ul>
            <li
              className={`${menuItemClass}`}
              onClick={() => scrollToSection("Home")}
            >
              <div>Home</div>
            </li>
            <li
              className={menuItemClass}
              onClick={() => scrollToSection("about")}
            >
              <div>About</div>
            </li>
            <li
              className={menuItemClass}
              onClick={() => scrollToSection("Analytics")}
            >
              <div>Analytics</div>
            </li>
            <li
              className={menuItemClass}
              onClick={() => scrollToSection("Services")}
            >
              <div>Services</div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
