import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export const Last_Records = (props) => {
  const { icons, text, price, mark, hour, color } = props;
  return (
    <div className="w-[894px] h-[64px] border border-inherit bg-white rounded-lg  flex justify-between items-center">
      <div className="w-[185px] h-[40px] gap-[16px] flex ml-2 items-center">
        <input type="checkbox" className="checkbox" />
        <Image
          alt=""
          className="object-scale-down w-[40px] h-[40px] "
          src={icons}
          width={40}
          height={40}
        />
        <div className="w-fit h-fit flex flex-col  ">
          <p className="text-[15px]">{text}</p>
          <p className="text-[12px] text-[``]">{hour}</p>
        </div>
      </div>
      <div className={`w-[64px] h-[24px] gap-[8px] mr-2 flex ${color} `}>
        <p>{mark}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
export const Yesterday_Records = (props) => {
  const { text, price, mark, hour, color } = props;
  return (
    <div className="w-[894px] h-[64px] border border-inherit bg-white rounded-lg mt-4 flex justify-between items-center">
      <div className="w-[185px] h-[40px] gap-[16px] ml-2 flex items-center ">
        <input type="checkbox" className="checkbox" />
        <div className="w-[500px] h-fit flex flex-col ">
          <p className="text-[15px]">{text}</p>
          <p className="text-[12px] ">{hour}</p>
        </div>
      </div>
      <div className={`w-[64px] h-[24px] gap-[8px] mr-4 flex ${color} `}>
        <p>{mark}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

const yesterday = [
  { text: "Select All", price: "35500₮", mark: "-", color: "text-[#94A3B8]" },
];

const array = [
  {
    icons: "/Home.png",
    text: "Lending&Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
    color: "text-[#23E01F]",
  },
  {
    icons: "/Food.png",
    text: "Lending&Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
    color: "text-[#EAB308]",
  },

  {
    icons: "/Food.png",
    text: "Lending&Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
    color: "text-[#EAB308]",
  },
  {
    icons: "/Food.png",
    text: "Lending&Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
    color: "text-[#EAB308]",
  },
  {
    icons: "/Food.png",
    text: "Lending&Renting",
    price: "1000₮",
    mark: "-",
    hour: "3 hours ago",
    color: "text-[#EAB308]",
  },
];

export const RecordRight = () => {
  return (
    <div className="w-[894px] h-[980px] gap-[24px] ">
      <div className="w-[894px] h-[48px] flex justify-between">
        <div className="w-[188px] h-[32px] gap-[16px] flex  justify-between items-center">
          <button>
            <IoIosArrowBack className="w-[32px] h-[32px] border border-black bg-[#E5E7EB] rounded-lg" />
          </button>
          <p className="w-[92px] h-[30px] text-[15px] flex items-center justify-center">
            Last 30 Days
          </p>
          <button>
            <IoIosArrowForward className="w-[32px] h-[32px] border border-black bg-[#E5E7EB] rounded-lg" />
          </button>
        </div>
        <select className="select select-bordered w-[180px] max-w-xs h-[48px]">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div className="w-[894px] h-[404px] gap-[12px]">
        <div>
          {yesterday.map((el, i) => {
            return (
              <div>
                <Yesterday_Records
                  key={i}
                  text={el.text}
                  price={el.price}
                  mark={el.mark}
                  hour={el.hour}
                  color={el.color}
                />
              </div>
            );
          })}
        </div>
        <div className="w-full h-fit flex flex-col justify-between mt-4 gap-[12px]">
          <strong className="text-[16px]">Today</strong>
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
                    color={el.color}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-fit flex flex-col justify-between mt-4 gap-[12px]">
          <strong className="text-[16px]">Yesterday</strong>
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
                    color={el.color}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
