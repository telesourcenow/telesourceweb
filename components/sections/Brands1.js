import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Enable grab cursor for smooth scrolling
    grabCursor: true, 

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}


// style={{ background: '#6936f5'}}
export default function Brands1({ cls,style }) {
    return (
        <>
            <div id="brands-1" className={`brands-section division ${cls ? cls : ""}`}>
                <div className="container" >
                    <div className="row">
                        <div className="col text-center">
                            {/* Title */}
                            <h3 className="text-white mb-5">
                                Brands Fueled by Our Expertise
                            </h3>
                            <Swiper {...swiperOptions} className="brands-carousel">

                                {style === 1 &&
                                    <>
                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-1.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-5.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-6.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-3.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-7.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-2.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-4.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-10.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-8.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" width="150px" src="/images/client-9.webp" alt="brand-logo" />
                                        </SwiperSlide>
                                    </>
                                }
                                {style === 2 && <>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-1.png" alt="brand-logo" />
                                    </SwiperSlide>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-2.png" alt="brand-logo" />
                                    </SwiperSlide>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-3.png" alt="brand-logo" />
                                    </SwiperSlide>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-4.png" alt="brand-logo" />
                                    </SwiperSlide>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-5.png" alt="brand-logo" />
                                    </SwiperSlide>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-6.png" alt="brand-logo" />
                                    </SwiperSlide>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-7.png" alt="brand-logo" />
                                    </SwiperSlide>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-8.png" alt="brand-logo" />
                                    </SwiperSlide>
                                    <SwiperSlide className="brand-logo">
                                        <img className="img-fluid" src="images/brand-5.png" alt="brand-logo" />
                                    </SwiperSlide>

                                </>
                                }
                            </Swiper>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </div>

        </>
    )
}
