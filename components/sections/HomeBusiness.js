import Link from "next/link"

const HomeBusiness = () => {
  return (
    <div>
     <section>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 section-title">
                            <h3 className="h3-lg pt-4">Businesses</h3>
                            <p className="p-lg">
                                TelesourceNow can provide specialized solutions that meet the unique needs and challenges 
                                of each industry. This approach ensures that businesses receive outsourcing services that
                                are optimized for their specific requirements, ultimately helping them operate more 
                                efficiently and effectively.
                            </p>
                        </div>
                    </div>
                    {/* PROJECTS IMAGES HOLDER */}
                    <div className="row align-items-center justify-content-center text-center">
                        {/* IMAGE #1 */}
                        <div class="col-md-3 col-lg-3 text-center" >
                            <div className="project-1">
                                <Link href="/ecommerce">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-ecommerce-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>E-Commerce </p>
                                    <Link href="/ecommerce" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> 
                        {/* END IMAGE #1 */}

                        {/* IMAGE #2 */}
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/insurance">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-finance-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Insurance </p>
                                    <Link href="/tinsurance" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> 
                        {/* END IMAGE #2 */}

                        {/* IMAGE #3 */}
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/travel-hospitality">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-travel-and-hospitality-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Travel & Hospitality </p>
                                    <Link href="/travel-hospitality" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> {/* END IMAGE #3 */}
                        {/* IMAGE #4 */}
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/healthcare">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-healthcare-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Healthcare </p>
                                    <Link href="/healthcare" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> {/* END IMAGE #4 */}
                        {/* IMAGE #6 */}
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/financial-services">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-finance-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Financial Services </p>
                                    <Link href="/financial-services" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> 
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/media">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-media-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Media </p>
                                    <Link href="/media" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> 
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/telecommunication">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-telecommunication-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Telecommunication </p>
                                    <Link href="/telecommunication" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> 
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/technologies">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-technologies-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Technologies </p>
                                    <Link href="/technologies" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> 
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/automotive">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-automotive-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Automotive </p>
                                    <Link href="/automotive" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div> 
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/renewable-power">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-renewable-power-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Renewable Power </p>
                                    <Link href="/renewable-power" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/government">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business-government-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Government </p>
                                    <Link href="/government" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <div className="project-1">
                            <Link href="/real-estate-infrastructure">
                                    {/* Brand Logo */}
                                    <img className="img-fluid" src="/images/business -real-estate-and-infrastructure-icon.webp" alt="project-logo" />
                                    {/* Category */}
                                    <p>Real Estate & Infrastructure </p>
                                    <Link href="/real-estate-infrastructure" style={{ color: 'purple'}}> Read More...</Link>
                                </Link>
                            </div>
                        </div>
                        {/* END IMAGE #6 */}
                    </div> {/* END PROJECTS IMAGES HOLDER */}
                    {/* ALL PROJECTS BUTTON */}
                    {/* <div className="row">
                        <div className="col-md-12 text-center all-projects-btn">
                            <Link href="/case-studies-2" className="btn btn-md btn-primary tra-black-hover">See All Case
                                Studies</Link>
                        </div>
                    </div> */}
                </div> 
                {/* End container */}
            </section>
    </div>
  )
}

export default HomeBusiness
