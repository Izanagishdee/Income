import BarChart from "./Barchart";
import { DoughnutChart } from "./Doughnut";

export const DashboardChart = () => {
  return (
    <div className="flex gap-[24px] mt-20  justify-center items-center ">
      <BarChart />
      <DoughnutChart />
    </div>
  );
};
