import Link from "next/link"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
}

export default function Hero6({ cls }) {
    return (
        <>
            <section id="hero-6" className="hero-section division">
                {/* SLIDER */}
                <div className="slider blue-nav">
                    <Swiper {...swiperOptions} className="slides" tag="ul">
                        {/* SLIDE #1 */}
                        <SwiperSlide tag="li" id="slide-1">
                            {/* Background Image */}
                            <img src="/images/slider/slide-1.jpg" alt="slide-background" style={{ backgroundImage: "url(/images/slider/slide-1.jpg)" }} />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center center-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="caption-txt white-color">
                                                {/* Title */}
                                                <h2>Get your website to the top of search engines</h2>
                                                {/* Text */}
                                                <p>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis
                                                    placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor
                                                </p>
                                                {/* Button */}
                                                <Link href="/about-us" className="btn btn-md btn-primary tra-white-hover">Discover More</Link>
                                            </div>
                                        </div>
                                    </div>  {/* End row */}
                                </div>  {/* End container */}
                            </div>	{/* End Image Caption */}
                        </SwiperSlide>	{/* END SLIDE #1 */}
                        {/* SLIDE #2 */}
                        <SwiperSlide tag="li" id="slide-2">
                            {/* Background Image */}
                            <img src="/images/slider/slide-1.jpg" alt="slide-background" style={{ backgroundImage: "url(/images/slider/slide-1.jpg)" }} />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center center-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="caption-txt white-color">
                                                {/* Title */}
                                                <h2>Find the best solutions for you in seconds</h2>
                                                {/* Text */}
                                                <p>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis
                                                    placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor
                                                </p>
                                                {/* Button */}
                                                <a href="/pricing" className="btn btn-md btn-primary tra-white-hover">Discover More</a>
                                            </div>
                                        </div>
                                    </div>  {/* End row */}
                                </div>  {/* End container */}
                            </div>	{/* End Image Caption */}
                        </SwiperSlide>	{/* END SLIDE #2 */}
                        {/* SLIDE #3 */}
                        <SwiperSlide tag="li" id="slide-3">
                            {/* Background Image */}
                            <img src="/images/slider/slide-1.jpg" alt="slide-background" style={{ backgroundImage: "url(/images/slider/slide-1.jpg)" }} />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center center-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="caption-txt white-color">
                                                {/* Title */}
                                                <h2>A Complete Range Of SEO Marketing Services</h2>
                                                {/* Text */}
                                                <p>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis
                                                    placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor
                                                </p>
                                                {/* Button */}
                                                <a href="/services" className="btn btn-md btn-primary tra-white-hover">Discover More</a>
                                            </div>
                                        </div>
                                    </div>  {/* End row */}
                                </div>  {/* End container */}
                            </div>	{/* End Image Caption */}
                        </SwiperSlide>	{/* END SLIDE #3 */}
                    </Swiper>
                </div>	{/* END SLIDER */}
            </section>

        </>
    )
}
