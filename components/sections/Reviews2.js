
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
export default function Reviews2({ cls }) {
    return (
        <>
            <div id="reviews-2" className={`bg-purple bg-map wide-90 reviews-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 testimonials text-center">
                            {/* TESTIMONIALS CONTENT */}
                            <div className="flexslider">
                                <Swiper {...swiperOptions} className="slides" tag="ul">
                                    {/* TESTIMONIAL #1 */}
                                    <SwiperSlide className="review-2">
                                        {/* Testimonial Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid" src="/images/review-author-1.jpg" alt="author-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <div className="review-2-txt">
                                            <p>"Etiam sapien sem at sagittis congue an augue massa varius egestas and suscipit magna a
                                                tempus undo aliquet ligula magna suscipit vitae"
                                            </p>
                                        </div>
                                        {/* Testimonial Author */}
                                        <div className="review-2-author">
                                            <h5 className="h5-xs">Sean McMarthy</h5>
                                            <span className="lightgrey-color">Project Manager at Company Name</span>
                                        </div>
                                    </SwiperSlide>
                                    {/* TESTIMONIAL #2 */}
                                    <SwiperSlide className="review-2">
                                        {/* Testimonial Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid" src="/images/review-author-2.jpg" alt="author-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <div className="review-2-txt">
                                            <p>"At sagittis congue augue egestas magna ipsum vitae purus ipsum primis in cubilia
                                                laoreet a luctus and donec diam ociis ultrice ligula"
                                            </p>
                                        </div>
                                        {/* Testimonial Author */}
                                        <div className="review-2-author">
                                            <h5 className="h5-xs">Evelyn Martinez</h5>
                                            <span className="lightgrey-color">Director of Search at Company Name</span>
                                        </div>
                                    </SwiperSlide>
                                    {/* TESTIMONIAL #3 */}
                                    <SwiperSlide className="review-2">
                                        {/* Testimonial Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid" src="/images/review-author-3.jpg" alt="author-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <div className="review-2-txt">
                                            <p>"Mauris donec ociis magnis sapien etiam sapien congue augue egestas et ultrice
                                                vitae purus diam integer ligula an egestas magna suscipit"
                                            </p>
                                        </div>
                                        {/* Testimonial Author */}
                                        <div className="review-2-author">
                                            <h5 className="h5-xs">Joel Peterson</h5>
                                            <span className="lightgrey-color">Solutions Architect at Company Name</span>
                                        </div>
                                    </SwiperSlide>
                                    {/* TESTIMONIAL #4 */}
                                    <SwiperSlide className="review-2">
                                        {/* Testimonial Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid" src="/images/review-author-4.jpg" alt="author-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <div className="review-2-txt">
                                            <p>"Etiam sapien sem at sagittis congue an augue massa varius egestas and suscipit magna a
                                                tempus undo aliquet ligula magna suscipit vitae"
                                            </p>
                                        </div>
                                        {/* Testimonial Author */}
                                        <div className="review-2-author">
                                            <h5 className="h5-xs">Michael Deal</h5>
                                            <span className="lightgrey-color">CEO  Founder of Company Name</span>
                                        </div>
                                    </SwiperSlide>
                                    {/* TESTIMONIAL #5 */}
                                    <SwiperSlide className="review-2">
                                        {/* Testimonial Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid" src="/images/review-author-5.jpg" alt="author-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <div className="review-2-txt">
                                            <p>"An augue in cubilia laoreet magna and suscipit egestas magna ipsum at purus ipsum
                                                primis in augue ultrice ligula and egestas gestas"
                                            </p>
                                        </div>
                                        {/* Testimonial Author */}
                                        <div className="review-2-author">
                                            <h5 className="h5-xs">Mark Paterson</h5>
                                            <span className="lightgrey-color">Former Head of Company Name</span>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>	{/* END TESTIMONIALS CONTENT */}
                        </div>
                    </div>  {/* End row */}
                </div>  {/* End container */}
            </div>

        </>
    )
}
