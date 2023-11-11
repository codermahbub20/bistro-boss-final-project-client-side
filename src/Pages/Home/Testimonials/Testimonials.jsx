import { useEffect, useState } from "react";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import quote from '../../../assets/icon/quote-left 1.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="md:mx-20 md:my-20">
            <Sectiontitle heading="testimonials" subHeading="What Your Client Say">

            </Sectiontitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div className="">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="text-center flex flex-col items-center px-10 md:px-20 md:space-y-10">
                                <Rating className="text-[#CD9003]"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img src={quote} alt="" />
                                <p>{review.details}</p>
                                <h1 className="text-4xl text-[#CD9003]">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonials;