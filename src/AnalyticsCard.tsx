import { BarChart, Gauge, LineChart, PieChart } from "@mui/x-charts";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnalyticsCard({
  title,
  value,
  percentage,
  tableType,
  sectionsRef,
}: {
  title: string;
  value: string;
  percentage: string | undefined;
  tableType: string;
  sectionsRef: any;
}) {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (sectionsRef.current["Analytics"]) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setStartAnimation(true);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(sectionsRef.current["Analytics"]);
    }
  }, [startAnimation]);

  const renderBarType = () => {
    switch (tableType) {
      case "Gauge":
        return <Gauge width={180} height={180} value={80} />;
      case "BarChart":
        return (
          <BarChart
            xAxis={[
              { scaleType: "band", data: ["Group A", "Group B", "Group C"] },
            ]}
            series={[
              { data: [120, 170, 190] },
              { data: [60, 55, 25] },
              { data: [85, 70, 90] },
            ]}
            width={300}
            height={200}
          />
        );
      case "PieChart":
        return (
          <div className="flex justify-center w-full">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10 },
                    { id: 1, value: 15 },
                    { id: 2, value: 20 },
                  ],
                },
              ]}
              width={2400}
              height={200}
            />
          </div>
        );
      case "LineChart":
        return (
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 12, 22, 32, 45, 50],
              },
            ]}
            width={320}
            height={220}
          />
        );
    }
  };

  return (
    <motion.div
      initial={{ x: -2000 }}
      animate={startAnimation && { x: 0 }}
      transition={{ duration: 1 }}
      className="rounded-xl bg-white bg-opacity-20 flex flex-col shadow-lg items-center justify-around"
    >
      <div className="flex items-center flex-col h-full w-80">
        <p className="text-2xl p-10 text-white  text-center">{title}</p>

        <div className="z-10 border-white border-dashed border-2 rounded-full lg:w-32 lg:h-32 md:w-40 md:h-40 sm:w-46 sm:h-46 flex items-center justify-center p-12">
          <span className="text-white text-2xl font-bold">{percentage}</span>
        </div>
        {renderBarType()}

        <p className="text-lg text-white text-center mb-10 p-2">{value}</p>
      </div>
    </motion.div>
  );
}
