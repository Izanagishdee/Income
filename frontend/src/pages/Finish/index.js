import Image from "next/image";
import Link from "next/link";

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
          <li className="step step-primary">Finish </li>
        </ul>
      </div>
      <div className="w-[384px] h-fill gap-[32px] flex flex-col justify-between items-center mt-[250px]  ">
        <div className="w-fill h-fill  flex flex-col gap-[16px] justify-between items-center text-[24px]">
          <Image
            alt=""
            className=" object-scale-down "
            src={"/Check.png"}
            width={48}
            height={48}
          />
          <strong> Good Job!</strong>
        </div>
        <div className="w-[384px] h-[48px] flex justify-center items-center  text-[16px]">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </div>

        <Link href="/Dashboard">
          <button className="w-[384px] h-[48px] bg-[#0166FF] rounded-[20px] text-[20px] text-white">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
