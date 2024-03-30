import Link from "next/link"


export default function Hero10({ cls }) {
    return (
        <>
            <section id="hero-10" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row">
                        {/* HERO TEXT */}
                        <div className="col-xl-10 offset-xl-1">
                            <div className="hero-txt text-center white-color">
                                {/* Title */}
                                <h4>Ready To Grow Your Business?</h4>
                                <h3>Get More Leads, More Customers, and More Sales with Metreex.com</h3>
                                {/* Text */}
                                <p>Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus
                                    magna dolor luctus undo magna an dolor
                                </p>
                                {/* Button */}
                                <Link href="/about-us" className="btn btn-md btn-primary tra-white-hover">Discover More</Link>
                            </div>
                        </div>	{/* END HERO TEXT */}
                    </div>    {/* End row */}
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
