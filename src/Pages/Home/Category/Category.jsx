import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import Sectiontitle from '../../../Component/SectionTitle/Sectiontitle';

const Category = () => {
    return (
        <section>

        <Sectiontitle subHeading={"From 11:00am to 10:00pm"}
            heading = {"Order Online"}>

        </Sectiontitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-3xl uppercase text-center -mt-14 text-white'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className='text-3xl uppercase text-center -mt-14 text-white'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className='text-3xl uppercase text-center -mt-14 text-white'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className='text-3xl uppercase text-center -mt-14 text-white'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h1 className='text-3xl uppercase text-center -mt-14 text-white'>soups</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;

