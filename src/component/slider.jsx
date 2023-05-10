import React, { useRef, useState } from "react";
import japan3 from "../../public/assets/japan3.png"
import spain from "../../public/assets/spain.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
    const images = [
        {
            image: japan3,
            total_airlines: "15 Airlines",
            city: "Tokyo",
            nationality: "Japan",
        },
        {
            image: spain,
            total_airlines: "22 Airlines",
            city: "Barcelona",
            nationality: "Spain",
        },
        {
            image: japan3,
            total_airlines: "15 Airlines",
            city: "Tokyo",
            nationality: "Japan",
        },
        {
            image: spain,
            total_airlines: "22 Airlines",
            city: "Barcelona",
            nationality: "Spain",
        },
        {
            image: japan3,
            total_airlines: "15 Airlines",
            city: "Tokyo",
            nationality: "Japan",
        },

    ]

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper carousel"
      >
        
        {images?.map((item, index) => (
        <SwiperSlide key={index} style={{width:'17rem', padding:20}}>
           <div className="flex flex-col text-white" style={{position:'absolute', padding:20, width:'78%'}}>
            <div style={{paddingRight:85}}>
                    <div style={{backgroundColor:'rgba(255, 255, 255, 0.41)', borderRadius:33}} className="font-bold p-2 text-sm text-center">
                    {item.total_airlines}
                    </div>

            </div>

                <div className="flex flex-row justify-between items-center" style={{marginTop:'8rem'}}>
                    <div className="flex flex-col">
                        <div className="text-sm">{item.city},</div>
                        <div className="font-bold text-xl">{item.nationality}</div>
                    </div>
                    <div style={{paddingRight:10}}>
                        <ArrowForwardIosIcon style={{backgroundColor:'rgba(255, 255, 255, 0.41)', width:'1.5rem', height:'1.5rem', padding:2, borderRadius:20}} />
                    </div>
                </div>
           </div>
          <Image className="rounded-xl" src={item.image} alt="photo" />
        </SwiperSlide>

        ))}
        
      </Swiper>
    </>
  );
}
