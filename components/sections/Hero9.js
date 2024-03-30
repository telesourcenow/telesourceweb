import Link from "next/link"


export default function Hero9({ cls }) {
    return (
        <>
            <section id="hero-9" className="bg-fixed hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-xl-5">
                            <div className="hero-txt white-color">
                                {/* Title */}
                                <h3>Manage your web traffic with <span>Metreex</span></h3>
                                {/* Text */}
                                <p>Maecenas gravida nunc vehicula diam magna luctus tempor. Quisque augue laoreet turpis
                                    urna augue, viverra and, dictum tempor viverra
                                </p>
                                {/* Button */}
                                <Link href="/services" className="btn btn-md btn-primary tra-white-hover">Our Core Services</Link>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-xl-7">
                            <div className="hero-9-img text-center">
                                <img className="img-fluid" src="/images/hero-9-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
