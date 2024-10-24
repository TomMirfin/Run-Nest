import anaylysesBG from "./assets/images/pexels-bohlemedia-2803158.jpg";
import AnalyticsCard from "./AnalyticsCard";

import { useEffect, useState } from "react";

interface AnalyticalData {
  title: string;
  value: string;
  percentage?: string;
  tableType: string;
}
export default function Analytics({ sectionsRef }: { sectionsRef: any }) {
  const [carOnePercentage, setCarOnePercentage] = useState(0);
  const [cardTwoPercentage, setCardTwoPercentage] = useState(0);
  const [cardThreePercentage, setCardThreePercentage] = useState(0);
  useEffect(() => {
    let percentage = 0;
    const finalPercentage = 98;
    let percentage2 = 0;
    const finalPercentage2 = 70;
    let percentage3 = 0;
    const finalPercentage3 = 85;
    if (sectionsRef.current["Analytics"]) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const interval = setInterval(() => {
                if (percentage < finalPercentage) {
                  percentage++;
                  setCarOnePercentage(percentage);
                }
                if (percentage2 < finalPercentage2) {
                  percentage2++;
                  setCardTwoPercentage(percentage2);
                }
                if (percentage3 < finalPercentage3) {
                  percentage3++;
                  setCardThreePercentage(percentage3);
                }
              }, 10);
              return () => clearInterval(interval);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(sectionsRef.current["Analytics"]);
    }
  }, [sectionsRef]);

  const data: AnalyticalData[] = [
    {
      title: "Athlete Consistency",
      value:
        "98% of athletes reported improved performance thanks to our state-of-the-art analytics.",
      percentage: `${carOnePercentage}%`,
      tableType: "Gauge",
    },
    {
      title: "Injury Prevention",
      value:
        "700 athletes actively using our platform have significantly reduced their injury rates.",
      percentage: `${cardTwoPercentage}%`,
      tableType: "BarChart",
    },
    {
      title: "Performance",
      value:
        "85% of users experienced a notable increase in training consistency due to our app's features.",
      percentage: `${cardThreePercentage}%`,
      tableType: "LineChart",
    },
  ];

  return (
    <div
      className="pl-96 gap-10  h-screen bg-white pt-20 pr-60 flex flex-row justify-around pb-20"
      id="Analytics"
      style={{
        backgroundImage: `url(${anaylysesBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {data.map((item, index) => (
        <AnalyticsCard
          sectionsRef={sectionsRef}
          key={index}
          title={item.title}
          value={item.value}
          percentage={item.percentage}
          tableType={item.tableType}
        />
      ))}
    </div>
  );
}
