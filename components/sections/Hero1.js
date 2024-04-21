import Link from "next/link";

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
                                <Link href="/about-us" className="btn btn-md btn-primary tra-white-hover mb-4">
                                    About Us
                                </Link>
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO VIDEO */}
                        <div className="col-md-6 col-xl-7">
                            <div className="hero-1-video text-center">
                                <video className="video-fluid" autoPlay muted loop>
                                    <source src="/images/building-on-ai-tech-and-human-expertise.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
                {/* SECTION OVERLAY */}
                <div className="bg-fixed white-overlay-top" />
            </section>
        </>
    );
}
