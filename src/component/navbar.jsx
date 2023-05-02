import Image from "next/image";
import { Poppins } from "next/font/google";
import logoLayout from "../../public/assets/logo-layout.png";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import dummy from "../../public/assets/dummy.png";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { useRouter } from "next/router";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const router = useRouter();

  const Logout = () => {
    removeCookie("token", { path: "/" });
    router.replace("/auth/login");
  };

  if (!cookies.token) {
    return (
      <div className={`flex w-full ${poppins.className}`} style={{ height: 120, justifyContent: "space-evenly", backgroundColor: "white" }}>
        <div className="flex flex-row items-center gap-2">
          <Image src={logoLayout} alt="Logo" width={30} />
          <p className="font-bold text-md lg:text-2xl">Ankasa</p>
        </div>
        <div className="flex flex-row w-10 sm:w-1/6 items-center">
          <Input
            className="text-xs sm:text-md"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ width: "100%" }} />
              </InputAdornment>
            }
            style={{ width: "100%" }}
            placeholder="Destination"
          />
        </div>

        <div className="flex items-center text-xs sm:text-md">
          <Link className="hover:font-bold hover:bg-red-500 focus:font-bold" href="/auth/login">
            Find Ticket
          </Link>
        </div>
        <div className="flex items-center text-xs sm:text-md">
          <Link href="/profile/mybooking">My Booking</Link>
        </div>
        <div className="flex items-center gap-4">
          <MailOutlineIcon style={{ width: "25%" }} />
          <NotificationsNoneIcon style={{ width: "25%" }} />
          <Link href="/profile/myprofile">
          <Image src={dummy} alt="dummy" style={{ borderWidth: 1, borderRadius: "1.5rem", borderColor: "#2395FF", width: "100%" }} />       
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`flex w-full ${poppins.className}`} style={{ height: 120, justifyContent: "space-evenly", backgroundColor: "white" }}>
        <div className="flex flex-row items-center gap-2">
          <Image src={logoLayout} alt="Logo" width={30} />
          <p className="font-bold text-md lg:text-2xl">Ankasa</p>
        </div>
        <div className="flex flex-row w-10 sm:w-1/6 items-center">
          <Input
            className="text-xs sm:text-md"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ width: "100%" }} />
              </InputAdornment>
            }
            style={{ width: "100%" }}
            placeholder="Destination"
          />
        </div>
        <Link href="/main/ticketing">
          <div className="flex items-center text-xs sm:text-md hover:font-bold hover:bg-red-500 focus:font-bold">Find Ticket</div>
        </Link>
        <Link href="/profile/mybooking">
          <div className="flex items-center text-xs sm:text-md">My Booking</div>
        </Link>
        <div className="flex items-center gap-4">
          <MailOutlineIcon style={{ width: "25%" }} />
          <NotificationsNoneIcon style={{ width: "25%" }} />
          <Link href="profile/myprofile">
          <Image src={dummy} alt="dummy" style={{ borderWidth: 1, borderRadius: "1.5rem", borderColor: "#2395FF", width: "100%" }} />   
          </Link>
          <div className="shadow-lg shadow-red-500/50 p-2 rounded-xl text-white ms-2" style={{ backgroundColor: "red" }}>
            <button onClick={Logout}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
