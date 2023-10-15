import React from 'react'
import './Work.css'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import video1 from '../../assets/img/Video1.mp4'
import video2 from '../../assets/img/Video2.mp4'
import video3 from '../../assets/img/Video3.mp4'
import video4 from '../../assets/img/Video4.mp4'
import video5 from '../../assets/img/Video5.mp4'
import video6 from '../../assets/img/Video6.mp4'
import video7 from '../../assets/img/Video7.mp4'
import video8 from '../../assets/img/Video8.mp4'
import video9 from '../../assets/img/Video9.mp4'
import video10 from '../../assets/img/Video10.mp4'
import logo1 from '../../assets/img/BTBlogo.jpg'
import logo2 from '../../assets/img/VodafoneLogo.png'
import logo3 from '../../assets/img/3DinerLogo.jpg'
import logo4 from '../../assets/img/Twenty20Logo.jpg'
import logo5 from '../../assets/img/CasaDeGelatoLogo.jpg'
import logo6 from '../../assets/img/SultanaLogo.jpg'
import logo7 from '../../assets/img/SeecozLogo.jpg'
import logo8 from '../../assets/img/ChickenWorxLogo.jpg'
import logo9 from '../../assets/img/BobaBearLogo.jpg'
import logo10 from '../../assets/img/BubbleLogo.jpg'

import ListLogo1 from '../../assets/img/madoLogo.jpg'
import ListLogo2 from '../../assets/img/FruitopiaLogo.jpg'
import ListLogo3 from '../../assets/img/PipaLogo.jpg'
import ListLogo4 from '../../assets/img/AmelieLogo.jpg'
import ListLogo5 from '../../assets/img/joesLogo.jpg'
import ListLogo6 from '../../assets/img/bulldogLogo.jpg'
import ListLogo7 from '../../assets/img/uncleTonyLogo.jpg'
import ListLogo8 from '../../assets/img/KaiserLogo.jpg'
import ListLogo9 from '../../assets/img/BurdogzLogo.jpg'
import ListLogo10 from '../../assets/img/DickeysBarbequeLogo.jpg'
import ListLogo11 from '../../assets/img/Man-chowWokLogo.jpg'
import ListLogo12 from '../../assets/img/SaladFiestaLogo.jpg'


// import ReactPlayer from 'react-player'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Work = () => {

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10
  ];
  const ListLogos = [
    ListLogo1, ListLogo2, ListLogo3, ListLogo4, ListLogo5, ListLogo6, ListLogo7, ListLogo8, ListLogo9, ListLogo10, ListLogo11, ListLogo12
  ];
  const videos = [
    video1, video2, video3, video4, video5, video6, video7, video8, video9, video10,
  ];

  return (
    <div className='work-container'>
      <div className='first-sec'>

        <h3>An artist can capture the perfect moment anywhere, in any given situation.</h3>
        <div className='swip-contain'>

          <Swiper
            style={{ borderLeft: '3px solid #0e2337', borderRight: '3px solid #0e2337', borderRadius: '10px', borderBlockEnd: '3px solid #252525', borderBlockStart: '3px solid #252525' }}
            effect={'coverflow'}
            // grabCursor={true}
            centeredSlides={true}
            spaceBetween={8}
            slidesPerView={2}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 0.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
              clickable: true,
            }}
            pagination={{
              clickable: true
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper-slide"
          >

            {videos.map((videoUrl, index) => (
              <div>
                <SwiperSlide key={index}>
                  <div className='vid-Logos-Div'>
                    <img style={{ height: 120, borderRadius: '50%' }} src={logos[index]} alt="" />
                  </div>
                  <video
                    controls
                    controlsList='nofullscreen'
                    type="video/mp4"
                    className='video'
                    style={{ border: '5px solid #0e2337', borderRadius: '10px' }}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
              </div>
            ))}
            <br /><br />
          </Swiper>
            <div class="prev"><button><MdArrowBackIos /></button></div>
            <div class="next"><button><MdArrowForwardIos /></button></div>
        </div>
        <br />

      </div>
      <div className='second-sec'>
        <h1>And More !!</h1>
        <div className='ListLogosDiv'>
          {ListLogos.map((logo, index) => (
            <div key={index}>
              <img src={logo} className='ListLogosImg' alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work