import { Bar } from "react-chartjs-2";

import { Chart } from "chart.js/auto";

const BarChart = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#84CC16",
        borderColor: "rgba(255,99,132,1)",
        barThickness: 15,
        borderRadius: 20,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [3000000, 2200000, 2440000, 1040000, 1500000, 1850000, 2800000],
      },
      {
        label: "Expense",
        backgroundColor: "#F97316",
        borderColor: "rgba(255,99,132,1)",
        borderRadius: 20,
        barThickness: 15,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [2300000, 2100000, 2140000, 940000, 1000000, 1150000, 1800000],
      },
    ],
  };

  return (
    <div className="w-[588px] h-[284px] flex flex-col border border-black items-center rounded-lg bg-white">
      <div className="border-b-2  w-full h-[56px] flex items-center  ">
        <strong className="ml-6">Income-Expence </strong>
      </div>
      <div className="flex items-center justify-center w-[588px] h-[226px]  ">
        <Bar
          className=" w-[542px] h-[162px]  "
          data={chartData}
          width={100}
          height={30}
        />
      </div>
    </div>
  );
};

export default BarChart;
