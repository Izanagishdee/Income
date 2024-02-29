import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { IoIosGift } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { ImGlass } from "react-icons/im";
import { FaTaxi } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { CategoryData } from "./CategoryData";

const array = [
  {
    icon: <IoHome className="w-[24px] h-[24px] text-[#0166FF]" />,
    text: "Home",
  },
  {
    icon: <IoIosGift className="w-[24px] h-[24px] text-[#FF4545]" />,
    text: "Gift",
  },
  {
    icon: <ImSpoonKnife className="w-[24px] h-[24px] text-[#FB8A22]" />,
    text: "Food",
  },
  {
    icon: <ImGlass className="w-[24px] h-[24px] text-[#A804AB]" />,
    text: "Drink",
  },
  {
    icon: <FaTaxi className="w-[24px] h-[24px] text-[#EAB308]" />,
    text: "Taxi",
  },
  {
    icon: <IoShirt className="w-[24px] h-[24px] text-[#6F6CF3]" />,
    text: "shopping",
  },
  {
    icon: <IoShirt className="w-[24px] h-[24px] text-[#0166FF]" />,
    text: "shopping",
  },
  {
    icon: <IoShirt className="w-[24px] h-[24px] text-[#0166FF]" />,
    text: "shopping",
  },
];

export const Category = () => {
  return (
    <div className="w-full h-fit  bg-white flex flex-col">
      <button className="w-full h-[56px] gap-[12px] flex items-center border-b-2 ">
        <BsFillPlusCircleFill className="text-[#0166FF] w-[24px] h-[24px] " />
        <p className="text-[16px]">Add Category</p>
      </button>
      <div className="w-full h-[340px] gap-[12px] flex flex-col  overflow-scroll ">
        {array.map((el, i) => {
          return (
            <button>
              <CategoryData key={i} icon={el.icon} text={el.text} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
