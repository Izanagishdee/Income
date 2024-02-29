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
          <li className="step ">Balance</li>
          <li className="step">Finish </li>
        </ul>
      </div>
      <div className="w-[384px] h-[308px] gap-[32px] flex flex-col items-center mt-[250px] ">
        <div className="w-[225px] h-fill gap-[16px]  flex flex-col justify-between items-center text-[24px]">
          <Image
            alt=""
            className=" object-scale-down "
            src={"/Currency.png"}
            width={48}
            height={48}
          />
          <p> Select base currency</p>
        </div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            MNT - Mongolian Tugrik
          </option>
          <option>USD - US Dollar</option>
          <option>USD - US Dollar</option>
        </select>
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one
        <Link href="/Balance">
          <button className="w-[384px] h-[48px] bg-[#0166FF] rounded-[20px] text-[20px] text-white">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
