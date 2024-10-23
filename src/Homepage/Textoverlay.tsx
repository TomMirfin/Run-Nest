import { motion } from "framer-motion";
export default function Textoverlay({
  contentToShow,
}: {
  contentToShow: "TRAINER" | "LEG" | "ROAD" | "WEATHER";
}) {
  return (
    <>
      {contentToShow === "TRAINER" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-44 left-1/3 ml-24 text-white text-2xl p-5 rounded-tr-full rounded-br-full rounded-tl-full  bg-red-900 bg-opacity-80 flex flex-row items-center shadow-2xl font-bold"
        >
          <p className="text-sm font-medium pl-3.5 w-40 p-5">
            Collaborate with our specialist Trainer Developers to get the fit
            for you. Reducing the risk of injury and improving your performance.
          </p>
        </motion.div>
      )}{" "}
      {contentToShow === "LEG" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/3 ml-32 top-1/3 mt-32 mr-20 text-white text-2xl  p-5 rounded-tr-full rounded-br-full rounded-bl-full  bg-green-700 bg-opacity-80 flex flex-row items-center shadow-2xl"
        >
          <p className="text-sm font-medium pl-3.5 w-40 p-5">
            <strong className="text-orange-500">Run-Nest</strong> is designed to
            help you recover from injuries and get back to running as quickly as
            possible. Our team of experts will work with you to create a
            personalized recovery plan that will help you get back on your feet
            in no time.
          </p>
        </motion.div>
      )}
      {contentToShow === "WEATHER" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-40 left-2/3 ml-28 mt-24  mr-20 text-white text-2xl  p-5 rounded-tr-full rounded-br-full rounded-bl-full  bg-opacity-80 flex flex-row items-center shadow-2xl bg-orange-900"
        >
          <p className="text-sm font-medium pl-3.5 w-40 p-5">
            Have you ever been caught in a storm while out for a run? With{" "}
            <strong className="text-orange-500">Run-Nest</strong>, you can track
            the weather in real-time and get alerts when conditions change. Stay
            safe and dry with{" "}
            <strong className="text-orange-500">Run-Nest</strong>.
          </p>
        </motion.div>
      )}
      {contentToShow === "ROAD" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-44 right-20   mr-20 text-white text-2xl  p-5  bg-opacity-80 flex flex-row items-center shadow-2xl bg-blue-500 rounded-tr-full rounded-bl-full rounded-tl-full"
        >
          <div>
            <p className="text-sm font-medium pl-3.5 w-40 p-5">
              <strong className="text-orange-500">Run-Nest</strong> is designed
              to help you find the best running routes in your area. Whether
              you're looking for a scenic trail or a challenging hill,{" "}
              <strong className="text-orange-500">Run-Nest</strong> has you
              covered. Get out there and explore today.
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}
