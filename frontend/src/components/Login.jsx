import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [loginData, setLoginData] = useState("");
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleClick = async () => {
    try {
      const result = await axios.post("http://localhost:8000/Users/login", {
        email: mail,
        password: password,
      });

      push("/Dashboard");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };
  console.log(loginData);

  return (
    <div>
      {error && <div>{error}</div>}
      <div className="w-[384px] h-fit flex flex-col gap-[40px]   justify-between items-center ">
        <Image
          alt=""
          className=" object-scale-down w-[92] h-[34]"
          src={"/geld.png"}
          width={92}
          height={34}
        />
        <div className="w-[287px] h-[64px] flex flex-col justify-center items-center ">
          <div className="w-[160px] h-[32px] text-[20px] leading-8 font-semibold">
            Welcome Back
          </div>
          <p className="w-full h-[24px] text-[15px] leading-6  flex justify-center font-normal ">
            Welcome back, Please enter your details
          </p>
        </div>
        <div className="w-[384px] h-fit flex flex-col items-center gap-[16px] ">
          <div className="w-[384px] h-[48px] flex justify-center items-center rounded-lg bg-[#D1D5DB] border border-gray-400 border-2 ">
            <input
              onChange={(el) => setMail(el.target.value)}
              value={mail}
              type="text"
              placeholder="Email"
              className="w-[352px] h-[24px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB]  "
            />
          </div>
          <div className="w-[384px] h-[48px] flex justify-center items-center rounded-lg bg-[#D1D5DB] border border-gray-400 border-2">
            <input
              onChange={(el) => setPassword(el.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="w-[352px] h-[24px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB] "
            />
          </div>

          <button
            onClick={handleClick}
            className="w-[384px] h-[48px] bg-[#0166FF] text-white text-[20px] rounded-[20px]"
          >
            Log in
          </button>

          <div className="w-[220px] h-[32px] flex justify-around items-center  text-[13px]">
            <p className="w-[143px] h-[24px]  flex items-center justify-center">
              Don't have account?
            </p>

            <a href="/Signup">
              <button className="w-[77px] h-[32px] flex justify-center items-center text-[#0166FF]">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
