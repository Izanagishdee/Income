import { useContext } from "react";
import { AddrecordContext } from "./MainProvider";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Category } from "./Category";
import { IoIosArrowDown } from "react-icons/io";

export const AddRecord = ({ handleC }) => {
  const [color, setColor] = useState(false);
  return (
    <div className="">
      <div className="w-full inset-0 bg-black/30 h-full flex items-center justify-center z-10 absolute">
        <div className=" w-[800px] h-[580px] flex flex-col rounded-xl bg-white z-20 ">
          <div className="flex justify-between px-[20px] py-[24px] items-center">
            <p className="text-xl font-semibold text-[#0F172A]">Add Record</p>
            <RxCross2
              onClick={handleC}
              className="text-3xl text-[#0F172A] cursor-pointer"
            />
          </div>
          <div className="border"></div>
          <div className="flex">
            <div className="px-[24px] py-[20px] flex flex-col gap-[30px] items-center">
              <div className="flex gap-1">
                <button
                  onClick={() => {
                    setColor(true);
                  }}
                  style={{
                    color: color ? "white" : "black",
                    backgroundColor: color ? "#0166FF" : "#F3F4F6",
                  }}
                  className={`rounded-xl text-white px-[15px] py-[5px] w-[150px] `}
                >
                  Expense
                </button>
                <button
                  onClick={() => {
                    setColor(false);
                  }}
                  style={{
                    color: color ? "black" : "white",
                    backgroundColor: color ? "#F3F4F6" : "#16A34A",
                  }}
                  className={`rounded-xl bg-[#F3F4F6] text-black px-[15px] py-[5px] w-[150px] `}
                >
                  Income
                </button>
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col">
                  <p className="text-[#000000] text-base">Amount</p>
                  <input
                    type="text"
                    placeholder="₮ 000,00"
                    className="bg-[#F3F4F6] border border-[#D1D5DB] py-[5px] px-[15px] rounded-xl w-[348px] h-[80px] text-[#000000]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 w-[348px] flex justify-between bg-gray-100"
                    >
                      <p className="text-gray-500">Find or choose category</p>

                      <IoIosArrowDown />
                    </div>
                    <div
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-[350px] rounded-lg ml-1"
                    >
                      <Category />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-base font-normal text-[#1F2937]">Date</p>
                    <label className="form-control w-full max-w-xs">
                      <select className="select bg-[#F3F4F6] w-[170px] border border-[#D1D5DB]">
                        <option disabled selected>
                          OCT 30, 2023
                        </option>
                        <option>OCT 31, 2023</option>
                        <option>NOV 01, 2023</option>
                        <option>NOV 02, 2023</option>
                        <option>NOV 03, 2023</option>
                        <option>NOV 04, 2023</option>
                        <option>NOV 05, 2023</option>
                        <option>NOV 06, 2023</option>
                        <option>NOV 07, 2023</option>
                        <option>NOV 08, 2023</option>
                        <option>NOV 09, 2023</option>
                        <option>NOV 10, 2023</option>
                        <option>NOV 11, 2023</option>
                        <option>NOV 12, 2023</option>
                        <option>NOV 13, 2023</option>
                        <option>NOV 14, 2023</option>
                        <option>NOV 15, 2023</option>
                        <option>NOV 16, 2023</option>
                        <option>NOV 17, 2023</option>
                        <option>NOV 18, 2023</option>
                        <option>NOV 19, 2023</option>
                        <option>NOV 20, 2023</option>
                        <option>NOV 21, 2023</option>
                        <option>NOV 22, 2023</option>
                        <option>NOV 23, 2023</option>
                        <option>NOV 24, 2023</option>
                        <option>NOV 25, 2023</option>
                        <option>NOV 26, 2023</option>
                        <option>NOV 27, 2023</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <p className="text-base font-normal text-[#1F2937]">Time</p>
                    <label className="form-control w-full max-w-xs">
                      <select className="select bg-[#F3F4F6] w-[170px] border border-[#D1D5DB]">
                        <option disabled selected>
                          4:15 PM
                        </option>
                        <option>4:30 PM</option>
                        <option>4:45 PM</option>
                        <option>5:00 PM</option>
                        <option>5:15 PM</option>
                        <option>5:30 PM</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <button
                style={{
                  color: color ? "white" : "white",
                  backgroundColor: color ? "#0166FF" : "#16A34A",
                }}
                className="rounded-2xl bg-[#0166FF] text-white px-[15px] py-[5px] w-[348px]"
              >
                Add Record
              </button>
            </div>
            <div className="flex flex-col p-6 w-[403px] gap-5">
              <div className="flex flex-col gap-3">
                <p className="text-base font-normal text-[#1F2937]">Payee</p>
                <input
                  type="text"
                  placeholder="Write here"
                  className="bg-[#F3F4F6] border border-[#D1D5DB] w-[348px] h-[45px] rounded-xl text-[#000000] p-3"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-base font-normal text-[#1F2937]">Note</p>
                <textarea
                  type="text"
                  placeholder="Write here"
                  className="bg-[#F3F4F6] border border-[#D1D5DB] w-[348px] h-[300px] rounded-xl text-[#000000] p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
