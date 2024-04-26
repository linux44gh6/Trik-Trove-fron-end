import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../Css/Banner.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='h-[100vh]'>
            <Swiper
                spaceBetween={30}

                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className='slider1 flex-col justify-start'>

                 <div className=' space-y-2'>
                 <div>
                  <h1 className='font1 text-white lg:text-7xl text-left font-extrabold'>Honest journy to <br />extraOrdinary places</h1> 
                  </div>
                    <div className='lg:-ms-[480px]'>
                    <button className='btn px-10 rounded-none bg-[#ffffffbc]'>Explore Now</button>
                    </div>
                 </div>

                </SwiperSlide>
                <SwiperSlide className='slider2'>

                <div className=' space-y-2'>
                 <div>
                  <h1 className='font1 text-white lg:text-7xl text-left font-extrabold'>Honest journy to <br />extraOrdinary places</h1> 
                  </div>
                    <div className='lg:-ms-[480px]'>
                    <button className='btn px-10 rounded-none bg-[#ffffffbc]'>Explore Now</button>
                    </div>
                 </div>

                </SwiperSlide>

                   <SwiperSlide className='slider3'>  <div className=' space-y-2'>
                 <div>
                  <h1 className='font1 text-white lg:text-7xl text-left font-extrabold'>Honest journy to <br />extraOrdinary places</h1> 
                  </div>
                    <div className='lg:-ms-[480px]'>
                    <button className='btn px-10 rounded-none bg-[#ffffffbc]'>Explore Now</button>
                    </div>
                 </div>

                </SwiperSlide>

                   <SwiperSlide className='slider4 '>  
                   <div className=' space-y-2 absolute z-10'>
                 <div>
                  <h1 className='font1 text-white lg:text-7xl text-left font-extrabold'>Honest journy to <br />extraOrdinary places</h1> 
                  </div>
                    <div className='lg:-ms-[480px]'>
                    <button className='btn px-10 rounded-none bg-[#ffffffbc]'>Explore Now</button>
                    </div>
                 </div>

                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;