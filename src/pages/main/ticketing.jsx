import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import logoLayoutWhite from "../../../public/assets/logo-layout-white.png";
import RepeatIcon from "@mui/icons-material/Repeat";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LuggageIcon from "@mui/icons-material/Luggage";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import WifiIcon from "@mui/icons-material/Wifi";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";


const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Ticketing() {
  const [datas, setDatas] = useState();

  const router = useRouter()

  const getTickets = async () => {
    axios
      .get(process.env.NEXT_APP_URL + `/tickets`)
      .then((res) => {
        console.log(res.data.data);
        setDatas(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTickets();
  }, []);

  const dataFormat = datas?.map((item) => {
    const timestamp1 = new Date(item.departure_time);
    const timestamp2 = new Date(item.arrival_time);

    const validateTransits = (data) => {
      if (data === 1) {
        return "Direct";
      } else if (data === 2) {
        return "2 Direct";
      } else if (data === 3) {
        return "1 Transit";
      } else if (data === 4) {
        return "2 Transit";
      }
      return null;
    };

    const validateFacilities = (data) => {
      if (data === 1) {
        return (
          <div className="flex flex-row items-center sm:gap-1">
            <LuggageIcon color="disabled" />
          </div>
        );
      } else if (data === 2) {
        return (
          <div className="flex flex-row items-center sm:gap-1">
            <LunchDiningIcon color="disabled" />
          </div>
        );
      } else if (data === 3) {
        return (
          <div className="flex flex-row items-center sm:gap-1">
            <WifiIcon color="disabled" />
          </div>
        );
      } else if (data === 4) {
        return (
          <div className="flex flex-row items-center sm:gap-1">
            <LuggageIcon color="disabled" />
            <LunchDiningIcon color="disabled" />
          </div>
        );
      } else if (data === 5) {
        return (
        <div className="flex flex-row items-center sm:gap-1">
          <LuggageIcon color="disabled" />
          <WifiIcon color="disabled" />
        </div>
        );

      } else if (data === 6) {
        return (
          <div className="flex flex-row items-center sm:gap-1">
          <LunchDiningIcon color="disabled" />
          <WifiIcon color="disabled" />
        </div>
        );
      } else if (data === 7) {
        return (
          <div className="flex flex-row items-center sm:gap-1">
          <LuggageIcon color="disabled" />
          <LunchDiningIcon color="disabled" />
          <WifiIcon color="disabled" />
        </div>
        );
      }
      return null
    };

    const timeFormat1 = timestamp1.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const timeFormat2 = timestamp2.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    const timeDifference = Math.abs(timestamp2 - timestamp1);
    const hour = Math.floor(timeDifference / 3600000); // menghitung timeDifference dalam jam
    const minute = Math.floor((timeDifference % 3600000) / 60000); // menghitung timeDifference dalam menit

    let diffStr = "";

    if (hour > 0) {
      diffStr += `${hour} Hour${hour > 1 ? "s" : ""}`;
    }
    if (minute > 0) {
      diffStr += `${diffStr ? " " : ""}${minute} minute${minute > 1 ? "s" : ""}`;
    }

    return {
      ...item,
      departure_time: timeFormat1,
      arrival_time: timeFormat2,
      difference: diffStr,
      transits: validateTransits(item.transits),
      facilities: validateFacilities(item.facilities)
    };
  });

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

        <div className={`container mx-auto px-4 mt-6 ${poppins.className}`}>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-3/12 justify-start">
              <div className="flex flex-row justify-between items-end">
                <div className="text-lg font-bold sm:text-xl">Filter</div>
                <div className="text-sm text-blue-500 font-bold sm:text-md">Reset</div>
              </div>

              <Accordion disableGutters className="rounded-t-xl mt-5 border-b-2">
                <AccordionSummary
                  expandIcon={<KeyboardArrowUpIcon color="primary" className="text-ankasa-blue" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="font-bold">Transit</div>
                </AccordionSummary>
                <AccordionDetails className="text-sm font-bold">
                  {/* op 1 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-direct" className="p-1 text-black">
                      Direct
                    </label>
                    <input id="chk-direct" type="checkbox"></input>
                  </div>
                  {/* op 2 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit1" className="p-1 text-black">
                      Transit 1
                    </label>
                    <input id="chk-transit1" type="checkbox"></input>
                  </div>
                  {/* op 3 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit2" className="p-1 text-black">
                      Transit 2+
                    </label>
                    <input id="chk-transit2" type="checkbox"></input>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion disableGutters className="border-b-2">
                <AccordionSummary
                  expandIcon={<KeyboardArrowUpIcon color="primary" className="text-ankasa-blue" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="font-bold">Facilities</div>
                </AccordionSummary>
                <AccordionDetails className="text-sm font-bold">
                  {/* op 1 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-direct" className="p-1 text-black">
                      Luggage
                    </label>
                    <input id="chk-direct" type="checkbox"></input>
                  </div>
                  {/* op 2 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit1" className="p-1 text-black">
                    In-Flight Meal
                    </label>
                    <input id="chk-transit1" type="checkbox"></input>
                  </div>
                  {/* op 3 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit2" className="p-1 text-black">
                    Wi-fi
                    </label>
                    <input id="chk-transit2" type="checkbox"></input>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion disableGutters className="border-b-2">
                <AccordionSummary
                  expandIcon={<KeyboardArrowUpIcon color="primary" className="text-ankasa-blue" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="font-bold">Departure Time</div>
                </AccordionSummary>
                <AccordionDetails className="text-sm font-bold">
                  {/* op 1 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-direct" className="p-1 text-black">
                    00:00 - 06:00
                    </label>
                    <input id="chk-direct" type="checkbox"></input>
                  </div>
                  {/* op 2 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit1" className="p-1 text-black">
                    06:00 - 12:00
                    </label>
                    <input id="chk-transit1" type="checkbox"></input>
                  </div>
                  {/* op 3 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit2" className="p-1 text-black">
                    12:00 - 18:00
                    </label>
                    <input id="chk-transit2" type="checkbox"></input>
                  </div>
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit2" className="p-1 text-black">
                    18:00 - 24:00
                    </label>
                    <input id="chk-transit2" type="checkbox"></input>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion disableGutters className="border-b-2">
                <AccordionSummary
                  expandIcon={<KeyboardArrowUpIcon color="primary" className="text-ankasa-blue" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="font-bold">Time Arrived</div>
                </AccordionSummary>
                <AccordionDetails className="text-sm font-bold">
                  {/* op 1 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-direct" className="p-1 text-black">
                    00:00 - 06:00
                    </label>
                    <input id="chk-direct" type="checkbox"></input>
                  </div>
                  {/* op 2 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit1" className="p-1 text-black">
                    06:00 - 12:00
                    </label>
                    <input id="chk-transit1" type="checkbox"></input>
                  </div>
                  {/* op 3 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit2" className="p-1 text-black">
                    12:00 - 18:00
                    </label>
                    <input id="chk-transit2" type="checkbox"></input>
                  </div>
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit2" className="p-1 text-black">
                    18:00 - 24:00
                    </label>
                    <input id="chk-transit2" type="checkbox"></input>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion disableGutters className="border-b-2">
                <AccordionSummary
                  expandIcon={<KeyboardArrowUpIcon color="primary" className="text-ankasa-blue" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="font-bold">Airlines</div>
                </AccordionSummary>
                <AccordionDetails className="text-sm font-bold">
                  {/* op 1 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-direct" className="p-1 text-black">
                    Garuda Indonesia
                    </label>
                    <input id="chk-direct" type="checkbox"></input>
                  </div>
                  {/* op 2 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit1" className="p-1 text-black">
                    Air Asia
                    </label>
                    <input id="chk-transit1" type="checkbox"></input>
                  </div>
                  {/* op 3 */}
                  <div className="flex flex-row justify-between">
                    <label htmlFor="chk-transit2" className="p-1 text-black">
                    Lion Air
                    </label>
                    <input id="chk-transit2" type="checkbox"></input>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          
              <div className="flex flex-col w-9/12 ">
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
            {dataFormat?.map((item, index) => (
                <div key={index} className="container mx-auto px-4 bg-white mt-5 rounded-xl">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4 mt-4">
                      <Image src={item.airline_photo} width={100} height={100} alt="garuda logo" style={{ width: "10%" }} />
                      <div className="text-xs sm:text-md">{item.airline}</div>
                    </div>
                    <div className="flex flex-row justify-between mt-2 gap-4">
                      <div className="flex sm:gap-4">
                        <div className="flex flex-col">
                          <div className="text-sm font-semibold sm:text-lg">{item.departure_nationality}</div>
                          <div className="text-xxs sm:text-xs">{item.departure_time}</div>
                        </div>
                        <div className="flex justify-center">
                          <FlightTakeoffIcon style={{ width: "100%" }} color="disabled" />
                        </div>
                        <div className="flex flex-col">
                          <div className="text-sm font-semibold sm:text-lg">{item.arrival_nationality}</div>
                          <div className="text-xxs sm:text-xs">{item.arrival_time}</div>
                        </div>
                      </div>
                      <div className="flex flex-col text-xxxs sm:text-sm justify-start sm:justify-center sm:items-center ms-1 text-gray-400" style={{ width: "20%" }}>
                        <div className="flex justify-start font-bold">{item.difference}</div>
                        <div className="flex justify-start">&#40;{item.transits}&#41;</div>
                      </div>
                        {item.facilities}
                      <div className="text-blue-400 text-xxxs sm:text-sm flex justify-center items-center ms-1 font-semibold">
                        ${item.price} <span className="text-gray-400">/pax</span>
                      </div>
                      <div className="flex items-center">
                        <div style={{cursor:"pointer"}} onClick={() => {
                          router.push(`/main/bookings/${item.id}`)}
                        }>
                          <span className="text-xs sm:text-sm font-semibold bg-blue-400 p-1 rounded-lg text-white ms-1 sm:py-3 sm:px-10 shadow-md shadow-blue-500/50">Select</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center mt-1 gap-1 mb-3">
                      <div className="flex font-bold text-blue-400 items-center text-xs sm:text-sm">View Details</div>
                      <KeyboardArrowUpIcon className="flex items-center" color="primary" style={{ rotate: "180deg", width: "1.5rem" }} />
                    </div>
                  </div>
                </div>
                  ))}
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
