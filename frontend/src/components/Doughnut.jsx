import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const Info = (props) => {
  const { color, name, price, percent } = props;
  return (
    <div className="w-full h-[20px] flex   ">
      <div className="w-[153px] h-[20px] flex">
        <div className="w-[12px] h-[12px] rounded-full "></div>
        <strong className="font-normal">{name}</strong>
      </div>
      <div className="w-[120px] h-[20px]">{price}</div>
      <div className="w-[64px] h-[20px]">{percent}</div>
    </div>
  );
};
const array = [
  {
    name: "Bills",
    price: "5’000’000₮",
    percent: "15.50%",
  },
  {
    name: "Bills",
    price: "5’000’000₮",
    percent: "15.50%",
  },
  {
    name: "Bills",
    price: "5’000’000₮",
    percent: "15.50%",
  },
  {
    name: "Bills",
    price: "5’000’000₮",
    percent: "15.50%",
  },
  {
    name: "Bills",
    price: "5’000’000₮",
    percent: "15.50%",
  },
];

export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "# of Votes",
      data: [3, 2, 4, 3, 4],
      backgroundColor: [
        "rgba(28, 100, 242, 1)",
        "rgba(242, 144, 28, 1)",
        "rgba(22, 189, 202, 1)",
        "rgba(253, 186, 140, 1)",
        "rgba(231, 70, 148, 1)",
      ],
      borderColor: [
        "rgba(28, 100, 242, 1)",
        "rgba(242, 144, 28, 1)",
        "rgba(22, 189, 202, 1)",
        "rgba(253, 186, 140, 1)",
        "rgba(231, 70, 148, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const DoughnutChart = () => {
  return (
    <div className="w-[588px] h-[284px] border border-black rounded-lg bg-white">
      <div className="border-b-2  w-full h-[56px] flex items-center justify-between  ">
        <strong className="ml-6">Income-Expence </strong>
        <p className="mr-4">Jun 1 - Nov 30</p>
      </div>
      <div className="flex items-center justify-center w-[558px] h-[228px] flex">
        <div className="w-[540px] h-[164px] gap-[47px]  flex">
          <div className="w-[156px] h-[156px] ">
            <Doughnut data={data} />
          </div>
          <div className="w-[337px] h-[164px] gap-[16px]  flex flex-col  justify-between">
            {array.map((el, i) => {
              return (
                <div>
                  <div>
                    <Info
                      key={i}
                      name={el.name}
                      price={el.price}
                      percent={el.percent}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
