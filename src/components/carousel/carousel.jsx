import styles from "./carousel.module.css" 
import 'swiper/css';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import React, { useEffect } from 'react'
import { Navigation } from "swiper/modules"
import CarouselLeftNav from './carouselLeftNav';
import CarouselRightNav from './carouselRightNav';

const OnDataChange = ({data}) => {
    const swipe = useSwiper()
   useEffect(()=>{
     swipe.slideTo(0,null)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[data])
   return(<></>)
}

const Carousel = ({data,renderComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper 
        style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTochMove
        >
        <OnDataChange />
        <CarouselLeftNav/>
        <CarouselRightNav/>
        {
            data.map((ele)=>(
                <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  )
}

export default Carousel