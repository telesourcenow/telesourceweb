import Link from "next/link"


export default function Projects2({ cls }) {
    return (
        <>
            <section id="projects-2" className={`wide-70 projects-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                            {/* Title 	*/}
                            <h3 className="h3-lg indigo-color">We Leave Lasting Impressions</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div>
                    {/* PROJECTS IMAGES HOLDER */}
                    <div className="row">
                        {/* IMAGE #1 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                                <Link href="/project-details">
                                    {/* Project Preview */}
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/portfolio/project-01.jpg" alt="project-preview" />
                                        <div className="item-overlay" />
                                        {/* Project Description */}
                                        <div className="project-description white-color">
                                            <img className="img-fluid" src="/images/brand-11.png" alt="project-logo" />
                                            <p className="p-md">Restaurant Website</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #1 */}
                        {/* IMAGE #2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-2 wow fadeInUp" data-wow-delay="0.6s">
                                <Link href="/project-details">
                                    {/* Project Preview */}
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/portfolio/project-02.jpg" alt="project-preview" />
                                        <div className="item-overlay" />
                                        {/* Project Description */}
                                        <div className="project-description white-color">
                                            <img className="img-fluid" src="/images/brand-13.png" alt="project-logo" />
                                            <p className="p-md">Freelancer Website</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #2 */}
                        {/* IMAGE #3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-2 wow fadeInUp" data-wow-delay="0.8s">
                                <Link href="/project-details">
                                    {/* Project Preview */}
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/portfolio/project-03.jpg" alt="project-preview" />
                                        <div className="item-overlay" />
                                        {/* Project Description */}
                                        <div className="project-description white-color">
                                            <img className="img-fluid" src="/images/brand-15.png" alt="project-logo" />
                                            <p className="p-md">Organic Food Website</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #3 */}
                        {/* IMAGE #4 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-2 wow fadeInUp" data-wow-delay="1s">
                                <Link href="/project-details">
                                    {/* Project Preview */}
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/portfolio/project-04.jpg" alt="project-preview" />
                                        <div className="item-overlay" />
                                        {/* Project Description */}
                                        <div className="project-description white-color">
                                            <img className="img-fluid" src="/images/brand-17.png" alt="project-logo" />
                                            <p className="p-md">Tourism Website</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #4 */}
                        {/* IMAGE #5 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-2 wow fadeInUp" data-wow-delay="1.2s">
                                <Link href="/project-details">
                                    {/* Project Preview */}
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/portfolio/project-05.jpg" alt="project-preview" />
                                        <div className="item-overlay" />
                                        {/* Project Description */}
                                        <div className="project-description white-color">
                                            <img className="img-fluid" src="/images/brand-14.png" alt="project-logo" />
                                            <p className="p-md">e-Commerce Business</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #5 */}
                        {/* IMAGE #6 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-2 wow fadeInUp" data-wow-delay="1.4s">
                                <Link href="/project-details">
                                    {/* Project Preview */}
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/portfolio/project-06.jpg" alt="project-preview" />
                                        <div className="item-overlay" />
                                        {/* Project Description */}
                                        <div className="project-description white-color">
                                            <img className="img-fluid" src="/images/brand-16.png" alt="project-logo" />
                                            <p className="p-md">Travel Website</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #6 */}
                    </div>	{/* END PROJECTS IMAGES HOLDER */}
                    {/* ALL PROJECTS BUTTON */}
                    <div className="row">
                        <div className="col-md-12 text-center all-projects-btn">
                            <Link href="/case-studies-2" className="btn btn-md btn-primary tra-black-hover">See All Case Studies</Link>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>

        </>
    )
}
