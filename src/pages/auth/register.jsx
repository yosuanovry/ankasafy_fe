import Image from "next/image";
import leftLayout from "../../../public/assets/left-layout.png";
import logoLayout from "../../../public/assets/logo-layout.png";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const router = useRouter();

  const url = `https://drab-gray-bull-ring.cyclic.app`;

  const userRegister = (e) => {
    e.preventDefault();
    let data = {
      email,
      fullname,
      password,
    };
    axios
      .post(url + `/auth/register/customer`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(data);
      });
  };

  return (
    <div className={`h-screen flex ${poppins.className}`}>
      <div className="h-auto w-3/6 lg:w-3/6">
        <Image src={leftLayout} alt="logo" className="h-full" />
      </div>
      <div className="flex flex-col justify-center mx-16 sm:mx-20 md:mx-24 lg:mx-28 w-2/6">
        <div className="flex justify-start items-center flex-row gap-2 lg:gap-2 mb-8">
          <Image src={logoLayout} alt="Logo" />
          <p className="font-bold text-md lg:text-2xl">Ankasa</p>
        </div>
        <div className="flex flex-col my-6">
          <h1 className="font-bold text-lg sm:text-4xl">Register</h1>
          <form onSubmit={userRegister}>
            <div>
              <input
                required
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="p-2 ps-1 my-2 lg:my-6 text-xs block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-yellow-400 sm:text-base md:text-lg"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div>
              <input
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 ps-1 my-2 lg:my-6 text-xs block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-yellow-400 sm:text-base md:text-lg"
                type="text"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 ps-1 my-2 lg:my-6 text-xs block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-yellow-400 sm:text-base md:text-lg"
                type="password"
                placeholder="Password"
              />
            </div>
            <span className="flex justify-center items-center mt-6 rounded-lg text-sm sm:text-base md:text-lg py-1 md:py-4 font-semibold" style={{ backgroundColor: "#2395FF", color: "white" }}>
              <button type="submit" style={{ width: "100%" }}>
                Sign Up
              </button>
            </span>
            <label className="inline-flex items-center my-2 ms-2">
              <input required type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" />
              <span className="ml-2 text-xxs sm:text-md">Accept terms and condition</span>
            </label>
            <span className="flex items-center justify-center mt-8 lg:mt-16 text-xxs lg:text-md">Already have an account?</span>
            <span className="flex justify-center items-center mt-4 rounded-lg text-sm py-1 md:py-4 font-semibold border-blue-500 border-[1px] sm:text-base md:text-lg" style={{ backgroundColor: "white", color: "#2395FF" }}>
              <button type="submit" style={{ width: 455 }}>
                Sign In
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
