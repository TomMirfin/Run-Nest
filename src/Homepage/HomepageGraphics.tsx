export default function HomePageGraphics({
  setShowTextOverlay,
  setContentToShow,
  selection,
}: {
  setShowTextOverlay: (value: boolean) => void;
  selection: "TRAINER" | "LEG" | "ROAD" | "WEATHER";
  setContentToShow: (value: string) => void;
}) {
  return (
    <div
      className="relative hover:bg-orange-400 z-50 "
      onClick={() => {
        setShowTextOverlay(true);
        setContentToShow(selection);
      }}
    >
      <div className="z-20 border-orange-400 border-4 rounded-full lg:w-28 lg:h-28 md:w-36 md:h-36 sm:w-42 sm:h-42 absolute hover:bg-orange-400 transition-colors ease-in-out duration-100 opacity-40"></div>
      <div className="z-10 border-white border-dashed border-2 rounded-full lg:w-32 lg:h-32 md:w-40 md:h-40 sm:w-46 sm:h-46 absolute top-[-0.5rem] left-[-0.5rem]  hover:animate-spin opacity-40 "></div>
    </div>
  );
}
