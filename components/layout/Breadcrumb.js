import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div className={breadcrumbTitle ? "inner-page-wrapper" : ""}>
                {/* PAGE HERO
				============================================= */}
                <section id="about-page" className="page-hero-section division">
                    <div className="container">
                        <div className="row">
                            {/* PAGE HERO TEXT */}
                            <div className="col-md-10 offset-md-1">
                                <div className="hero-txt text-center white-color">
                                    {/* Title */}
                                    <h3 className="h3-xl">{breadcrumbTitle}</h3>
                                    {/* Text */}
                                    {/* <p>We provide professional PPC, Web and SEO services to increase online visibility and qualified leads
                                        to your business
                                    </p> */}
                                </div>
                            </div>	{/* END PAGE HERO TEXT */}
                        </div>    {/* End row */}
                    </div>	   {/* End container */}
                </section>	{/* END PAGE HERO */}
                {/* BREADCRUMB
				============================================= */}
                <div id="breadcrumb" className="division">
                    <div className="container">
                        <div className="row">
                            {/* BREADCRUMB NAV */}
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/" className="primary-color">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{breadcrumbTitle}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>	 {/* End row */}
                    </div>	{/* End container */}
                </div>	{/* END BREADCRUMB */}
            </div>

        </>
    )
}
