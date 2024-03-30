import Link from "next/link"


export default function Hero7({ cls }) {
    return (
        <>
            <section id="hero-7" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-7 col-lg-6">
                            <div className="hero-txt white-color">
                                {/* Title */}
                                <h3>Grow your website traffic, online leads and sales</h3>
                                {/* Text */}
                                <p>Feugiat primis ligula risus auctor laoreet augue egestas a mauris viverra tortor in iaculis
                                    pretium magna mauris undo rhoncus ipsum feugiat primis in ultrice ligula risus
                                </p>
                                {/* Button */}
                                <Link href="/services" className="btn btn-md btn-primary tra-white-hover">Discover More</Link>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-5 col-lg-6">
                            <div className="hero-7-img text-center">
                                <img className="img-fluid" src="/images/hero-7-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
                {/* SECTION OVERLAY */}
                <div className="bg-fixed white-overlay-wave" />
            </section>

        </>
    )
}
