import Link from "next/link"


export default function Hero12({ cls }) {
    return (
        <>
            <section id="hero-12" className="bg-scroll hero-section division">
                <div className="container">
                    {/* HERO TEXT */}
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="hero-txt text-center white-color">
                                {/* Title */}
                                <h3>Custom SEO Services – Our Specialty</h3>
                                {/* Text */}
                                <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor
                                    congue magna impedit ligula risus. Mauris donec ociis et magnis sapien etiam sagittis
                                </p>
                                {/* Button */}
                                <Link href="#cta-6" className="btn btn-md btn-primary tra-white-hover">Get A Free Analysis</Link>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-12-img text-center">
                                <img className="img-fluid" src="/images/hero-12-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>

        </>
    )
}
