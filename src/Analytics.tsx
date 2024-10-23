import { Box } from "@mui/material";
import { Gauge, SparkLineChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
export default function Analytics() {
  return (
    <div className="ml-60 mt-20">
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={120}
        width={300}
        xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 60 }}
      />
      <Gauge width={100} height={100} value={60} />
      <Gauge
        width={100}
        height={100}
        value={60}
        startAngle={-90}
        endAngle={90}
      />
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          height={60}
          width={100}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          plotType="bar"
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          width={100}
          height={60}
        />
      </Box>
    </div>
  );
}
