import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { FormControl, TextField, Switch } from "@mui/material";
import garudaind from "../../../../public/assets/garudaind.png";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { MuiTelInput } from "mui-tel-input";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Booking() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [value, setValue] = useState("");
  const [ticketData, setTicketData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [nationality, setNationality] = useState("");
  const [total_price, setTotal_Price] = useState();
  const [is_paid, setIs_Paid] = useState(1)
  const [insurance, setInsurance] = useState(false);
  const [storage, setStorage] = useState();
  const [localStorage, setLocalStorage] = useState({
    fullname: "Full Name",
    email: "Email",
    city: "City",
    phone: "Phone",
    nationality: "Nationality",
    photo: "https://res.cloudinary.com/dzvtizxtq/image/upload/v1682490851/ankasafy/pngtree-character-default-avatar-image_2237203_btsaoh.jpg",
    postcode: "Post Code",
    address: "Address",
  });

  const url = "http://localhost:4000";
  const router = useRouter();
  const id = router.query.id;

  // get tickets data by id
  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/tickets/${id}`).then((res) => {
      console.log(res.data.data);
      setTicketData(res.data.data);
      setLoading(false);
    });
  }, [id]);

  // get user data
  useEffect(() => {
    if (cookies.token) {
      setStorage(jwtDecode(cookies.token));
    }
  }, [cookies]);

  useEffect(() => {
    if (storage) {
      setLocalStorage({
        id: storage.id,
        fullname: storage.fullname,
        email: storage.email,
        city: storage.city,
        phone: storage.phone,
        nationality: storage.nationality,
        photo: storage.photo,
        postcode: storage.postcode,
        address: storage.address,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);

  
  // get tickets destructure
  const dataFormat = ticketData?.map((item) => {
    const timestamp1 = new Date(item.departure_time);
    const timestamp2 = new Date(item.arrival_time);

    const validatePrice = (x,y) => {
      if(x === true) {
        const sum = (parseFloat(y) + parseFloat("2.00")).toFixed(2); 
        return sum
      }
      return y
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
      price: validatePrice(insurance, item.price)
    };
  });

  const handlePhoneChange = (newValue) => {
    setValue(newValue);
  };

  // checked form
  const [checked, setChecked] = useState(false);
  const handleCheck = (event) => {
    setChecked(event.target.checked);
    if (checked === false) {
      setFullname(localStorage.fullname);
      setNationality(localStorage.nationality);
    } else {
      setFullname("");
      setNationality("");
    }
  };


  const insertBooking = async () => {
    let data = {
      tickets_id: id,
      users_id: localStorage.id,
      insurance,
      total_price: dataFormat[0].price,
      fullname,
      nationality,
      is_paid: 1,
    };
  
    console.log(data)
    console.log(dataFormat[0].price)
    await axios.post(`${url}/bookings`, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies.token}`
      }
    }).then((res) => {
      console.log(res)
      router.push(`/main/payment/${res.data.data.id}`)
    }).catch((err) => {
      console.log(err)
    })
  };


  return (
    <>
      <div id="__next" className="h-full w-full" style={{ backgroundColor: "#F5F6FA" }}>
        <Navbar />

        <div className={`flex w-full rounded-b-2xl ${poppins.className}`} style={{ backgroundColor: "#2395FF", height: 140 }}></div>

        <div className={`container mx-auto px-8 ${poppins.className}`} style={{ marginTop: -90 }}>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-4/6">
              <div className="font-bold text-white text-xl">Contact Person Details</div>
              <div className="container mx-auto px-4 my-4 bg-white rounded-xl">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col my-2">
                    <FormControl>
                      <label for="standard-password-input" className="mt-4 mb-1 font-bold">
                        Full Name
                      </label>
                      <TextField id="standard-password-input" type="text" autoComplete="current-password" variant="standard" placeholder="Mike Kowalski" value={localStorage.fullname} />

                      <label for="standard-password-input" className="mt-4 mb-1 font-bold">
                        Email
                      </label>
                      <TextField id="standard-password-input" type="text" autoComplete="current-password" variant="standard" placeholder="Mike Kowalski" value={localStorage.email} />

                      <label for="standard-password-input" className="mt-4 mb-1 font-bold">
                        Phone Number
                      </label>
                      <MuiTelInput id="phone-number-input" value={value || localStorage.phone} onChange={handlePhoneChange} variant="standard" color="primary" focused />
                    </FormControl>
                  </div>
                  <div className="mt-5 mb-5">
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
                        <Switch checked={checked} onChange={handleCheck} />
                      </div>
                    </div>
                    <FormControl>
                      <label for="standard-password-input" className="mt-4 mb-1 font-bold">
                        Full Name
                      </label>
                      <TextField id="standard-password-input" type="text" autoComplete="current-password" variant="standard" placeholder="Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />

                      <label for="standard-password-input" className="mt-4 mb-1 font-bold">
                        Nationality
                      </label>
                      <TextField id="standard-password-input" type="text" autoComplete="current-password" variant="standard" placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)}/>
                    </FormControl>
                  </div>
                  <div className="mt-5 mb-5">
                    <div className="flex justify-center bg-green-300">ALERT</div>
                  </div>
                </div>
              </div>
              <div className="font-bold text-black text-xl mt-6">Travel Insurance</div>
              <div className="container mx-auto px-4 my-4 bg-white rounded-xl">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between border-b-2 p-4">
                    <div className="flex flex-row gap-2">
                      <input
                        value={insurance}
                        checked={insurance}
                        onChange={(e) => setInsurance(e.target.checked)}
                        type="checkbox"
                        className="rounded border-blue-500 text-indigo-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 mx-1"
                      />
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
                
                  <button onClick={insertBooking} className="text-xs sm:text-sm font-semibold bg-blue-500 p-1 rounded-lg text-white ms-1 sm:py-4 sm:px-10 shadow-md shadow-blue-500/50">Proceed to Payment</button>
          
              </div>
            </div>
            <div className="flex flex-col w-2/6">
              <div className="flex flex-row items-end justify-between">
                <div className="font-bold text-white text-xl">Flight Details</div>
                <div className="font-semibold text-white text-base">View Details</div>
              </div>
              {dataFormat?.map((item, index) => (
                <div key={index} className="container mx-auto px-4 my-4 bg-white rounded-xl">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between p-4">
                      <div className="flex flex-row items-center gap-4 mt-4">
                        <Image src={garudaind} alt="garuda logo" style={{ width: "30%" }} />
                        <div className="text-xs sm:text-md">{item.airline}</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start text-sm sm:text-md font-bold ps-4 gap-2">
                      <div className="flex">
                        {item.departure_city} &#40;{item.departure_nationality}&#41;
                      </div>
                      <FlightTakeoffIcon style={{ width: "2rem" }} color="disabled" />
                      <div>
                        {item.arrival_city} &#40;{item.arrival_nationality}&#41;
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start text-sm sm:text-xs font-light ps-4 gap-2 text-gray-400">
                      <div className="flex">{item.departure_time}</div>
                      <div>&#8226;</div>
                      <div>{item.difference}</div>
                    </div>
                    <div className="flex flex-row ps-4 gap-2 items-center pt-4">
                      <CheckCircleOutlineIcon color="primary" />
                      <div className="text-sm text-sky-500">Refundable</div>
                    </div>
                    <div className="flex flex-row ps-4 gap-2 items-center pb-4 border-b-2">
                      <CheckCircleOutlineIcon color="primary" />
                      <div className="text-sm text-sky-500">Can reschedule</div>
                    </div>
                    <div className="flex flex-row p-4 justify-between">
                      <div className="font-bold">Total Payment</div>
                      <div className="flex flex-row items-center">
                        <div className="text-lg text-sky-500 font-bold">$ {item.price}</div>
                        <KeyboardArrowUpIcon className="flex items-center" color="primary" style={{ rotate: "180deg", width: "1.5rem" }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
