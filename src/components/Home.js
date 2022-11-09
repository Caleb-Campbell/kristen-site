import React from 'react'
import NavBar from './NavBar'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'



function Home(props) {
  return (
    <div>
      <NavBar />
      <h1>Kristens Wedding Planning</h1>
      <section className='spacer'></section>
      <Swiper
      spaceBetween={0}
      navigation
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
      <SwiperSlide className='slide'>Slide 1</SwiperSlide>
      <SwiperSlide className='slide'>Slide 2</SwiperSlide>
      <SwiperSlide className='slide'>Slide 3</SwiperSlide>
      <SwiperSlide className='slide'>Slide 4</SwiperSlide>
      ...
    </Swiper>



    </div>
  )
}

export default Home
