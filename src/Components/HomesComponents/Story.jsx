

import { Swiper, SwiperSlide, } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "../../Css/story.css"

import { FreeMode, Pagination } from 'swiper/modules';
const Story = () => {
    return (
        <div className='h-[60vh]'>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay:2500,
            disableOnInteraction:false
        }}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slider11'>
            
        </SwiperSlide>
        <SwiperSlide className='slider12'>
            
        </SwiperSlide>
        <SwiperSlide className='slider13'>
            
        </SwiperSlide>
        <SwiperSlide className='slider14'>
            
        </SwiperSlide>
        <SwiperSlide className='slider15'>
            
        </SwiperSlide>
        <SwiperSlide className='slider16'>
            
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Story;