
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})
export default function Reviews4({ cls }) {
    return (
        <>
            <section id="reviews-4" className={`reviews-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* TESTIMONIAL STATISTIC */}
                        <div className="col-lg-6">
                            <div className="small-statistic pc-25">
                                <div className="row">
                                    {/* STATISTIC BLOCK #1 */}
                                    <div className="col-sm-6 col-md-3 col-lg-6">
                                        <div className="statistic-block wow fadeInUp" data-wow-delay="0.4s">
                                            <h5 className="statistic-number primary-color"><span className="count-element"><CounterUp count={735} time={1} /></span>%</h5>
                                            <p>increase in SEO traffic from benchmark month</p>
                                        </div>
                                    </div>
                                    {/* STATISTIC BLOCK #2 */}
                                    <div className="col-sm-6 col-md-3 col-lg-6">
                                        <div className="statistic-block wow fadeInUp" data-wow-delay="0.6s">
                                            <h5 className="statistic-number primary-color"><span className="count-element"><CounterUp count={363} time={1} /></span>%</h5>
                                            <p>increase in phone calls from search engines</p>
                                        </div>
                                    </div>
                                    {/* STATISTIC BLOCK #3 */}
                                    <div className="col-sm-6 col-md-3 col-lg-6">
                                        <div className="statistic-block wow fadeInUp" data-wow-delay="0.8s">
                                            <h5 className="statistic-number primary-color"><span className="count-element"><CounterUp count={528} time={1} /></span>%</h5>
                                            <p>increase in organic visitors in 6 months</p>
                                        </div>
                                    </div>
                                    {/* STATISTIC BLOCK #4 */}
                                    <div className="col-sm-6 col-md-3 col-lg-6">
                                        <div className="statistic-block wow fadeInUp" data-wow-delay="1s">
                                            <h5 className="statistic-number primary-color"><span className="count-element"><CounterUp count={436} time={1} /></span>%</h5>
                                            <p>increase in first page rankings in the 6 months</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END TESTIMONIAL STATISTIC */}
                        {/* TESTIMONIAL TEXT */}
                        <div className="col-lg-6">
                            <div className="review-4 wow fadeInUp" data-wow-delay="0.4s">
                                {/* Quote Icon */}
                                <div className="quote-ico"><img src="/images/left-quote.png" alt="quote-image" /></div>
                                {/* Testimonial Text */}
                                <p>"<span>They're communicative, honest, and reliably deliver tangible results.</span> Etiam sapien
                                    sem at sagittis congue an augue massa varius egestas and suscipit magna a tempus undo aliquet
                                    a ligula magna suscipit vitae and rutrum luctus a risus ultrice luctus enim ipsum blandit porta
                                    justo integer mollislorem primis in orci"
                                </p>
                                {/* Testimonial Author */}
                                <div className="review-4-author">
                                    <h5 className="h5-xs">Sean McMarthy, CEO</h5>
                                    <span className="lightgrey-color">Company Name</span>
                                </div>
                            </div>	{/* END TESTIMONIAL TEXT */}
                        </div>
                    </div>	   {/* End row */}
                </div>	    {/* End container */}
            </section>

        </>
    )
}
