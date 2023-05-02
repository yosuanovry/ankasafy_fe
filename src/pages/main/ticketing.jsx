import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import logoLayoutWhite from "../../../public/assets/logo-layout-white.png";
import RepeatIcon from "@mui/icons-material/Repeat";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import garudaind from "../../../public/assets/garudaind.png";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LuggageIcon from "@mui/icons-material/Luggage";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import WifiIcon from "@mui/icons-material/Wifi";
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Ticketing() {
  return (
    <>
      <div id="__next" className="h-full w-full" style={{ backgroundColor: "#F5F6FA" }}>
        <Navbar />
        <div className={`flex w-full rounded-b-2xl ${poppins.className}`} style={{ backgroundColor: "#2395FF", height: 140 }}>
          <div className="flex flex-row mx-6 text-white sm:w-full">
            <div className="flex flex-row w-full sm:mx-32 gap-2">
              <div className="flex justify-center items-center">
                <Image src={logoLayoutWhite} alt="Logo" style={{ width: "80%" }} />
              </div>
              <div className="flex flex-col justify-center w-4/6 sm:w-56">
                <div className="flex flex-row items-center justify-between text-xxs sm:text-xs">
                  <div className="flex items-start justify-start">From</div>
                  <div className="flex justify-end">To</div>
                </div>
                <div className="flex flex-row items-center justify-between text-xs h-1/6 sm:h-8 sm:text-sm">
                  <div className="flex">Medan &#40;IDN&#41;</div>
                  <RepeatIcon style={{ width: 15 }} />
                  <div>Tokyo &#40;JPN&#41;</div>
                </div>
                <div className="flex flex-row justify-start items-center text-xxs sm:text-xs">
                  <div>Monday, 20 July 20 &#8226; 6 Passengers &#8226; Economy</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end text-xs sm:text-sm w-2/6 ms-14 sm:ms-52 sm:justify-center">
              <div>Change search</div>
            </div>
          </div>
        </div>

        <div className={`container mx-auto px-4 mt-3 ${poppins.className}`}>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-2/6 justify-center">
              <div className="flex flex-row justify-between items-end">
                <div className="text-lg font-bold sm:text-xl">Filter</div>
                <div className="text-sm text-blue-500 font-bold sm:text-md">Reset</div>
              </div>

              <div className="container h-5/6 bg-white mt-5 rounded-t-xl" style={{ borderBottomWidth: 1 }}>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-md font-bold">Transit</div>
                  <KeyboardArrowUpIcon color="primary" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-3">
                  <div className="text-xs font-semibold sm:text-sm">Direct</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-xs font-semibold sm:text-sm">Transit</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 my-2">
                  <div className="text-xs font-semibold sm:text-sm">Transit 2+</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
              </div>

              <div className="container h-5/6 bg-white" style={{ borderBottomWidth: 1 }}>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-md font-bold">Facilities</div>
                  <KeyboardArrowUpIcon color="primary" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-3">
                  <div className="text-xs font-semibold sm:text-sm">Luggage</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-xs font-semibold sm:text-sm">In-Flight Meal</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 my-2">
                  <div className="text-xs font-semibold sm:text-sm">Wi-fi</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
              </div>

              <div className="container h-5/6 bg-white" style={{ borderBottomWidth: 1 }}>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-sm font-bold">Departure Time</div>
                  <KeyboardArrowUpIcon color="primary" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-3">
                  <div className="text-xs font-semibold sm:text-sm">00:00 - 06:00</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-xs font-semibold sm:text-sm">06:00 - 12:00</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 my-2">
                  <div className="text-xs font-semibold sm:text-sm">12:00 - 18:00</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 my-2">
                  <div className="text-xs font-semibold sm:text-sm">18:00 - 24:00</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
              </div>

              <div className="container h-5/6 bg-white" style={{ borderBottomWidth: 1 }}>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-sm font-bold">Time Arrived</div>
                  <KeyboardArrowUpIcon color="primary" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-3">
                  <div className="text-xs font-semibold sm:text-sm">00:00 - 06:00</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-xs font-semibold sm:text-sm">06:00 - 12:00</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 my-2">
                  <div className="text-xs font-semibold sm:text-sm">12:00 - 18:00</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 my-2">
                  <div className="text-xs font-semibold sm:text-sm">18:00 - 24:00</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
              </div>

              <div className="container h-5/6 bg-white rounded-b-xl" style={{ borderBottomWidth: 1 }}>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-md font-bold">Airlines</div>
                  <KeyboardArrowUpIcon color="primary" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-3">
                  <div className="text-xs font-semibold sm:text-sm">Garuda Indonesia</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 mt-2">
                  <div className="text-xs font-semibold sm:text-sm">Air Asia</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
                <div className="flex flex-row justify-between items-center mx-2 my-2">
                  <div className="text-xs font-semibold sm:text-sm">Lion Air</div>
                  <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-4/6 ">
              <div className="flex flex-row justify-between items-center sm:items-end">
                <div className="flex flex-col sm:flex-row sm:items-end sm:gap-1 font-bold">
                  <div className="text-md sm:text-lg">Select Ticket</div>
                  <div className="text-xs sm:text-md text-gray-400 font-light">&#40;6 flight found&#41;</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="font-bold text-sm">Sort by</div>
                  <RepeatIcon style={{ width: 15, rotate: "90deg" }} />
                </div>
              </div>
              <div className="container mx-auto px-4 bg-white mt-5 rounded-xl">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2 mt-4">
                    <Image src={garudaind} alt="garuda logo" style={{ width: "10%" }} />
                    <div className="text-xs sm:text-md">Garuda Indonesia</div>
                  </div>
                  <div className="flex flex-row justify-between mt-2">
                    <div className="flex sm:gap-4">
                      <div className="flex flex-col">
                        <div className="text-sm font-semibold sm:text-lg">IDN</div>
                        <div className="text-xxs sm:text-xs">12:33</div>
                      </div>
                      <div className="flex justify-center">
                        <FlightTakeoffIcon style={{ width: "100%" }} color="disabled" />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm font-semibold sm:text-lg">JPN</div>
                        <div className="text-xxs sm:text-xs">15:21</div>
                      </div>
                    </div>
                    <div className="flex flex-col text-xxxs sm:text-sm justify-start sm:justify-center sm:items-center ms-1 text-gray-400" style={{ width: "20%" }}>
                      <div className="flex justify-start font-bold">3 hours 11 minutes</div>
                      <div className="flex justify-start">&#40;1 transit&#41;</div>
                    </div>
                    <div className="flex flex-row items-center sm:gap-1">
                      <LuggageIcon color="disabled" />
                      <LunchDiningIcon color="disabled" />
                      <WifiIcon color="disabled" />
                    </div>
                    <div className="text-blue-400 text-xxxs sm:text-sm flex justify-center items-center ms-1 font-semibold">
                      $ 214,00 <span className="text-gray-400">/pax</span>
                    </div>
                    <div className="flex items-center">
                      <Link href="/main/booking">
                      <span className="text-xs sm:text-sm font-semibold bg-blue-400 p-1 rounded-lg text-white ms-1 sm:py-3 sm:px-10 shadow-md shadow-blue-500/50">Select</span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-1 gap-1 mb-3">
                    <div className="flex font-bold text-blue-400 items-center text-xs sm:text-sm">View Details</div>
                    <KeyboardArrowUpIcon className="flex items-center" color="primary" style={{ rotate: "180deg", width: "1.5rem" }} />
                  </div>
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

export default Ticketing;
