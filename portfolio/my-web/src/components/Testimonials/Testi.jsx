import React from 'react'
import './Testi.css'
import ME from '../../assets/wrench3.jpg'
import TO from '../../assets/wrench1.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

const data = [
  {
    avatar: ME,
    name: 'abc',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, exercitationem amet? Aliquid quia incidunt magnam a rem, facere odit quod numquam vero dicta et facilis hic iusto, vitae sunt praesentium.'
  },
  {
    avatar: TO,
    name: 'def',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, exercitationem amet? Aliquid quia incidunt magnam a rem, facere odit quod numquam vero dicta et facilis hic iusto, vitae sunt praesentium.'
  },
  {
    avatar: TO,
    name: 'def',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, exercitationem amet? Aliquid quia incidunt magnam a rem, facere odit quod numquam vero dicta et facilis hic iusto, vitae sunt praesentium.'
  },
]
const Testi = () => {
  return (
    <section className="#Testimonails para">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
    <Swiper className="container testi_container"
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}>
      {
        data.map(({avatar, name, review}, index) =>{
          return(
            <SwiperSlide key={index} className="testi">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="cleint_review">{review}</small>
            </SwiperSlide>
          )
        }) 
      }
    </Swiper>
    </section>
  )
}

export default Testi



/* 
import React from 'react' 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import ME from '../../assets/wrench3.jpg'
import TO from '../../assets/wrench1.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testi.css'


const data = [
  {
    avatar: ME,
    name: 'abc',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, exercitationem amet? Aliquid quia incidunt magnam a rem, facere odit quod numquam vero dicta et facilis hic iusto, vitae sunt praesentium.'
  },
  {
    avatar: TO,
    name: 'def',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, exercitationem amet? Aliquid quia incidunt magnam a rem, facere odit quod numquam vero dicta et facilis hic iusto, vitae sunt praesentium.'
  },
  {
    avatar: TO,
    name: 'def',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, exercitationem amet? Aliquid quia incidunt magnam a rem, facere odit quod numquam vero dicta et facilis hic iusto, vitae sunt praesentium.'
  },
]
const Testi = () => {
  return (
    <section className="#Testimonails">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
    <Swiper className="container testi_container"
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}>
      {
        data.map(({avatar, name, review}, index) =>{
          return(
            <SwiperSlide key={index} className="testi">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="cleint_review">{review}</small>
            </SwiperSlide>
          )
        }) 
      }
    </Swiper>
    </section>
  )
}

export default Testi
*/