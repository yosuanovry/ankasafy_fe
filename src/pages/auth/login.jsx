import Image from "next/image";
import leftLayout from "../../../public/assets/left-layout.png";
import logoLayout from "../../../public/assets/logo-layout.png";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { Poppins } from "next/font/google";
import CircularProgress from '@mui/material/CircularProgress';

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const router = useRouter();

  let data = {
    email,
    password,
  };

  const userLogin = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post(process.env.NEXT_APP_URL + `/auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then((res) => {
        console.log("Login success");
        console.log(res);

        setCookie("token", res.data.data.token, {
          path: "/",
        });
        setLoading(true)
        router.replace("/profile/myprofile");
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setError(err.response.data.message)
      });
  };

  return (
    <div className={`h-screen flex flex-col md:flex-row ${poppins.className}`}>
      <div className="h-3/6 w-full lg:h-auto lg:w-3/6">
        <Image src={leftLayout} alt="logo" className="h-full" />
      </div>
      <div className="flex flex-col justify-center sm:mx-20 md:mx-24 lg:mx-28 w-full lg:w-2/6">
        <div className="flex justify-start items-center flex-row gap-2 mt-4 mx-4 lg:gap-2 lg:mb-8">
          <Image src={logoLayout} alt="Logo" />
          <p className="font-bold text-md lg:text-2xl">Ankasa</p>
        </div>
        <div className="flex flex-col justify-center items-center my-6">
          <h1 className="font-bold text-lg sm:text-4xl">Login</h1>
          <form className="w-full" onSubmit={userLogin}>
            <div className="flex justify-center w-full lg:mt-10">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                className="p-2 ps-1 my-2 lg:my-6 text-xs block w-auto lg:w-full px-0.5 border-0 border-b-2 border-purple-200 focus:ring-0 focus:border-yellow-400 sm:text-base md:text-lg"
                type="text"
                placeholder="Email"
              />
            </div>

            <div className="flex justify-center">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                className="p-2 ps-1 my-2 lg:my-6 text-xs block w-auto lg:w-full px-0.5 border-0 border-b-2 border-purple-200 focus:ring-0 focus:border-yellow-400 sm:text-base md:text-lg"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="flex justify-center items-center w-2/6 lg:w-full mt-4 lg:mt-10 rounded-lg text-sm sm:text-base md:text-lg py-1 md:py-4 font-semibold" style={{ backgroundColor: "#2395FF", color: "white" }}>
                Sign In
              </button>
            </div>

            {loading && <div className="flex justify-center items-center mt-4">
              <CircularProgress />
              </div>
              }
             {error && <div className="flex justify-center items-center mt-4 text-red-500">{error}, masukkan data yang benar</div>}

            <span className="flex items-center justify-center mt-8 lg:mt-6 text-xxs lg:text-md">Did you forgot your password?</span>

            <span className="flex items-center justify-center mt-2 text-xxs lg:text-md" style={{ textDecoration: "underline", color: "blue" }}>
              Tap here for reset
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
