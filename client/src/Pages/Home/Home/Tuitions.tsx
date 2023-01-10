import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";


import { SwiperSlide, Swiper } from "swiper/react";

import { SlLocationPin } from "react-icons/sl";

const Tuitions = () => {
    return (
        <div className="py-20 container mx-auto">
            <div className="max-w-[600px] mx-auto mb-10 text-center">
                <h2 className="text-center text-4xl text-text font-bold ">
                    Expert Tutor with Qualifications in Education and Tutoring
                </h2>
                <p className="text-text text-lg text-center mt-6">
                    I am a highly qualified tutor with a background in education and years
                    of experience providing individualized instruction to students of all
                    ages and abilities.
                </p>
            </div>
            {/* available tuition part */}
            <div className="flex justify-between">
                <h2 className="text-4xl font-bold text-text  leading-tight">
                    Available tuition Programme
                </h2>
                <Link
                    className="bg-primary px-4 py-2 font-semibold text-lg text-white rounded"
                    to="/"
                >
                    See All
                </Link>
            </div>

            {/* available tuitions  sliders*/}
            <div className="max-w-[900px] mx-auto  my-20">
                <div className="bg-white hover:bg-shade shadow-lg border-2 hover:border-shade_deep rounded">
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper my-3 hover:bg-shade"
                    >
                        <SwiperSlide className="hover:bg-shade">
                            <div className="bg-transparent text-left w-[90%] mb-3">
                                {/* class card  */}
                                <small className="text-muted">Job ID-14498</small>
                                <p className="">Female Tutor Needed for English Version</p>
                                <div className="flex justify-between py-2">
                                    <p className="text-text text-lg font-medium">
                                        <span className="font-bold text-primary ">Category :</span>{" "}
                                        English Version{" "}
                                    </p>

                                    <p className="text-text text-lg font-medium">
                                        <span className="font-bold text-primary ">Class :</span>{" "}
                                        Eight
                                    </p>

                                    <p className="text-text text-md font-medium">
                                        <span className="font-bold text-primary ">Sellary :</span>{" "}
                                        5000 tk
                                    </p>
                                </div>

                                {/* subjects */}
                                <p>
                                    <b>Subjects :</b> English, Home economics, Islamic Studies,
                                    Social science
                                </p>
                                <b>5 Days/Week </b>

                                {/* other info */}

                                <div className="flex justify-between items-center my-2">
                                    <div className="">
                                       <div className="flex items-center">
                                       <SlLocationPin className="text-2xl mr-2 font-bold"/>  <address className="text-2xl font-semibold">Malibagh, Dhaka </address>
                                       </div>
                                       <small  className="text-text font-bold text-[#aaa]">Post 1 hour ago</small>
                                    </div>
                                    <div >

                                    <Link
                    className="bg-primary px-4 py-2 font-semibold text-lg text-white rounded"
                    to="/"
                >
                    See Details
                </Link>

                                    </div>
                                </div>



                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Tuitions;
