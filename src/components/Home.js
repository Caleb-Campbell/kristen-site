import React from 'react'
import NavBar from './NavBar'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css'

import logo from '../assets/logo.jpg'
import logoSmall from '../assets/logo-small.jpg'



function Home(props) {





  return (
    <div className='home'>
      <NavBar />
      <div className='main-title'>
        <img src= {logoSmall} className='title-img' />
        <button className='title-btn'>Katie is Hot</button>
      </div>
      <section className='spacer'></section>

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
