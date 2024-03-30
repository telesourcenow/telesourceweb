import Link from "next/link"


export default function Sp1({ cls }) {
    return (
        <>
            <section id="sp-1" className={`wide-100 single-project-section division ${cls ? cls : ""}`}>
                <div className="container">
                    <div className="sp-wrapper bg-white">
                        <div className="row d-flex align-items-center">
                            {/* PROJECT PREVIEW IMAGE */}
                            <div className="col-md-6">
                                <div className="sp-preview text-center">
                                    <img className="img-fluid" src="/images/portfolio/project-07.jpg" alt="project-preview" />
                                </div>
                            </div>
                            {/* PROJECT TEXT */}
                            <div className="col-md-6">
                                <div className="sp-txt">
                                    {/* Brand Logo */}
                                    <div className="sp-logo"><img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" /></div>
                                    {/* Text */}
                                    <p>Semper lacus cursus porta, feugiat a primis ultrice ligula a risus auctor tempus a feugiat dolor
                                        at lacinia risus interdum auctor
                                    </p>
                                    {/* Links */}
                                    <div className="sp-links">
                                        <Link href="/project-details" className="btn btn-primary tra-black-hover">Read Case Study</Link>
                                    </div>
                                    {/* Project Data */}
                                    <div className="sp-data">
                                        <div className="row">
                                            <div className="col-md-12"><p>Client Results</p></div>
                                        </div>
                                        <div className="row d-flex align-items-center clearfix">
                                            {/* Data */}
                                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.4s">
                                                <h4 className="h4-lg darkblue-color">+34,78%</h4>
                                                <span>increase in website visitors</span>
                                            </div>
                                            {/* Data */}
                                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                                                <h4 className="h4-lg darkblue-color">+182,18%</h4>
                                                <span>increase in organic search traffic</span>
                                            </div>
                                            {/* Data */}
                                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                                <h4 className="h4-lg darkblue-color">+346,93%</h4>
                                                <span>increase in the conversion rate</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Small Text */}
                                    <p className="p-sm">Sep 1 - Dec 31, 2019 vs Sep 1 - Dec 31, 2018</p>
                                </div>
                            </div>	{/* END PROJECT TEXT */}
                        </div>    {/* End row */}
                    </div>
                </div>	   {/* End container */}
            </section>

        </>
    )
}
