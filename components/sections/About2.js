import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function About2({ cls }) {
    return (
        <>
            <section id="about-2" className={`about-section division ${cls ? cls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* ABOUT TEXT */}
                        <div className="col-md-7 col-lg-6">
                            <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                {/* Title */}
                                <h4 className="h4-xl">We're providing the best SEO services for your website</h4>
                                {/* List */}
                                <ul className="txt-list">
                                    <li>Vitae auctor integer congue magna at pretium blandit porta justo integer. Feugiat a
                                        ligula rutrum luctus primis ultrice
                                    </li>
                                    <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros dolor
                                        auctor ipsum blandit purus vehicula magna luctus tempor quisque
                                    </li>
                                </ul>
                                {/* SMALL STATISTIC */}
                                <div className="small-statistic">
                                    <div className="row">
                                        {/* STATISTIC BLOCK #1 */}
                                        <div className="col-sm-6">
                                            <div className="statistic-block">
                                                <h5 className="statistic-number primary-color"><span className="count-element"><CounterUp count={4379} time={1} /></span></h5>
                                                <p>Websites Improved</p>
                                                <p className="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                                            </div>
                                        </div>
                                        {/* STATISTIC BLOCK #2 */}
                                        <div className="col-sm-6">
                                            <div className="statistic-block">
                                                <h5 className="statistic-number primary-color"><span className="count-element"><CounterUp count={99} time={1} /></span>%</h5>
                                                <p>Customer Satisfaction</p>
                                                <p className="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>	{/* END SMALL STATISTIC */}
                            </div>
                        </div>	  {/* END ABOUT TEXT */}
                        {/* ABOUT IMAGE */}
                        <div className="col-md-5 col-lg-6">
                            <div className="img-block pl-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                <img className="img-fluid" src="/images/image-02.png" alt="about-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
