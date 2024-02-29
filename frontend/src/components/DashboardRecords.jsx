import Image from "next/image";
export const Last_Records = (props) => {
  const { icons, text, price, mark, hour } = props;
  return (
    <div className="w-[1152px] h-[80px] border-b-2    flex justify-between items-center">
      <div className="w-[185px] h-[40px] gap-[16px] flex">
        <Image
          alt=""
          className="object-scale-down"
          src={icons}
          width={40}
          height={40}
        />
        <div className="w-[500px] h-fit flex flex-col ">
          <p className="text-[15px]">{text}</p>
          <p className="text-[12px] text-[#6B7280]">{hour}</p>
        </div>
      </div>
      <div className="w-[64px] h-[24px] gap-[8px] flex text-[#84CC16]">
        <p>{mark}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

const array = [
  {
    icons: "/Home.png",
    text: "Lending & Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
  },
  {
    icons: "/Home.png",
    text: "Lending & Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
  },

  {
    icons: "/Home.png",
    text: "Lending & Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
  },
  {
    icons: "/Home.png",
    text: "Lending & Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
  },
  {
    icons: "/Home.png",
    text: "Lending&Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
  },
];

export const DashboardRecords = () => {
  return (
    <div className="w-[1200px] h-fit border border-black mt-20 rounded-lg bg-white mb-10">
      <div className="w-full h-[56px] border-b-2   flex items-center ">
        <strong className="ml-4">Last Records</strong>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-between">
        {array.map((el, i) => {
          return (
            <div>
              <div>
                <Last_Records
                  key={i}
                  icons={el.icons}
                  text={el.text}
                  price={el.price}
                  mark={el.mark}
                  hour={el.hour}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
