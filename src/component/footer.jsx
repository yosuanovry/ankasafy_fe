import { Poppins } from "next/font/google";
import Image from "next/image";
import logoLayout from "../../public/assets/logo-layout.png";
import appstore from "../../public/assets/appstore.png"
import playstore from "../../public/assets/playstore.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Footer() {
  return (
    <div className={`flex w-full items-center justify-center ${poppins.className}`} style={{backgroundColor: "white" }}>
      <div className="flex" style={{ height: 300, backgroundColor: "white" }}>
        <div className="flex flex-col justify-center mx-6 sm:mx-0">
          <div className="flex flex-row justify-between sm:justify-between items-start gap-4 sm:gap-10" style={{marginTop:100}}>
            <div className="flex flex-col w-2/6 sm:w-2/6 gap-4">
              <div className="flex flex-row items-center gap-1 sm:gap-2">
                <Image className="sm:hidden" src={logoLayout} alt="Logo" style={{width:'2.5rem'}}/>
                <p className="font-bold text-md lg:text-2xl">Ankasa</p>
              </div>
              <div className="text-xs sm:text-sm">Find your Flight and explore the world with us. We will take care of the rest</div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
                <div className="text-xs font-semibold sm:text-sm">Features</div>
                <div className="text-xs sm:text-sm">Find Ticket</div>
                <div className="text-xs sm:text-sm">My Booking</div>
                <div className="text-xs sm:text-sm">Chat</div>
                <div className="text-xs sm:text-sm">Notification</div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
                <div className="text-xs font-semibold sm:text-sm">Download Angkasa App</div>
                <Image src={appstore} alt="appstore logo"/>
                <Image src={playstore} alt="playstore logo"/>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
                <div className="text-xs font-semibold sm:text-sm">Follow us</div>
                <div className="flex flex-row">
                    <FacebookIcon style={{width:'2rem'}}/>
                    <TwitterIcon style={{width:'2rem'}}/>
                    <InstagramIcon style={{width:'2rem'}}/>
                    <YouTubeIcon style={{width:'2rem'}}/>
                </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between text-gray-600" style={{paddingTop:35, paddingBottom:20}}>
            <div className="text-xs sm:text-sm">&#169; Ankasa. All rights reserved</div>
            <div className="flex flex-row items-center">
            <LocationOnOutlinedIcon style={{width:'2rem'}}/>
            <div className="text-xs sm:text-sm">Jakarta, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
