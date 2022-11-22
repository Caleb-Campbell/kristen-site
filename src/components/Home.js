import React from 'react'
import NavBar from './NavBar'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { motion } from 'framer-motion';


import 'swiper/css'
import logo from '../assets/logo.jpg'
import logoSmall from '../assets/logo-small.jpg'

//components
import GallerySection from './GallerySection';



function Home(props) {





  return (
    <div className='home'>
      <NavBar />
      <div className='main-title'>
        <img src= {logoSmall} className='title-img' />
      </div>
      {/* <GallerySection /> */}
      <section className='spacer'></section>
      <section className='gallery'>

      </section>
      <section className='spacer'></section>
      <section className='about-me'>
      <h2 className='about-h'>About Me</h2>
      <div className='about-wrap'>
        <div className='about-img-wrap'>
          <img className='about-img' />
        </div>
        <div className='about-p-wrap'>
          <p className='about-p'>I'm Kristen Hatch. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>
      </div>
      </section>
      <section className='spacer'></section>
      <section className='portfolio'>

      </section>
      <section className='spacer'></section>
      <section className='client-testimonials'>

      </section>
      

    



    </div>
  )
}

export default Home
