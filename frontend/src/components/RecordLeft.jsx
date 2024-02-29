import { FaPlus } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as React from "react";
import { AddRecord } from "./AddRecords";
import { useState } from "react";

export const CategoryList = (props) => {
  const { name } = props;
  return (
    <div className="w-[250px] h-[32px] flex justify-between items-center gap-[16px] ">
      <div className="w-fit h-[32px] flex  justify-center items-center  gap-[10px]  ml-2">
        <IoEye />
        <p className="text-[15px]">{name}</p>
      </div>
      <IoMdArrowDropright className="mr-2" />
    </div>
  );
};
const Category = [
  { name: "Food & Drinks" },
  { name: "Shopping" },
  { name: "Housing" },
  { name: "Transportation" },
  { name: "Vehicle" },
  { name: "Life & Entertaiment" },
  { name: "Communication,Pc" },
  { name: "Financial expenses" },
  { name: "Investments" },
  { name: "Income" },
  { name: "Others" },
];

export const RecordLeft = () => {
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [show, setShow] = useState(false);
  const showHandle = () => {
    setShow(!show);
    console.log("sdada");
  };
  const handleC = () => {
    setShow(false);
  };
  return (
    <div className="w-[282px] h-[1080px]  bg-white flex flex-col items-center justify-center gap-[24px]">
      <div className="w-[250px] h-[88px] gap-[24px] flex flex-col justify-between">
        <strong>Records</strong>

        <button
          onClick={showHandle}
          className="w-[250px] h-[32px] bg-[#0166FF] flex items-center justify-center rounded-[20px] text-[24px] text-white"
        >
          <FaPlus />
          <strong>Add</strong>
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-[250px] h-[32px]"
      />
      <div className="w-[109px] h-fit gap-[16px] mr-[140px] ">
        <p className="text-[16px] w-full h-[40px] font-semibold">Types</p>
        <div className="w-[109px] h-fit ">
          <div className="form-control  ">
            <label className="label cursor-pointe flex justify-start gap-[10px]">
              <input
                type="radio"
                name="radio-10"
                className="radio checked"
                checked
              />
              <span className="label-text">All</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer flex justify-start gap-[10px]">
              <input
                type="radio"
                name="radio-10"
                className="radio checked"
                checked
              />
              <span className="label-text">Income</span>
            </label>
            <div className="form-control">
              <label className="label cursor-pointer flex justify-start gap-[10px]">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked"
                  checked
                />
                <span className="label-text">Expense</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[250px] h-[520px] gap-[16px] flex flex-col justyify-between">
        <div className="w-[250px] h-[32px] flex justify-between">
          <strong>Category</strong>
          <p className="text-gray-300">Clear</p>
        </div>
        <div className="w-[250px] h-[472px]  flex flex-col gap-[8px] ">
          {Category.map((el, i) => {
            return (
              <div>
                <div>
                  <CategoryList key={i} name={el.name} />
                </div>
              </div>
            );
          })}
          <div className="w-[250px] h-[32px] flex justify-between">
            <button className="w-[149px] h-[32px] flex items-center gap-[10px] ml-2 ">
              <FaPlus className="text-[#0166FF]" />
              <p>Add Category</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[245px] h-[152px] gap-[16px] flex flex-col items-center justify-center border border-black">
        <strong className="text-[16px]">Amount Range</strong>
        <div className="flex gap-[10px]">
          <input type="number" placeholder="" />
        </div>
        <div className="w-[245px] h-[48px] ml-10 ">
          <Box sx={{ width: 200 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </Box>
        </div>
      </div>
      {show && <AddRecord handleC={handleC} />}
    </div>
  );
};
