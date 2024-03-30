import Link from "next/link"


export default function Hero5({ cls }) {
    return (
        <>
            <section id="hero-5" className="hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO IMAGE */}
                        <div className="col-md-5 col-xl-6">
                            <div className="hero-5-img text-center">
                                <img className="img-fluid" src="/images/hero-5-img.png" alt="hero-image" />
                            </div>
                        </div>
                        {/* HERO TEXT */}
                        <div className="col-md-7 col-xl-6">
                            <div className="hero-txt">
                                {/* Small Title */}
                                <h4 className="bluestone-color">Welcome to Metreex Company</h4>
                                {/* Title */}
                                <h3>Get more sales with SEO, PPC, and Email Marketing</h3>
                                {/* Text */}
                                <p className="grey-color">Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor
                                    in iaculis pretium magna mauris a rhoncus ipsum feugiat primis in ultrice ligula
                                </p>
                                {/* Button */}
                                <Link href="#cta-6" className="btn btn-md btn-primary bluestone-hover">Get A Free Analysis</Link>
                            </div>
                        </div>	{/* END HERO TEXT */}
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
