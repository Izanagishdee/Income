import Image from "next/image";

function Index() {
  return (
    <div className="text-[12px] w-screen h-screen flex flex-col items-center ">
      <div className="w-[240px] h-[136px] flex flex-col justify-between items-center mt-[100px]">
        <Image
          alt=""
          className=" object-scale-down "
          src={"/geld.png"}
          width={107}
          height={40}
        />
        <ul className="steps">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary ">Balance</li>
          <li className="step">Finish </li>
        </ul>
      </div>
      <div className="w-[384px] h-[308px] gap-[32px] flex flex-col justify-between items-center mt-[250px] border border-black ">
        <div className="w-fill h-fill  flex flex-col gap-[16px] justify-between items-center text-[24px]">
          <Image
            alt=""
            className=" object-scale-down "
            src={"/Coins.png"}
            width={48}
            height={48}
          />
          <p> Set up your cash Balance</p>
        </div>
        <div className="w-[384px] flex flex-col items-center">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs bg-gray-200"
          />
          How much cash do you have in your wallet?
        </div>

        <a href="/Finish">
          <button className="w-[384px] h-[48px] bg-[#0166FF] rounded-[20px] text-[20px] text-white">
            Confirm
          </button>
        </a>
      </div>
    </div>
  );
}

export default Index;
