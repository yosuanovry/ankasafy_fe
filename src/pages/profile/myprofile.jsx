import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import dummy from "../../../public/assets/dummy.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { pink } from "@mui/material/colors";
import { FormControl, TextField, MenuItem, Switch, NativeSelect } from "@mui/material";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function MyProfile() {
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
              <div className="flex flex-row justify-between mx-14 mt-8 mb-10">
                <div className="flex flex-row gap-8 font-bold">
                  <LogoutIcon sx={{ color: pink[500] }} />
                  <div style={{ color: "#F24545" }}>Logout</div>
                </div>
                <KeyboardArrowUpIcon sx={{ color: pink[500] }} style={{ rotate: "90deg" }} />
              </div>
            </div>

            <div className="flex flex-col w-4/6">
              <div className="flex flex-col rounded-xl" style={{ backgroundColor: "white" }}>
                <div className="pt-6 ps-6 tracking-widest text-md text-blue-400">PROFILE</div>
                <div className="flex flex-row pt-2 pb-6 px-6 justify-between items-end">
                  <div className="text-xl font-bold">Profile</div>
                  <div className="font-bold text-sm text-blue-400">Order History</div>
                </div>
                <div className="flex flex-row mt-4 px-6">
                  <div className="flex flex-col w-3/6 px-6">
                    <div className="font-bold">Contact</div>
                    <FormControl className="gap-6">
                      <TextField id="standard-password-input" label="Email" type="text" autoComplete="current-password" variant="standard" placeholder="Mike Kowalski" />
                      <div className="flex flex-row gap-2">
                        <div>
                          <TextField id="standard-select-currency" select label="Phone Number" defaultValue="ID" helperText="Code number" variant="standard">
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

                  <div className="flex flex-col w-3/6 px-6">
                    <div className="font-bold">Biodata</div>
                    <FormControl className="gap-6">
                      <TextField id="standard-password-input" label="Full Name" type="text" autoComplete="current-password" variant="standard" placeholder="Mike Kowalski" />

                      <TextField id="standard-select-currency" select label="City" defaultValue="ID" variant="standard">
                        {nationality.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>

                      <TextField id="standard-password-input" label="Address" type="text" autoComplete="current-password" variant="standard" placeholder="Medan, Indonesia" />

                      <TextField id="standard-password-input" label="Post Code" type="text" autoComplete="current-password" variant="standard" placeholder="55555" />
                    </FormControl>

                    <div className="flex justify-end">
                      <button type="submit" className="my-8 rounded-lg text-sm sm:text-base font-semibold py-3 px-12 shadow-lg shadow-blue-500/50" style={{ backgroundColor: "#2395FF", color: "white" }}>
                        Save
                      </button>
                    </div>
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

export default MyProfile;
