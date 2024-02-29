import { DashHeader } from "./DashboardHeader";
import { DashboardCard } from "./DashboardCard";
import { DashboardChart } from "./DashboardCharts";
import { DashboardRecords } from "./DashboardRecords";

const Dashboard = () => {
  return (
    <div className="w-screen h-fill bg-gray-200 flex flex-col items-center justify-between ">
      <DashHeader />
      <DashboardCard />
      <DashboardChart />
      <DashboardRecords />
    </div>
  );
};

export default Dashboard;
