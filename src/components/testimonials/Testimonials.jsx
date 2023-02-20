import React from 'react'
import './testimonials.css'
import AVT from '../../assets/avatar.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
              <img src={AVT} alt="AVATAR" />
          </div>
          <h5 className='client_name'>Cha Eun Woo</h5>
              <small className='client_review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, rem, a perspiciatis repellendus inventore obcaecati quidem quas eius laboriosam ea ipsam nostrum cum labore eligendi animi in iure. Illum, totam!
              </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
              <img src={AVT} alt="AVATAR" />
          </div>
          <h5 className='client_name'>Cha Eun Woo</h5>
              <small className='client_review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, rem, a perspiciatis repellendus inventore obcaecati quidem quas eius laboriosam ea ipsam nostrum cum labore eligendi animi in iure. Illum, totam!
              </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
              <img src={AVT} alt="AVATAR" />
          </div>
          <h5 className='client_name'>Cha Eun Woo</h5>
              <small className='client_review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, rem, a perspiciatis repellendus inventore obcaecati quidem quas eius laboriosam ea ipsam nostrum cum labore eligendi animi in iure. Illum, totam!
              </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
              <img src={AVT} alt="AVATAR" />
          </div>
          <h5 className='client_name'>Cha Eun Woo</h5>
              <small className='client_review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, rem, a perspiciatis repellendus inventore obcaecati quidem quas eius laboriosam ea ipsam nostrum cum labore eligendi animi in iure. Illum, totam!
              </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials