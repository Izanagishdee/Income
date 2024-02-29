import { IoHome } from "react-icons/io5";
import { IoIosGift } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { ImGlass } from "react-icons/im";
import { FaTaxi } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";

export const CategoryData = (props) => {
  const { icon, text, color } = props;
  return (
    <div>
      <button className="w-full h-[56px] gap-[12px] flex items-center ">
        <div>{icon}</div>
        <p className="text-[16px]">{text}</p>
      </button>
    </div>
  );
};
