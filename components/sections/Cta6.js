

export default function Cta6({ cls }) {
    return (
        <>
            <section id="cta-6" className={`cta-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row">
                        {/* CALL TO ACTION TEXT */}
                        <div className="col-md-12">
                            <div className="cta-txt text-center">
                                {/* Title */}
                                <h3 className="h3-lg">Get a <span>FREE SEO</span> audit for your website!</h3>
                                {/* Text */}
                                <p className="p-lg">We will give you a true assessment of your website totally free of charge
                                </p>
                                {/* CALL TO ACTION FORM */}
                                <div className="form-holder text-center">
                                    <form name="seoform" className="row seo-form">
                                        {/* Form Input */}
                                        <div id="input-email" className="col-lg-4">
                                            <input type="text" name="email" className="form-control email" placeholder="Your Email Address*" />
                                        </div>
                                        {/* Form Input */}
                                        <div id="input-url" className="col-lg-4">
                                            <input type="url" name="url" className="form-control url" placeholder="Your Website*" />
                                        </div>
                                        {/* Form Button */}
                                        <div className="col-lg-4 form-btn">
                                            <button type="submit" className="btn btn-primary tra-white-hover submit">Test My
                                                Website For Free</button>
                                        </div>
                                        {/* Form Message */}
                                        <div className="col-lg-12 seo-form-msg"><span className="loading" /></div>
                                    </form>
                                </div>
                            </div>
                        </div> {/* END CALL TO ACTION TEXT */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </>
    )
}
