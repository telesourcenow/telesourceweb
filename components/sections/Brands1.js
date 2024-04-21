import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
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

export default function Brands1({ cls,style }) {
    return (
        <>
            <div id="brands-1" className={`brands-section division ${cls ? cls : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            {/* Title */}
                            <p className="p-lg lightgrey-color">Used by startups, e-stores, web designers, and teams including:
                            </p>
                            <Swiper {...swiperOptions} className="brands-carousel">

                                {style === 1 &&
                                    <>
                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
                                        </SwiperSlide>

                                        <SwiperSlide className="brand-logo">
                                            <img className="img-fluid" src="/images/whatsapp-api.webp" alt="brand-logo" />
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
