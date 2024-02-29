import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="w-[172px] h-[184px] flex flex-col items-center ">
        <Image
          alt=""
          className=" object-scale-down "
          src={"/geld.png"}
          width={172}
          height={64}
        />
        <div className="flex flex-col justify-center items-center">
          <span class="loading loading-spinner loading-lg"></span>
          Түр хүлээнэ үү...
        </div>
      </div>
    </div>
  );
}
