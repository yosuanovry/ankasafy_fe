import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { pink } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";
import axios from "axios";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function MyBooking() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState(null)
  const [storage, setStorage] = useState();
  const [localStorage, setLocalStorage] = useState({
    fullname: "Full Name",
    email: "Email",
    city: "City",
    nationality: "Nationality",
    phone: "Phone",
    photo: "https://res.cloudinary.com/dzvtizxtq/image/upload/v1682490851/ankasafy/pngtree-character-default-avatar-image_2237203_btsaoh.jpg",
    postcode: "Post Code",
    address: "Address"
  });

  const router = useRouter();
  const url = "http://localhost:4000";

  useEffect(() => {
    if (cookies.token) {
      setStorage(jwtDecode(cookies.token));
    }
  }, [cookies]);

  useEffect(() => {
    if (storage) {
      setLocalStorage({
        fullname: storage.fullname,
        email: storage.email,
        city: storage.city,
        nationality: storage.nationality,
        phone: storage.phone,
        photo: storage.photo,
        postcode: storage.postcode,
        address: storage.address
      });
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);
  
  useEffect(() => {
    setLoading(true)
    axios.get(`${url}/bookings/mybookings`, {
      headers: {
        "Authorization": `Bearer ${cookies.token}`
      }
    }).then((res) => {
    console.log(res.data.data)
    setDatas(res.data.data);
    setLoading(false);
    });
  },[cookies.token])

  const dataFormat = datas?.map((item) => {
    const timestamp1 = new Date(item.departure_time);
    const timestamp2 = new Date(item.arrival_time);

    const validateIsPaid = (data) => {
      if(data === 1) {
        return (
          <button className="p-4 text-white text-sm font-bold rounded-lg shadow-lg" style={{backgroundColor:'#FF7F23'}}>Waiting for payment</button>
        )
      } else if(data === 2) {
        return (
          <button className="p-4 ms-5 text-white text-sm font-bold rounded-lg shadow-lg" style={{backgroundColor:'#4FCF4D'}}>E-ticket Issued</button>
        )
      }
      return null
    }

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
      is_paid: validateIsPaid(item.is_paid)
    };
  });

  
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
                <Image src={localStorage.photo} alt="dummy" width={128} height={128} style={{ borderWidth: 3, borderRadius: "4rem", borderColor: "#2395FF", width: "8rem" }} />
              </div>
              <div className="flex justify-center mt-7 text-xl font-bold">{localStorage.fullname}</div>
              <div className="flex flex-row justify-center items-center mt-2 gap-1 text-base">
                <PlaceIcon color="primary" />
                <div>{localStorage.city}, {localStorage.nationality}</div>
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

           
              <div  className="flex flex-col w-4/6">
              <div className="flex flex-col rounded-xl" style={{ backgroundColor: "white" }}>
                <div className="pt-6 ps-6 tracking-widest text-sm text-blue-400">MY BOOKING</div>
                <div className="flex flex-row pt-2 pb-6 px-6 justify-between items-end">
                  <div className="text-xl font-bold">My Booking</div>
                  <div className="font-bold text-sm text-blue-400">Order History</div>
                </div>
              </div>

              {dataFormat?.map((item,index) => (
                <div key={index}>
                <div className="flex flex-col rounded-xl mt-8" style={{ backgroundColor: "white" }}>
                <div className="pt-6 ps-6 text-sm">{item.departure_time}</div>
                <div className="flex flex-row items-center justify-start text-sm sm:text-xl font-bold ps-6 gap-4 mt-2">
                  <div className="flex">{item.departure_nationality}</div>
                  <FlightTakeoffIcon style={{ width: "2rem" }} color="disabled" />
                  <div>{item.arrival_nationality}</div>
                </div>
                <div className="pt-2 px-6 pb-4 text-sm text-gray-400 border-b-2">{item.airlines_name}, {item.code_type}</div>
                <div className="flex flex-row px-6 py-6 justify-between items-center">
                  <div className="flex flex-row items-center gap-20">
                    <div className="text-gray-500 font-bold">Status</div>
                    <div onClick={()=>router.push(`/main/bookticket/${item.id}`)}>{item.is_paid}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-blue-400 text-sm font-bold">View Details</div>
                    <KeyboardArrowUpIcon color="primary" style={{ rotate: "180deg" }} />
                  </div>
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

export default MyBooking;
