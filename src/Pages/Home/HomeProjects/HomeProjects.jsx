import project1 from "../../../assets/projectsPic/project1.png";
import project2 from "../../../assets/projectsPic/project2.png";
import project3 from "../../../assets/projectsPic/project3.png";
import project12 from "../../../assets/projectsPic/project12.png";
import project13 from "../../../assets/projectsPic/project13.png";
import project14 from "../../../assets/projectsPic/project14.png";
import project15 from "../../../assets/projectsPic/project15.png";
import project22 from "../../../assets/projectsPic/project22.png";
import project23 from "../../../assets/projectsPic/project23.png";
import project24 from "../../../assets/projectsPic/project24.png";
import project32 from "../../../assets/projectsPic/project32.png";
import project33 from "../../../assets/projectsPic/project33.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "../HomeProjects/HomeProject.css"
import { Link } from "react-router-dom";

const HomeProjects = () => {
  return (
    <>
      
      <div className="lg:ml-24">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <progress
          className="progress w-[100px] prog"
          value="20"
          max="100"
        ></progress>
      </div>

      <div className="mt-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={project1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={project12} alt="" /></SwiperSlide>
        <SwiperSlide><img src={project13} alt="" /></SwiperSlide>
        <SwiperSlide><img src={project14} alt="" /></SwiperSlide>
        <SwiperSlide><img src={project15} alt="" /></SwiperSlide>
        <SwiperSlide><img src={project22} alt="" /></SwiperSlide>
        <SwiperSlide><img src={project23} alt="" /></SwiperSlide>
        <SwiperSlide><img src={project24} alt="" /></SwiperSlide>
        <SwiperSlide><img src={project32} alt="" /></SwiperSlide>
        <SwiperSlide><img src={project33} alt="" /></SwiperSlide>
      </Swiper>
      </div>

     <Link to='/projects'>
     <div className="mt-6 flex justify-center items-center">
      <button className="heroBtn flex justify-center items-center gap-2 rounded-md text-white">Project Details</button>
      </div>
     </Link>
    </>
  );
};

export default HomeProjects;
