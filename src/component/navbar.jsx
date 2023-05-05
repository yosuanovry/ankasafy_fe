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
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [storage, setStorage] = useState(null);
  // const [localStorage, setLocalStorage] = useState({
  //   photo: "https://res.cloudinary.com/dzvtizxtq/image/upload/v1682490851/ankasafy/pngtree-character-default-avatar-image_2237203_btsaoh.jpg",
  // });

  const url = `https://drab-gray-bull-ring.cyclic.app`

  // useEffect(() => {
  //   if (cookies.token) {
  //     setStorage(jwtDecode(cookies.token));
  //   }
  // }, [cookies]);

  // useEffect(() => {
  //   if (storage) {
  //     setLocalStorage({
  //       photo: storage.photo,
  //     });
  //     console.log(storage)
  //   }
  // }, [storage]);

  useEffect(() => {
    getUserData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  const getUserData = async () => {
    await axios.get(url + `/users/profile`, {
      headers: {
        "Authorization": `Bearer ${cookies.token}`
      }
    }).then((res) => {
      console.log(res.data.data)
      setStorage(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }

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

        <div className="flex flex-row items-center gap-8">
          <Link href="/auth/login">
            <button className="bg-blue-500 border-2 border-blue-500 text-white p-2 shadow-md shadow-blue-500/50">Sign in</button>
          </Link>
          <Link href="/auth/register">
            <button className="border-2 border-blue-500 p-2 shadow-lg shadow-blue-300/50">Sign up</button>
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
        <Link className="flex items-center" href="/main/ticketing">
          <div className="flex items-center text-xs sm:text-md hover:font-bold hover:bg-red-500 focus:font-bold">Find Ticket</div>
        </Link>
        <Link className="flex items-center" href="/profile/mybooking">
          <div className="flex items-center text-xs sm:text-md">My Booking</div>
        </Link>
        <div className="flex items-center gap-4">
          <MailOutlineIcon style={{ width: "25%" }} />
          <NotificationsNoneIcon style={{ width: "25%" }} />
            {storage?.map((item,index) => (
          <Link key={index} href="/profile/myprofile">
              <Image src={item.photo} alt="dummy" width={120} height={120} style={{ borderWidth: 1, borderRadius: "1.5rem", borderColor: "#2395FF", width: "100%" }} />
          </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default Navbar;
