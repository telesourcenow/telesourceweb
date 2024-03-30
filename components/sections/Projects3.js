import Link from "next/link"


export default function Projects3({ cls }) {
    return (
        <>
            <section id="projects-3" className={`wide-70 projects-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">We Leave Lasting Impressions</h3>
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
                            <div className="project-3 wow fadeInUp" data-wow-delay="0.4s">
                                <Link href="/project-details">
                                    {/* Project Data */}
                                    <div className="project-data">
                                        <h5 className="h5-md">Mauris donec magnis as sapien sapien and sagittis congue</h5>
                                        <img className="img-fluid" src="/images/brand-1.png" alt="project-logo" />
                                    </div>
                                    {/* Project Preview */}
                                    <div className="project-preview">
                                        <img className="img-fluid" src="/images/portfolio/project-11.jpg" alt="project-preview" />
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #1 */}
                        {/* IMAGE #2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-3 wow fadeInUp" data-wow-delay="0.6s">
                                <Link href="/project-details">
                                    {/* Project Data */}
                                    <div className="project-data">
                                        <h5 className="h5-md">Ipsum congue vitae undo auctor morbi pretium neque porta</h5>
                                        <img className="img-fluid" src="/images/brand-3.png" alt="project-logo" />
                                    </div>
                                    {/* Project Preview */}
                                    <div className="project-preview">
                                        <img className="img-fluid" src="/images/portfolio/project-12.jpg" alt="project-preview" />
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #2 */}
                        {/* IMAGE #3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-3 wow fadeInUp" data-wow-delay="0.8s">
                                <Link href="/project-details">
                                    {/* Project Data */}
                                    <div className="project-data">
                                        <h5 className="h5-md">Sapien sagittis a congue undo tempor gravida donec</h5>
                                        <img className="img-fluid" src="/images/brand-5.png" alt="project-logo" />
                                    </div>
                                    {/* Project Preview */}
                                    <div className="project-preview">
                                        <img className="img-fluid" src="/images/portfolio/project-13.jpg" alt="project-preview" />
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #3 */}
                        {/* IMAGE #4 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-3 wow fadeInUp" data-wow-delay="1s">
                                <Link href="/project-details">
                                    {/* Project Data */}
                                    <div className="project-data">
                                        <h5 className="h5-md">Congue magna morbi pretium purus at pretium neque</h5>
                                        <img className="img-fluid" src="/images/brand-7.png" alt="project-logo" />
                                    </div>
                                    {/* Project Preview */}
                                    <div className="project-preview">
                                        <img className="img-fluid" src="/images/portfolio/project-14.jpg" alt="project-preview" />
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #4 */}
                        {/* IMAGE #5 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-3 wow fadeInUp" data-wow-delay="1.2s">
                                <Link href="/project-details">
                                    {/* Project Data */}
                                    <div className="project-data">
                                        <h5 className="h5-md">Mauris donec magnis as sapien sapien and sagittis congue</h5>
                                        <img className="img-fluid" src="/images/brand-4.png" alt="project-logo" />
                                    </div>
                                    {/* Project Preview */}
                                    <div className="project-preview">
                                        <img className="img-fluid" src="/images/portfolio/project-15.jpg" alt="project-preview" />
                                    </div>
                                </Link>
                            </div>
                        </div>	{/* END IMAGE #5 */}
                        {/* IMAGE #6 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="project-3 wow fadeInUp" data-wow-delay="1.4s">
                                <Link href="/project-details">
                                    {/* Project Data */}
                                    <div className="project-data">
                                        <h5 className="h5-md">Aliqum mullam blandit tempor sapien gravida donec</h5>
                                        <img className="img-fluid" src="/images/brand-6.png" alt="project-logo" />
                                    </div>
                                    {/* Project Preview */}
                                    <div className="project-preview">
                                        <img className="img-fluid" src="/images/portfolio/project-16.jpg" alt="project-preview" />
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
