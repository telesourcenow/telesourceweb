

export default function Hero2({ cls }) {
    return (
        <>
            <section id="hero-2" className="bg-fixed hero-section division">
                <div className="container">
                    {/* HERO TEXT */}
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="hero-txt text-center">
                                {/* Title */}
                                <h3 className="indigo-color">Take advantage of SEO to receive more customers  profit</h3>
                                {/* Text */}
                                <p className="grey-color">Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet
                                    augue luctus magna vulputate molestie bibendum quis luctus an dolor
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
                                            <button type="submit" className="btn btn-primary black-hover submit">Let's Started</button>
                                        </div>
                                        {/* Hero Form Message */}
                                        <div className="col-lg-12 seo-form-msg"><span className="loading" /></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="hero-2-img text-center">
                                <img className="img-fluid" src="/images/hero-2-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>	{/* End container */}
                {/* SECTION OVERLAY */}
                <div className="bg-fixed white-overlay-wave" />
            </section>

        </>
    )
}
