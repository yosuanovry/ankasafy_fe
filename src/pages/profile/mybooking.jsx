import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import dummy from "../../../public/assets/dummy.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { pink } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function MyBooking() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const router = useRouter()
  
  const Logout = () => {
    removeCookie("token", { path: "/" });
    router.replace("/auth/login");
  };

  return (
    <>
      <div id="__next" className="h-full w-full" style={{ backgroundColor: "#F5F6FA" }}>
        <Navbar />

        <div className={`container mx-auto px-4 mt-3 ${poppins.className}`}>
          <div className="flex flex-row gap-4 mt-14">
            <div className="flex flex-col w-2/6 justify-center mx-10 rounded-xl" style={{ backgroundColor: "white" }}>
              <div className="flex justify-center mt-8">
                <Image src={dummy} alt="dummy" style={{ borderWidth: 3, borderRadius: "4rem", borderColor: "#2395FF", width: "8rem" }} />
              </div>
              <div className="flex justify-center items-center mt-6 rounded-lg text-sm py-1 md:py-3 font-semibold border-blue-500 border-[2px] sm:text-base mx-28" style={{ backgroundColor: "white", color: "#2395FF" }}>
                <button type="submit" style={{ width: "7rem" }}>
                  Select Photo
                </button>
              </div>
              <div className="flex justify-center mt-7 text-xl font-bold">Mike Kowalski</div>
              <div className="flex flex-row justify-center items-center mt-2 gap-1 text-base">
                <PlaceIcon color="primary" />
                <div>Medan, Indonesia</div>
              </div>

              <div className="flex flex-row justify-between mx-10 mt-10">
                <div className="font-bold text-base">Cards</div>
                <div className="font-bold text-base text-blue-400">+ Add</div>
              </div>

              <div className="flex flex-col mx-10 text-white mt-3 rounded-xl shadow-lg shadow-blue-500/50" style={{ backgroundColor: "#2395FF" }}>
                <div className="pt-4 ps-6 font-bold tracking-widest">4441 1235 5512 5551</div>
                <div className="flex flex-row justify-between pt-4 pb-4 ps-6 pe-6 font-light">
                  <div>X Card</div>
                  <div>$ 1,440.2</div>
                </div>
              </div>

              <div className="flex flex-row justify-between mx-14 mt-10">
                <div className="flex flex-row gap-8 font-bold">
                  <AccountCircleIcon />
                  <div>Profile</div>
                </div>
                <KeyboardArrowUpIcon style={{ rotate: "90deg" }} />
              </div>
              <div className="flex flex-row justify-between mx-14 mt-8">
                <div className="flex flex-row gap-8 font-bold">
                  <StarIcon />
                  <div>My Review</div>
                </div>
                <KeyboardArrowUpIcon style={{ rotate: "90deg" }} />
              </div>
              <div className="flex flex-row justify-between mx-14 mt-8">
                <div className="flex flex-row gap-8 font-bold">
                  <SettingsIcon />
                  <div>Settings</div>
                </div>
                <KeyboardArrowUpIcon style={{ rotate: "90deg" }} />
              </div>
              <div onClick={Logout} className="flex flex-row justify-between mx-14 mt-8 mb-10" style={{cursor:'pointer'}}>
                <div className="flex flex-row gap-8 font-bold">
                  <LogoutIcon sx={{ color: pink[500] }} />
                  <div style={{ color: "#F24545" }}>Logout</div>
                </div>
                <KeyboardArrowUpIcon sx={{ color: pink[500] }} style={{ rotate: "90deg" }} />
              </div>
            </div>

            <div className="flex flex-col w-4/6">
              <div className="flex flex-col rounded-xl" style={{ backgroundColor: "white" }}>
                <div className="pt-6 ps-6 tracking-widest text-sm text-blue-400">MY BOOKING</div>
                <div className="flex flex-row pt-2 pb-6 px-6 justify-between items-end">
                  <div className="text-xl font-bold">My Booking</div>
                  <div className="font-bold text-sm text-blue-400">Order History</div>
                </div>
              </div>

              <div className="flex flex-col rounded-xl mt-8" style={{ backgroundColor: "white" }}>
                <div className="pt-6 ps-6 text-sm">Monday, 20 July ‘20 - 12:33</div>
                <div className="flex flex-row items-center justify-start text-sm sm:text-xl font-bold ps-6 gap-4 mt-2">
                  <div className="flex">IDN</div>
                  <FlightTakeoffIcon style={{ width: "2rem" }} color="disabled" />
                  <div>JPN</div>
                </div>
                <div className="pt-2 px-6 pb-4 text-sm text-gray-400 border-b-2">Garuda Indonesia, AB-221</div>
                <div className="flex flex-row px-6 py-6 justify-between items-center">
                  <div className="flex flex-row items-center gap-20">
                    <div className="text-gray-500 font-bold">Status</div>
                    <div className="p-[1rem] text-white text-sm font-bold rounded-lg shadow-lg" style={{backgroundColor:'#FF7F23'}}>Waiting for payment</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-blue-400 text-sm font-bold">View Details</div>
                    <KeyboardArrowUpIcon color="primary" style={{ rotate: "180deg" }} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-xl mt-8" style={{ backgroundColor: "white" }}>
                <div className="pt-6 ps-6 text-sm">Monday, 20 July ‘20 - 12:33</div>
                <div className="flex flex-row items-center justify-start text-sm sm:text-xl font-bold ps-6 gap-4 mt-2">
                  <div className="flex">IDN</div>
                  <FlightTakeoffIcon style={{ width: "2rem" }} color="disabled" />
                  <div>JPN</div>
                </div>
                <div className="pt-2 px-6 pb-4 text-sm text-gray-400 border-b-2">Garuda Indonesia, AB-221</div>
                <div className="flex flex-row px-6 py-6 justify-between items-center">
                  <div className="flex flex-row items-center gap-[6.5rem]">
                    <div className="text-gray-500 font-bold">Status</div>
                    <Link href="/main/bookticket">
                    <div className="p-[1rem] text-white text-sm font-bold rounded-lg shadow-lg" style={{backgroundColor:'#4FCF4D'}}>Eticket issued</div>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-blue-400 text-sm font-bold">View Details</div>
                    <KeyboardArrowUpIcon color="primary" style={{ rotate: "180deg" }} />
                  </div>
                </div>
                <div className="flex justify-end">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#F5F6FA", paddingTop: 100 }}></div>

      <Footer />
    </>
  );
}

export default MyBooking;
