import Link from "next/link"


export default function Hero8({ cls }) {
    return (
        <>
            <section id="hero-8" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row">
                        {/* HERO TEXT */}
                        <div className="col-xl-10 offset-xl-1">
                            <div className="hero-txt white-color text-center">
                                {/* Small Title */}
                                <h4>welcome To Our Company</h4>
                                {/* Title */}
                                <h2>Improve Your Search Ratings with Metreex</h2>
                                {/* HERO FORM */}
                                <div className="form-holder text-center">
                                    <form name="seoForm" className="row seo-form">
                                        {/* Hero Form Input */}
                                        <div id="input-email" className="col-lg-4">
                                            <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                                        </div>
                                        {/* Hero Form Input */}
                                        <div id="input-url" className="col-lg-5">
                                            <input type="url" name="url" className="form-control url" placeholder="Your Website*" />
                                        </div>
                                        {/* Hero Form Button */}
                                        <div className="col-lg-3 form-btn">
                                            <button type="submit" className="btn btn-primary tra-white-hover submit">Start Now</button>
                                        </div>
                                        {/* Hero Form Message */}
                                        <div className="col-lg-12 seo-form-msg"><span className="loading" /></div>
                                    </form>
                                </div>
                                {/* HERO LINKS */}
                                <div className="hero-links">
                                    <span>No credit card required</span>
                                    <span>* <Link href="#">See FAQ</Link> for more details</span>
                                    <span><Link href="#">Privacy Policy</Link></span>
                                </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
                {/* HERO WAVES */}
                <div className="hero-waves">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                        </g>
                    </svg>
                </div> {/* END HERO WAVES */}
            </section>

        </>
    )
}
