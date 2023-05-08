import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { Poppins } from "next/font/google";
import Image from "next/image";
import paypal from "../../../../public/assets/paypal.png";
import mastercard from "../../../../public/assets/mastercard.png";
import stripe from "../../../../public/assets/stripe.png";
import visa from "../../../../public/assets/visa.jpg";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import {useState, useEffect} from 'react';
import axios from "axios";

import { usePaymentInputs, PaymentInputsWrapper } from "react-payment-inputs";
import images from "react-payment-inputs/images";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Payment() {
  const { wrapperProps, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);
  const [is_paid, setIs_Paid] = useState(2)
  const [datas, setDatas] = useState()

  const router = useRouter();
  const id = router.query.id;
  const url = "http://localhost:4000";

  useEffect(() => {
    setLoading(true)
    axios.get(`${url}/bookings/detail/${id}`, {
      headers: {
        "Authorization": `Bearer ${cookies.token}`
      }
    }).then((res) => {
    console.log(res.data.data)
    setDatas(res.data.data);
    setLoading(false);
    });
  },[id, cookies.token])

  const updateIsPaid = async () => {
    let data = {
      is_paid
    }
    await axios.put(`${url}/bookings/is_paid/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies.token}`
      }
    }).then((res) => {
      console.log(res)
      router.push("/profile/mybooking")
    }).catch((err) => {
      console.log(err)
    })
  } 
  
  const billedMonth = (data) => {
    let disc = data * 1/5
    let sum = (data - disc) / 12
    return sum.toFixed(2)
  }

  const totalPrice = (data) => {
    let vat = data * 1/5
    let sum = data - vat - 2.00
    return sum.toFixed(2)
  }

  return (
    <>
      <Navbar />
      <div className={`flex w-full ${poppins.className}`} style={{ backgroundColor: "#2395FF", height: 600 }}>
        <div className={`container mx-60 my-20 bg-white`}>
          <div className="flex flex-row h-full px-20 gap-4 my-16">
            <div className="flex flex-col w-3/6">
              <div className="text-sm">Payment Method</div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between p-4 rounded-t-lg mt-2" style={{ backgroundColor: "#F5F6FA" }}>
                  <div className="text-sm">Paypal</div>
                  <Image src={paypal} alt="credit card" style={{ width: "1.5rem" }} />
                </div>
                <div className="flex flex-row justify-between p-4 rounded-b-lg" style={{ backgroundColor: "#F5F6FA" }}>
                  <div className="text-sm">Credit Card</div>
                  <div className="flex flex-row">
                    <Image src={mastercard} alt="credit card" style={{ width: "1.5rem" }} />
                    <Image src={visa} alt="credit card" style={{ width: "1.5rem" }} />
                    <Image src={stripe} alt="credit card" style={{ width: "1.5rem" }} />
                    <Image src={mastercard} alt="credit card" style={{ width: "1.5rem" }} />
                  </div>
                </div>

                <div className="mt-5 ml-1">
                  <label for="payment-inputs">Card Number</label>
                  <PaymentInputsWrapper id="payment-inputs" {...wrapperProps}>
                    <svg {...getCardImageProps({ images })} />
                    <input {...getCardNumberProps()} />
                    <input {...getExpiryDateProps()} />
                    <input {...getCVCProps()} />
                  </PaymentInputsWrapper>
                </div>

                <div className="flex text-xs items-center mt-5 gap-1" style={{ color: "#6B6B6B" }}>
                  <LockIcon className="text-xs"/>
                  <h3 className="font-medium">Your transaction is secured with ssl certificate</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/6">
            <div className="text-sm">Summary</div>
            {datas?.map((item,index) => (
              <div key={index} className="flex flex-col font-bold">
              
              <div className="flex flex-row text-xs justify-between items-center p-4 border-b-2 mt-2">
                  <div className="flex flex-col">
                <div>Pro &#40;Billed Monthly&#41;</div>
                  <div className="underline text-sky-500">Save 20% with annual billing</div>
                  </div>
                <div className="font-bold text-base">${billedMonth(item.total_price)}<span className="text-xs"> /Month</span></div>
              </div>
              <div className="flex flex-col text-xs items-start p-4 border-b-2">
                  <div className="flex flex-row w-full justify-between">
                <div className="flex">Refferal bonuses</div>
                  <div className="flex">-$2.00</div>
                  </div>
                  <div className="flex flex-row w-full justify-between" >
                <div>Vat</div>
                  <div className="">-20%</div>
                  </div>
              </div>

              <div className="flex flex-col text-xs items-start p-4">
                  <div className="flex flex-row w-full justify-between">
                <div className="flex">Today you pay &#40;USD&#41;</div>
                  <div className="flex">$0</div>
                  </div>
                  <div className="flex flex-row w-full justify-between" >
                <div>After 30 days ${totalPrice(item.total_price)}</div>
                  </div>
              </div>

              <div className="flex flex-col items-center justify-center my-2">
              <button onClick={updateIsPaid} className="text-xs sm:text-sm font-light bg-blue-500 p-1 rounded-lg text-white ms-1 sm:py-2 sm:px-10 shadow-md shadow-blue-500/50 w-full flex items-center justify-center">Check out</button>
              <div className="text-xs underline text-sky-500 my-2">Have a promo code?</div>
            </div>

            </div>
            ))}

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Payment;
