import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { FormControl, TextField, MenuItem, Switch } from "@mui/material";
import garudaind from "../../../public/assets/garudaind.png";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const numbers = [
  {
    value: "ID",
    label: "+62",
  },
  {
    value: "UK",
    label: "+44",
  },
  {
    value: "AUS",
    label: "+61",
  },
];

const nationality = [
  {
    value: "ID",
    label: "Indonesia",
  },
  {
    value: "UK",
    label: "United Kingdom",
  },
  {
    value: "AUS",
    label: "Australia",
  },
];

function Booking() {
  return (
    <>
      <div id="__next" className="h-full w-full" style={{ backgroundColor: "#F5F6FA" }}>
        <Navbar />

        <div className={`flex w-full rounded-b-2xl ${poppins.className}`} style={{ backgroundColor: "#2395FF", height: 140 }}></div>

        <div className={`container mx-auto px-8 ${poppins.className}`} style={{marginTop:-90}}>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-4/6">
              <div className="font-bold text-white text-xl">Contact Person Details</div>
              <div className="container mx-auto px-4 my-4 bg-white rounded-xl">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col my-2">
                    <FormControl className="gap-4">
                      <TextField id="standard-password-input" label="Full Name" type="text" autoComplete="current-password" variant="standard" placeholder="Mike Kowalski" />

                      <TextField id="standard-password-input" label="Email" type="text" autoComplete="current-password" variant="standard" placeholder="Mike Kowalski" />
                      <div className="flex flex-row mt-2 gap-2">
                        <div>
                          <TextField id="standard-select-currency" select label="Phone Number" defaultValue="ID" helperText="Select code number" variant="standard">
                            {numbers.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </div>
                        <div>
                          <TextField id="standard-password-input" label="  " type="text" autoComplete="current-password" variant="standard" placeholder="1234567" />
                        </div>
                      </div>
                    </FormControl>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-center bg-green-300">ALERT</div>
                  </div>
                </div>
              </div>
              <div className="font-bold text-black text-xl mt-6">Passenger Details</div>
              <div className="container mx-auto px-4 my-4 bg-white rounded-xl">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col my-2">
                    <div className="flex flex-row items-center justify-between bg-sky-100 my-4 rounded-lg">
                      <div className="mx-6 text-sm">Passenger: 1 Adult</div>
                      <div className="flex flex-row items-center mx-4">
                        <div className="text-sm">Same as contact person</div>
                        <Switch />
                      </div>
                    </div>
                    <FormControl className="gap-4">
                      <TextField id="standard-password-input" label="Full Name" type="text" autoComplete="current-password" variant="standard" placeholder="Mike Kowalski" />

                      <div className="flex flex-row mt-2 gap-2">
                        <div>
                          <TextField id="standard-select-currency" select label="Nationality" defaultValue="ID" helperText="Select your nationality" variant="standard">
                            {nationality.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </div>
                      </div>
                    </FormControl>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-center bg-green-300">ALERT</div>
                  </div>
                </div>
              </div>
              <div className="font-bold text-black text-xl mt-6">Travel Insurance</div>
              <div className="container mx-auto px-4 my-4 bg-white rounded-xl">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between border-b-2 p-4">
                    <div className="flex flex-row gap-2">
                      <input type="checkbox" className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1" />
                      <div className="font-semibold">Travel Insurance</div>
                    </div>
                    <div className="text-blue-400 text-xxxs sm:text-md flex justify-center items-center font-semibold">
                      $ 2,00 <span className="text-gray-400">/pax</span>
                    </div>
                  </div>
                  <div className="p-4 text-sm font-semibold">Get travel compensation up to $ 10.000,00</div>
                </div>
              </div>
              <div className="flex items-center justify-center my-4">
                <Link href="/main/payment">
                <span className="text-xs sm:text-sm font-semibold bg-blue-500 p-1 rounded-lg text-white ms-1 sm:py-4 sm:px-10 shadow-md shadow-blue-500/50">Proceed to Payment</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-2/6">
              <div className="flex flex-row items-end justify-between">
                <div className="font-bold text-white text-xl">Flight Details</div>
                <div className="font-semibold text-white text-base">View Details</div>
              </div>
              <div className="container mx-auto px-4 my-4 bg-white rounded-xl">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between p-4">
                    <div className="flex flex-row items-center gap-4 mt-4">
                      <Image src={garudaind} alt="garuda logo" style={{ width: "30%" }} />
                      <div className="text-xs sm:text-md">Garuda Indonesia</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start text-sm sm:text-md font-bold ps-4 gap-2">
                <div className="flex">Medan &#40;IDN&#41;</div>
                <FlightTakeoffIcon style={{width: '2rem'}} color="disabled" />
                <div>Tokyo &#40;JPN&#41;</div>
              </div>
              <div className="flex flex-row items-center justify-start text-sm sm:text-xs font-light ps-4 gap-2 text-gray-400">
                <div className="flex">Sunday, 15 August 2020</div>
                <div>&#8226;</div>
                <div>12:33 - 15:21</div>
              </div>
              <div className="flex flex-row ps-4 gap-2 items-center pt-4">
                <CheckCircleOutlineIcon color="primary"/>
                <div className="text-sm text-sky-500">Refundable</div>
              </div>
              <div className="flex flex-row ps-4 gap-2 items-center pb-4 border-b-2">
                <CheckCircleOutlineIcon color="primary"/>
                <div className="text-sm text-sky-500">Refundable</div>
              </div>
              <div className="flex flex-row p-4 justify-between">
                    <div className="font-bold">Total Payment</div>
                    <div className="flex flex-row items-center">
                        <div className="text-lg text-sky-500 font-bold">$ 145,00</div>
                        <KeyboardArrowUpIcon  className="flex items-center" color="primary" style={{rotate:("180deg"), width:'1.5rem'}}/>   
                    </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#F5F6FA", paddingTop: 40 }}></div>

        <Footer />
      </div>
    </>
  );
}

export default Booking;
