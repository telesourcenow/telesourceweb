import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    // spaceBetween: 30,
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
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}


export default function Reviews3({ cls, subtitle, title }) {
    return (
        <>
            <section id="reviews-3" className={`bg-04 wide-100 reviews-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Section SubTitle */}
                            <span className="section-subtitle bluestone-color">{subtitle ? subtitle : "Trusted By The Experts"}</span>
                            {/* Title 	*/}
                             <h3 className="h3-lg">{title ? title : "Reviews From Our Customers"}</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div>
                    {/* TESTIMONIALS CONTENT */}
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <Swiper {...swiperOptions} className="reviews-holder">
                                {/* TESTIMONIAL #1 */}
                                <SwiperSlide>

                                    <div className="review-3">
                                        {/* Quote Icon */}
                                        <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                        {/* Testimonial Text */}
                                        <p>Etiam sapien sem at sagittis congue an augue massa varius egestas and suscipit magna
                                            and
                                            tempus and aliquet porta vitae purus congue a cursus magna cubilia augue vitae
                                            laoreet
                                        </p>
                                        {/* Author Data */}
                                        <div className="review-3-author d-flex align-items-center">
                                            {/* Author Avatar */}
                                            <div className="author-avatar">
                                                <img className="img-fluid" src="/images/review-author-1.jpg" alt="review-author-avatar" />
                                            </div>
                                            {/* Testimonial Author */}
                                            <div className="review-author">
                                                <h5 className="h5-xs">Sean McMarthy</h5>
                                                <span>Owner, <Link href="#">Company Name</Link></span>
                                            </div>
                                        </div>
                                    </div> {/*END  TESTIMONIAL #1 */}
                                    {/* TESTIMONIAL #2 */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="review-3">
                                        {/* Quote Icon */}
                                        <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                        {/* Testimonial Text */}
                                        <p>At sagittis congue augue egestas rhoncus in magna ipsum vitae purus ipsum primis
                                            cubilia
                                            laoreet augue egestas luctus and donec diam ociis ultrice ligula magna suscipit
                                        </p>
                                        {/* Author Data */}
                                        <div className="review-3-author d-flex align-items-center">
                                            {/* Author Avatar */}
                                            <div className="author-avatar">
                                                <img className="img-fluid" src="/images/review-author-2.jpg" alt="review-author-avatar" />
                                            </div>
                                            {/* Testimonial Author */}
                                            <div className="review-author">
                                                <h5 className="h5-xs">Evelyn Martinez</h5>
                                                <span>Owner, <Link href="#">Company Name</Link></span>
                                            </div>
                                        </div>
                                    </div> </SwiperSlide>{/* END TESTIMONIAL #2 */}
                                {/* TESTIMONIAL #3 */}
                                <SwiperSlide>
                                    <div className="review-3">
                                        {/* Quote Icon */}
                                        <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                        {/* Testimonial Text */}
                                        <p>Mauris donec ociis magnis sapien etiam sapien congue and augue egestas et ultrice
                                            vitae undo
                                            purus and diam integer congue at magna ligula an egestas magna suscipit lectus
                                        </p>
                                        {/* Author Data */}
                                        <div className="review-3-author d-flex align-items-center">
                                            {/* Author Avatar */}
                                            <div className="author-avatar">
                                                <img className="img-fluid" src="/images/review-author-3.jpg" alt="review-author-avatar" />
                                            </div>
                                            {/* Testimonial Author */}
                                            <div className="review-author">
                                                <h5 className="h5-xs">Joel Peterson</h5>
                                                <span>Owner, <Link href="#">Company Name</Link></span>
                                            </div>
                                        </div>
                                    </div> </SwiperSlide>{/* END TESTIMONIAL #3 */}
                                {/* TESTIMONIAL #4 */}
                                <SwiperSlide>
                                    <div className="review-3">
                                        {/* Quote Icon */}
                                        <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                        {/* Testimonial Text */}
                                        <p>Mauris donec ociis magnis sapien etiam sapien congue undo augue pretium purus ligula
                                            lectus aenean
                                            magna and mauris lectus undo laoreet tempor egestas magna vitae laoreet augue
                                        </p>
                                        {/* Author Data */}
                                        <div className="review-3-author d-flex align-items-center">
                                            {/* Author Avatar */}
                                            <div className="author-avatar">
                                                <img className="img-fluid" src="/images/review-author-4.jpg" alt="review-author-avatar" />
                                            </div>
                                            {/* Testimonial Author */}
                                            <div className="review-author">
                                                <h5 className="h5-xs">Michael Deal</h5>
                                                <span>Owner, <Link href="#">Company Name</Link></span>
                                            </div>
                                        </div>
                                    </div></SwiperSlide> {/* END TESTIMONIAL #4 */}
                                {/* TESTIMONIAL #5 */}
                                <SwiperSlide>
                                    <div className="review-3">
                                        {/* Quote Icon */}
                                        <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                        {/* Testimonial Text */}
                                        <p>An augue in cubilia laoreet magna suscipit egestas magna ipsum at purus ipsum primis
                                            in augue
                                            ultrice ligula egestas and suscipit lectus gestas integer congue
                                        </p>
                                        {/* Author Data */}
                                        <div className="review-3-author d-flex align-items-center">
                                            {/* Author Avatar */}
                                            <div className="author-avatar">
                                                <img className="img-fluid" src="/images/review-author-5.jpg" alt="review-author-avatar" />
                                            </div>
                                            {/* Testimonial Author */}
                                            <div className="review-author">
                                                <h5 className="h5-xs">Mark Paterson</h5>
                                                <span>Owner, <Link href="#">Company Name</Link></span>
                                            </div>
                                        </div>
                                    </div></SwiperSlide> {/* END TESTIMONIAL #5 */}
                                {/* TESTIMONIAL #6 */}
                                <SwiperSlide>
                                    <div className="review-3">
                                        {/* Quote Icon */}
                                        <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                        {/* Testimonial Text */}
                                        <p>An augue cubilia laoreet undo magna a suscipit egestas magna an ipsum ligula vitae
                                            purus and
                                            ipsum primis in cubilia
                                        </p>
                                        {/* Author Data */}
                                        <div className="review-3-author d-flex align-items-center">
                                            {/* Author Avatar */}
                                            <div className="author-avatar">
                                                <img className="img-fluid" src="/images/review-author-6.jpg" alt="review-author-avatar" />
                                            </div>
                                            {/* Testimonial Author */}
                                            <div className="review-author">
                                                <h5 className="h5-xs">Mark Hodges</h5>
                                                <span>Owner, <Link href="#">Company Name</Link></span>
                                            </div>
                                        </div>
                                    </div> </SwiperSlide>{/* END TESTIMONIAL #6 */}
                                {/* TESTIMONIAL #7 */}
                                <SwiperSlide>
                                    <div className="review-3">
                                        {/* Quote Icon */}
                                        <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                        {/* Testimonial Text */}
                                        <p>Augue egestas volutpat egestas augue purus cubilia laoreet magna suscipit luctus and
                                            dolor blandit
                                            vitae purus diam tempus undo aliquet porta rutrum gestas egestas
                                        </p>
                                        {/* Author Data */}
                                        <div className="review-3-author d-flex align-items-center">
                                            {/* Author Avatar */}
                                            <div className="author-avatar">
                                                <img className="img-fluid" src="/images/review-author-7.jpg" alt="review-author-avatar" />
                                            </div>
                                            {/* Testimonial Author */}
                                            <div className="review-author">
                                                <h5 className="h5-xs">Aaron Wall</h5>
                                                <span>Owner, <Link href="#">Company Name</Link></span>
                                            </div>
                                        </div>
                                    </div></SwiperSlide> {/* END TESTIMONIAL #7 */}
                                {/* TESTIMONIAL #8 */}
                                <SwiperSlide>
                                    <div className="review-3">
                                        {/* Quote Icon */}
                                        <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                        {/* Testimonial Text */}
                                        <p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus and
                                            dolor blandit
                                            vitae purus diam tempus
                                        </p>
                                        {/* Author Data */}
                                        <div className="review-3-author d-flex align-items-center">
                                            {/* Author Avatar */}
                                            <div className="author-avatar">
                                                <img className="img-fluid" src="/images/review-author-8.jpg" alt="review-author-avatar" />
                                            </div>
                                            {/* Testimonial Author */}
                                            <div className="review-author">
                                                <h5 className="h5-xs">Tosha Wisdom</h5>
                                                <span>Owner, <Link href="#">Company Name</Link></span>
                                            </div>
                                        </div>
                                    </div> </SwiperSlide>{/* END TESTIMONIAL #8 */}
                            </Swiper>
                        </div>
                    </div> {/* END TESTIMONIALS CONTENT */}
                </div> {/* End container */}
            </section>

        </>
    )
}
