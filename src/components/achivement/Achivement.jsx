import React from "react";
import "./Achivement.css";
import C1 from "../../assets/certificate1.jpg";
import C2 from "../../assets/certificate2.jpg";
import C3 from "../../assets/certificate3.jpg";
import C4 from "../../assets/certificate4.jpg";
import C5 from "../../assets/certificate5.jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Achivement() {
  return (
    <section id="achivement">
      <h5>Certificate and Awards</h5>
      <h2>Achivement</h2>
      <Swiper className="container achivement__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >
        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C1} alt="" />
          </div>
          <h5 className="certificate__name">Front-End Devlopment - HTML.</h5>
          <small className="organisation__name"> Great Learning Academy</small>
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C2} alt="" />
          </div>
          <h5 className="certificate__name">
            Introduction To Front End Devlopment.
          </h5>
          <small className="organisation__name">Simplilearn Academy</small>
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C3} alt="" />
          </div>
          <h5 className="certificate__name">
            UI/UX Design.
          </h5>
          <small className="organisation__name">Great Learning Academy</small>
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C5} alt="" />
          </div>
          <h5 className="certificate__name">
            React JS for Beginners.
          </h5>
          <small className="organisation__name">Simplilearn Academy</small>
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C4} alt="" />
          </div>
          <h5 className="certificate__name">
            React JS.
          </h5>
          <small className="organisation__name">Great Learning Academy</small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Achivement;
