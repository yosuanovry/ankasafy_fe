import React, {useState, useEffect} from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import garudaind from "../../../../public/assets/garudaind.png";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import generateBarcode from '../../../component/barcode';
import axios from "axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";


const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function BookTicket() {
  const [datas, setDatas] = useState({
    id: "1234 A 4 234123",
    photo: "https://res.cloudinary.com/dzvtizxtq/image/upload/v1683362284/ankasafy/xaqwenawmotuqdceysiy.jpg",
    departure_nationality: "IDN",
    arrival_nationality: "JPN",
    code_type: "AB-221",
    class_type: "Economy",
    terminal: "A",
    Gate: "221",
    departure_time: "Monday, 20 July'20 - 12:33"
  });
  const [loading, setLoading] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const router = useRouter();
  const id = router.query.id;


  useEffect(() => {
    setLoading(true)
    axios.get(`${process.env.NEXT_APP_URL}/bookings/detail/${id}`, {
      headers: {
        "Authorization": `Bearer ${cookies.token}`
      }
    }).then((res) => {
    console.log(res.data.data[0])
    setDatas(res.data.data[0]);
    
    setLoading(false);
    });
  },[id, cookies.token])

  useEffect(() => {
    generateBarcode('barcodeCanvas', datas.id)
  },[datas.id])


  return (
    <>
      <Navbar />
      <div className={`flex w-full ${poppins.className}`} style={{ backgroundColor: "#2395FF", height: 640 }}>
        <div className={`container mx-80 my-20 bg-white rounded-lg`}>
          <div className="flex flex-col h-full px-20 gap-4 my-12">
            <div className="flex flex-row items-center justify-between">
              <div className="font-bold text-xl">Booking Pass</div>
              <MoreVertIcon color="primary" />
            </div>
            
            <div className="flex flex-row border-2 rounded-xl">
              <div className="flex flex-col sm:w-4/6">
                <div className="flex flex-col justify-between p-4">
                  <div className="flex flex-row items-center">
                    <Image src={datas.photo} width={100} height={100} alt="garuda logo" style={{ width: "35%" }} />
                    <div className="flex flex-row items-center justify-start text-sm sm:text-2xl font-bold ps-10 gap-4">
                      <div className="flex">{datas.departure_nationality}</div>
                      <FlightTakeoffIcon style={{ width: "2rem" }} color="disabled" />
                      <div>{datas.arrival_nationality}</div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-10 gap-32">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Code</div>
                      <div className="text-sm">{datas.code_type}</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Class</div>
                      <div className="text-sm">{datas.class_type}</div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 gap-[7.1rem]">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Terminal</div>
                      <div className="text-sm">{datas.terminal}</div>
                    </div>
                    <div className="flex flex-col gap-1"> 
                      <div className="text-sm text-gray-400">Gate</div>
                      <div className="text-sm">{datas.gate}</div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-8">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Departure</div>
                      <div className="text-sm">{datas.departure_time}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/6 flex items-center justify-center border-l-2 border-dashed">
              <canvas className='' style={{ transform: 'rotate(270deg)', width: '17rem'}} id='barcodeCanvas'></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

