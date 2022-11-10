import React from 'react'
import NavBar from './NavBar'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { motion } from 'framer-motion';


import 'swiper/css'
import logo from '../assets/logo.jpg'
import logoSmall from '../assets/logo-small.jpg'
import kristen from '../assets/kristen.png'



function Home(props) {





  return (
    <div className='home'>
      <NavBar />
      <div className='main-title'>
        <img src= {logoSmall} className='title-img' />
        <button className='title-btn'>Katie is Hot</button>
      </div>
      <section className='spacer'>
        <motion.div
        initial={{
          opacity: 0,
          x: -100
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 2
        }}

        className='meet-kristen'>
          <div className='meet-img-wrapper'>
          <img className='meet-kristen-img' src={kristen} />
          </div>
          <div className='meet-kristen-text'>
          <h5 className='meet-kristen-h'>Kristen Hatch at your service and the service of her fellow beings</h5>
          </div>
        </motion.div>
      </section>

      <h4>This slider is broken dont worry. It will be something great someday</h4>
    <Swiper
        spaceBetween={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      <SwiperSlide className='slide'><img className='slide-img' src='https://picsum.photos/200' /></SwiperSlide>
      ...
    </Swiper>



    </div>
  )
}

export default Home
