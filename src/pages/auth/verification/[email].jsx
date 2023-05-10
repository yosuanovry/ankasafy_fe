import Image from "next/image";
import leftLayout from "../../../../public/assets/left-layout.png";
import logoLayout from "../../../../public/assets/logo-layout.png";
import { Poppins } from "next/font/google";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import CircularProgress from '@mui/material/CircularProgress';

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Verification() {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const router = useRouter()
  const getEmail = router.query.email
  
  // const getUser = async () => {
  //   setLoading(true)
  //   await axios.get(`${process.env.NEXT_APP_URL}/users/${getEmail}`)
  //   .then((res) => {
  //     console.log(res.data.data)
  //     setUser(res.data.data);
  //     setLoading(false);
  //   }).catch((err) => {
  //     console.log(err)
  //     setLoading(false);
  //   })
  // }

  // useEffect(() => {
  //   getUser()
  // },[getEmail])

  const verif = async () => {
    setLoading(true)
    await axios.get(`${process.env.NEXT_APP_URL}/auth/verification/${email}/${otp}`)
    .then((res) => {
      console.log(res)
      setLoading(false)
      router.push('/auth/login')
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }

  useEffect(() => {
    setLoading(true)
    axios.get(`${process.env.NEXT_APP_URL}/users/${getEmail}`)
    .then((res) => {
    console.log(res.data.data)
    setUser(res.data.data);
    setLoading(false);
    }).catch((err) => {
    console.log(err)
    setLoading(false)
    });
  },[getEmail])



  

  return (
    <div className={`h-screen flex ${poppins.className}`}>
      <div className="h-auto w-3/6 lg:w-3/6">
          <Image src={leftLayout} alt="logo" className="h-full" />
      </div>
      <div className="flex flex-col justify-center mx-16 sm:mx-20 md:mx-24 lg:mx-28 w-2/6">
        <div className="flex justify-start items-center flex-row gap-2 lg:gap-2 mb-8">
          <Image src={logoLayout} alt="Logo"/>
          <p className="font-bold text-md lg:text-2xl">Ankasa</p>
        </div>
        <div className="flex flex-col my-6">
          <h1 className="font-bold text-lg sm:text-4xl self-center">OTP Verification</h1>
          <div className="flex items-center justify-center mt-4">Please fill the OTP code in the input form</div>
          <div className="flex items-center justify-center mt-4">Here is your OTP code: {loading && <CircularProgress className="ms-4" size={20} />}<span className="font-bold ps-1">{user ? user.otp : <div></div>}</span></div>
          <form>
            <div className="mt-10">
              <input required value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 ps-1 my-2 lg:my-6 text-xs block w-full px-0.5 border-0 border-b-2 border-purple-200 focus:ring-0 focus:border-yellow-400 sm:text-base md:text-lg" type="text" placeholder="Email" />
            </div>

            <div className="mt-10">
              <input required value={otp} onChange={(e) => setOtp(e.target.value)} className="p-2 ps-1 my-2 lg:my-6 text-xs block w-full px-0.5 border-0 border-b-2 border-purple-200 focus:ring-0 focus:border-yellow-400 sm:text-base md:text-lg" type="password" placeholder="OTP" />
            </div>
            
            <span className="flex justify-center items-center mt-10 rounded-lg text-sm sm:text-base md:text-lg py-1 md:py-4 font-semibold" style={{ backgroundColor: "#2395FF", color: "white" }}>
              <button onClick={() => verif()} type="submit" style={{width:455}}>Verify</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Verification;
