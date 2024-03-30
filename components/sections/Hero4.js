import Link from "next/link"


export default function Hero4({ cls }) {
    return (
        <>
            <section id="hero-4" className="bg-fixed hero-section division">
                <div className="container">
                    <div className="row">
                        {/* HERO TEXT */}
                        <div className="col-xl-10 offset-xl-1">
                            <div className="hero-txt text-center white-color">
                                {/* Title */}
                                <h3>Get more sales with SEO, PPC, and Email Marketing</h3>
                                {/* Text */}
                                <p>Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus
                                    magna dolor luctus undo magna an dolor
                                </p>
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
                                            <button type="submit" className="btn btn-yellow black-hover submit">Let's Started</button>
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
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
