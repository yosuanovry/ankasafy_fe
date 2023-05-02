import Image from "next/image";
import leftLayout from "../../../public/assets/left-layout.png";
import logoLayout from "../../../public/assets/logo-layout.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Login() {
  return (
    <div className={`h-screen flex ${poppins.className}`}>
      <div className="h-auto w-3/6 lg:w-3/6">
          <Image src={leftLayout} alt="logo" className="h-full" />
      </div>
      <div className="flex flex-col justify-center mx-16 sm:mx-20 md:mx-24 lg:mx-28 w-2/6">
        <div className="flex justify-start items-center flex-row gap-2 lg:gap-2 mb-8">
          <Image src={logoLayout} alt="Logo"/>
          <p className="font-bold text-md lg:text-2xl">Ankasa</p>
        </div>
        <div className="flex flex-col my-6">
          <h1 className="font-bold text-lg sm:text-4xl self-center">Forgot Password</h1>
          <form>
            <div className="mt-10">
              <input className="p-2 ps-1 my-2 lg:my-6 text-xs block w-full px-0.5 border-0 border-b-2 border-purple-200 focus:ring-0 focus:border-yellow-400 sm:text-base md:text-lg" type="text" placeholder="Email" />
            </div>
            <span className="flex justify-center items-center mt-10 rounded-lg text-sm sm:text-base md:text-lg py-1 md:py-4 font-semibold" style={{ backgroundColor: "#2395FF", color: "white" }}>
              <button type="submit" style={{width:455}}>Send</button>
            </span>

            <span className="flex items-center justify-center mt-8 lg:mt-6 text-xxs lg:text-md">
                Check your email after sending
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
