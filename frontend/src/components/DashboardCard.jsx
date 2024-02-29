import Image from "next/image";

export const DashboardCard = () => {
  return (
    <div className="flex gap-[24px] mt-20">
      <div className="w-fill h-fill border border-black rounded-lg relative ">
        <Image
          alt=""
          className=" object-scale-down rounded-lg relative z-0  "
          src={"/land.jpeg"}
          width={384}
          height={216}
        />
        <Image
          alt=""
          className=" object-scale-down rounded-lg absolute z-10 left-[32px] top-[32px] "
          src={"/white.png"}
          width={80}
          height={39}
        />
        <div className="w-[108px] h-fit  absolute z-10 left-[32px] bottom-[32px]">
          <p className="text-[rgba(255, 255, 255, 1)] text-[16px]">Cash</p>
          <strong className="text-[24px] text-white">10,000,00</strong>
        </div>
        <Image
          alt=""
          className=" object-scale-down rounded-lg absolute z-10 right-[32px] bottom-[42px]  "
          src={"/Union.png"}
          width={12}
          height={20}
        />
      </div>
      <div className="w-[384px] h-[256px] border border-black rounded-lg bg-white flex flex-col">
        <div className="flex w-[384px] h-[56px] items-center  border-b-2 ">
          <div className="flex ml-4">
            <Image
              alt=""
              className="object-scale-down"
              src={"/green.png "}
              width={20}
              height={20}
            />
            <h1>Your Income</h1>
          </div>
        </div>
        <div className="w-[384px] h-[160px] gap-[16px] flex items-center ">
          <div className=" w-fit h-fit ml-4 gap-[16px] flex flex-col">
            <div className="w-fit h-fit gap-[4px] flex flex-col ">
              <strong className="text-[36px]">1,200,000₮</strong>
              <p>Your Income Amount</p>
            </div>
            <div className="w-fit h-[28px] flex">
              <Image
                alt=""
                className="object-scale-down"
                src={"/Up.png "}
                width={20}
                height={20}
              />
              <p>32% from last month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[384px] h-[256px] border border-black rounded-lg bg-white flex flex-col">
        <div className="flex w-[384px] h-[56px] items-center  border-b-2 ">
          <div className="flex ml-4">
            <Image
              alt=""
              className="object-scale-down"
              src={"/Blue.png "}
              width={20}
              height={20}
            />
            <h1>Total Expenses</h1>
          </div>
        </div>
        <div className="w-[384px] h-[160px] gap-[16px] flex items-center ">
          <div className=" w-fit h-fit ml-4 gap-[16px] flex flex-col">
            <div className="w-fit h-fit gap-[4px] flex flex-col ">
              <strong className="text-[36px]">1,200,000₮</strong>
              <p>Your Income Amount</p>
            </div>
            <div className="w-fit h-[28px] flex">
              <Image
                alt=""
                className="object-scale-down"
                src={"/Down.png "}
                width={20}
                height={20}
              />
              <p>32% from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
