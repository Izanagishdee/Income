import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export const Signup = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState({});
  const [userData, setUserData] = useState({});

  const [Logindata, setLogindata] = useState("");

  const [error, setError] = useState("");
  const { push } = useRouter();
  console.log(mail);
  console.log({
    username: name,
    email: mail,
    password: password,
    repassword: repassword,
  });

  const handleClick = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/Users/sign", {
        username: name,
        email: mail,
        password: password,
      });
      push("/Currency");
      console.log(data);
      // const submit = (event) => {
      //   const { name, value } = event.target;
      //   setUserData({ ...userData, [name]: value });
      //   if (name === "password" || name === "rePassword") {
      //     setConfirmPass({ ...confirmPass, [name]: value });
      //   }
      // };
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <div className="w-[384px] h-fit flex flex-col gap-[40px]   justify-between items-center ">
        <Image
          alt=""
          className=" object-scale-down  "
          src={"/geld.png"}
          width={92}
          height={34}
        />
        <div className="w-[287px] h-fit flex gap-[8px] flex-col justify-center items-center ">
          <div className="w-fit h-[32px] text-[20px] leading-8 font-semibold">
            Create Geld account
          </div>
          <p className="w-[311px] h-[24px] text-[15px] leading-6  flex justify-center items-center font-normal ">
            Sign up below to create your Wallet account
          </p>
        </div>
        <div className="w-[384px] h-fit flex flex-col items-center gap-[16px] ">
          <div className="w-[384px] h-[48px] flex justify-center items-center rounded-lg bg-[#D1D5DB] border border-gray-400 border-2 ">
            <input
              onChange={(el) => setName(el.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              className="w-[352px] h-[24px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB]  "
            />
          </div>
          <div className="w-[384px] h-[48px] flex justify-center items-center rounded-lg bg-[#D1D5DB] border border-gray-400 border-2 ">
            <input
              onChange={(el) => setMail(el.target.value)}
              name="name"
              value={mail}
              type="text"
              placeholder="Email"
              className="w-[352px] h-[24px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB]  "
            />
          </div>
          <div className="w-[384px] h-[48px] flex justify-center items-center rounded-lg bg-[#D1D5DB] border border-gray-400 border-2 ">
            <input
              onChange={(el) => setPassword(el.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="w-[352px] h-[24px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB]  "
            />
          </div>
          <div className="w-[384px] h-[48px] flex justify-center items-center rounded-lg bg-[#D1D5DB] border border-gray-400 border-2">
            <input
              onChange={(el) => setRepassword(el.target.value)}
              value={repassword}
              type="password"
              placeholder="Re-password"
              className="w-[352px] h-[24px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB] "
            />
          </div>

          <button
            onClick={handleClick}
            className="w-[384px] h-[48px] bg-[#0166FF] text-white text-[20px] rounded-[20px]"
          >
            <div>Sign up</div>
          </button>

          <div className="w-[220px] h-[32px] flex justify-around items-center  text-[13px]">
            <p className="w-[143px] h-[24px]  flex items-center justify-center">
              Already have account?
            </p>
            <Link href="/">
              <button className="w-[77px] h-[32px] flex justify-center items-center text-[#0166FF]">
                Login up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
