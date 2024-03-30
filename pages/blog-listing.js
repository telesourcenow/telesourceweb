import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})

export default function BlogListing() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Our Blog"}>
                <div>
                    {/* BLOG-2
				============================================= */}
                    <section id="blog-2" className="bg-lightgrey wide-60 blog-section division">
                        <div className="container">
                            {/* BLOG POSTS */}
                            <div className="row">
                                <div className="col-md-12 reviews-grid">
                                    <PortfolioFilter1 />
                                </div>
                            </div>	{/* END BLOG POSTS */}
                        </div>	   {/* End container */}
                    </section>	{/* END BLOG-2 */}
                    {/* PAGE PAGINATION */}
                    <div className="bg-lightgrey page-pagination division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled"><Link className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                                            <li className="page-item active"><Link className="page-link" href="#">1 <span className="sr-only">(current)</span></Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">2</Link> </li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#"><i className="fas fa-angle-right" /></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>  {/* End row */}
                        </div> {/* End container */}
                    </div>	{/* END PAGE PAGINATION */}
                    {/* CALL TO ACTION-4
				============================================= */}
                    <section id="cta-4" className="bg-06 cta-section division">
                        <div className="container white-color">
                            <div className="row d-flex align-items-center">
                                {/* CALL TO ACTION TEXT */}
                                <div className="col-lg-8">
                                    <div className="cta-txt">
                                        {/* Title */}
                                        <h3 className="h3-xs">Improve your search ranking now!</h3>
                                        {/* Text */}
                                        <p className="p-md">Donec vel sapien augue integer urna vel turpis cursus porta, mauris sed augue
                                            luctus dolor velna auctor congue tempus magna integer
                                        </p>
                                    </div>
                                </div>	{/* END CALL TO ACTION TEXT */}
                                {/* CALL TO ACTION BUTTON */}
                                <div className="col-lg-4">
                                    <div className="cta-btn text-right">
                                        <Link href="/pricing" className="btn btn-md btn-primary tra-white-hover">Get Started Now</Link>
                                    </div>
                                </div>
                            </div>	 {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END CALL TO ACTION-4 */}
                </div>

            </Layout>
        </>
    )
}