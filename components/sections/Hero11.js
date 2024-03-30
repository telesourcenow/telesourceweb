import Link from "next/link"


export default function Hero11({ cls }) {
    return (
        <>
            <section id="hero-11" className="hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-lg-5">
                            <div className="hero-txt">
                                {/* Title */}
                                <h2 className="darkblue-color">Increase your website traffic with <span>Metreex</span></h2>
                                {/* Text */}
                                <p className="grey-color">Maecenas gravida nunc vehicula and magna luctus tempor. Quisque vel laoreet
                                    turpis urna augue, viverra and augue, dictum tempor diam. Imperdiet vel varius viverra a massa
                                    cursus molestie bibendum
                                </p>
                                {/* Button */}
                                <Link href="#cta-6" className="btn btn-md btn-primary tra-black-hover">Get A Free Analysis</Link>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-lg-7">
                            <div className="hero-11-img text-center">
                                <img className="img-fluid" src="/images/hero-11-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
