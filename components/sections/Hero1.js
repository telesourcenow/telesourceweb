import Link from "next/link"


export default function Hero1({ cls }) {
    return (
        <>
            <section id="hero-1" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-xl-5">
                            <div className="hero-txt white-color">
                                {/* Title */}
                                <h3>The Next Level Of Communication Platform.</h3>
                                {/* Text */}
                                <p>Empowering Enterprises.</p>
                                {/* Button */}
                                <Link href="/about-us" className="btn btn-md btn-primary tra-white-hover">
                                    About Us
                                </Link>
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-xl-7">
                            <div className="hero-1-img text-center">
                                <img className="img-fluid" src="/images/hero-1-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
                {/* SECTION OVERLAY */}
                <div className="bg-fixed white-overlay-top" />
            </section>

        </>
    )
}
