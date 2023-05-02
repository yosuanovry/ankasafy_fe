import React, {useEffect} from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import garudaind from "../../../public/assets/garudaind.png";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import generateBarcode from '../../component/barcode'

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function BookTicket() {

    useEffect(() => {
        generateBarcode('barcodeCanvas', '1234 5678 90AS 6543 21CV')
    },[])

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
                    <Image src={garudaind} alt="garuda logo" style={{ width: "35%" }} />
                    <div className="flex flex-row items-center justify-start text-sm sm:text-2xl font-bold ps-10 gap-4">
                      <div className="flex">IDN</div>
                      <FlightTakeoffIcon style={{ width: "2rem" }} color="disabled" />
                      <div>JPN</div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-10 gap-32">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Code</div>
                      <div className="text-sm">AB-221</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Class</div>
                      <div className="text-sm">Economy</div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 gap-[7.1rem]">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Terminal</div>
                      <div className="text-sm">A</div>
                    </div>
                    <div className="flex flex-col gap-1"> 
                      <div className="text-sm text-gray-400">Gate</div>
                      <div className="text-sm">221</div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-8">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-400">Departure</div>
                      <div className="text-sm">Monday, 20 July ‘20 - 12:33</div>
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

export default BookTicket;
