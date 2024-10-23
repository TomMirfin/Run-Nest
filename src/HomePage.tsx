import backgroundImage from "../src/assets/images/pexels-nappy-936094.jpg";
import HomePageContent from "./Homepage/HomePageContent";

import { motion } from "framer-motion";
import HomePageGraphics from "./Homepage/HomepageGraphics";
import { useState } from "react";
import Textoverlay from "./Homepage/Textoverlay";
import About from "./About";

interface HomePageProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function HomePage({ sectionRef }: HomePageProps) {
  const [showTextOverlay, setShowTextOverlay] = useState(false);
  const [contentToShow, setContentToShow] = useState("");

  type SelectionType = "TRAINER" | "LEG" | "WEATHER" | "ROAD";

  const graphicsConfig: { selection: SelectionType; position: string }[] = [
    { selection: "TRAINER", position: "bottom-44 left-1/3" },
    { selection: "LEG", position: "top-80 left-1/3" },
    { selection: "WEATHER", position: "top-40 left-2/3" },
    { selection: "ROAD", position: "bottom-44 right-44" },
  ];

  const renderGraphics = () =>
    graphicsConfig.map(({ selection, position }, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={`absolute ${position} hover:bg-slate-100`}
      >
        <HomePageGraphics
          setShowTextOverlay={setShowTextOverlay}
          setContentToShow={setContentToShow}
          selection={selection}
        />
      </motion.div>
    ));

  return (
    <>
      <div
        ref={sectionRef}
        className="h-screen "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="">{renderGraphics()}</div>

        {showTextOverlay && (
          <div>
            <Textoverlay contentToShow={contentToShow as any} />
          </div>
        )}
        <HomePageContent />
      </div>

      <About sectionRef={sectionRef} />
    </>
  );
}
