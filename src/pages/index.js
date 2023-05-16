import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '../component/navbar';
import Footer from '@/component/footer';
import japan from '../../public/assets/japan.png'
import japan2 from '../../public/assets/japan 2.png'
import splash from '../../public/assets/splash.png'
import Slider from '@/component/slider';
import paris from "../../public/assets/paris.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className={`min-h-screen items-center ${inter.className}`} style={{backgroundColor:'white'}}>
      <div className='flex flex-row justify-between items-center md:items-start sm:mt-4'>
        <div className='flex flex-col px-10 md:px-0 md:ps-40 md:pt-20'>
          <div className='text-2xl md:text-5xl font-bold tracking-wider' style={{color:'#414141'}}>Find your <span style={{color:'#2395FF'}}>Flight</span></div>
          <div className='text-md md:text-lg sm:pt-4' style={{color:'#979797'}}>and explore the world with us</div>
        </div>
        <div>
        <Image
          src={japan2}
          alt="japan"
          className={`rounded-2xl ${style.image1}`}
        />
        </div>
      </div>
      <div className={`flex flex-row items-end ${style.imageRow2}`}>
        <Image
        src={japan}
        alt="japan"
        className={`rounded-2xl ${style.image2}`}
      />
      <div className='w-full flex justify-center'>
      <Image
        src={splash}
        alt="japan"
        className={`rounded-2xl ${style.image3}`}
      />
      </div>
      </div>
      <div className='flex flex-col px-10 md:px-24 mt-10 md:mt-32'>
        <div className='tracking-widest text-sm' style={{color:'#2395FF'}}>TRENDING</div>
        <div className='flex flex-row justify-between mt-1'>
          <div className='font-bold text-xl' >Trending destinations</div>
          <div className='font-bold' style={{color:'#2395FF'}}>View all</div>
        </div>
        <div className='mt-10'>
          <Slider/>
        </div>
          <div className='h-full w-full rounded-2xl mt-10 md:mt-28 py-10 text-white' style={{backgroundColor:'rgba(35, 149, 255, 1)'}}>
        <div className='flex flex-col items-center'>
          <div className='tracking-widest'>Top 10</div>
          <div className='mt-2 font-bold text-2xl'>Top 10 destinations</div>
          <div className='flex flex-row mt-10 md:gap-12 overflow-hidden'> 
            <div className='flex flex-col items-center' style={{width:'8rem'}}>
              <div style={{borderWidth:5, borderRadius:100, borderColor:'white'}}>
              <Image src={paris} alt="photo" style={{width:'100%', borderRadius:100, borderWidth:5, borderColor:'rgba(35, 149, 255, 1)'}}/>
              </div>
              <div className='mt-6'>PARIS</div>
            </div>
            <div className='flex flex-col items-center' style={{width:'8rem'}}>
              <div style={{borderWidth:5, borderRadius:100, borderColor:'white'}}>
              <Image src={paris} alt="photo" style={{width:'100%', borderRadius:100, borderWidth:5, borderColor:'rgba(35, 149, 255, 1)'}}/>
              </div>
              <div className='mt-6'>PARIS</div>
            </div>
            <div className='flex flex-col items-center' style={{width:'8rem'}}>
              <div style={{borderWidth:5, borderRadius:100, borderColor:'white'}}>
              <Image src={paris} alt="photo" style={{width:'100%', borderRadius:100, borderWidth:5, borderColor:'rgba(35, 149, 255, 1)'}}/>
              </div>
              <div className='mt-6'>PARIS</div>
            </div>
            <div className='flex flex-col items-center' style={{width:'8rem'}}>
              <div style={{borderWidth:5, borderRadius:100, borderColor:'white'}}>
              <Image src={paris} alt="photo" style={{width:'100%', borderRadius:100, borderWidth:5, borderColor:'rgba(35, 149, 255, 1)'}}/>
              </div>
              <div className='mt-6'>PARIS</div>
            </div>
            <div className='flex flex-col items-center' style={{width:'8rem'}}>
              <div style={{borderWidth:5, borderRadius:100, borderColor:'white'}}>
              <Image src={paris} alt="photo" style={{width:'100%', borderRadius:100, borderWidth:5, borderColor:'rgba(35, 149, 255, 1)'}}/>
              </div>
              <div className='mt-6'>PARIS</div>
            </div>
          </div>
          <div className='flex flex-row mt-16 gap-10'>
            <div className='border-2 px-6 py-3 rounded-xl'>
            <ArrowForwardIosIcon style={{rotate:('180deg')}}/>
            </div>
            <div className='border-2 px-6 py-3 rounded-xl bg-white'>
            <ArrowForwardIosIcon color="primary"/>
            </div>
          </div>
          </div>
        </div>
      </div>
<div className='mt-10'>
      <Footer/>

</div>
    </main>
    </>
  )
}
