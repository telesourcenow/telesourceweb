import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"
import Link from "next/link"


export default function JoinTeam() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Join Team"}>
                <div>

                <section>
                        <div className="container-fluid">
                            <div className="row d-flex align-items-center justify-content-center">
                              <div className="col-md-offset-7 col-md-7 col-sm-12 text-center">
                                    <div className="txt-block">
                                        {/* Title */}
                                        <h4 className="h4-xl pt-4 text-dark">
                                            Join Our Team
                                        </h4>
                                        {/* Text */}
                                        <p className="text-dark">
                                            We offer cutting edge technology enabled solutions to empower the worlds brands, 
                                            in optimizing their operations in sustainable ways all with the aim of achieving 
                                            their business objectives.
                                        </p>
                                    </div>
                              </div>
                            </div>	  
                        </div>    
                </section>

                <section style={{ background: '#6936f5'}}>
                    <div className="container mt-5 pt-5 pb-3" style={{ background: '#6936f5'}}>
                                <h3 className="text-center text-white mb-5 text-uppercase text-bolder"> Open Positions </h3>
                                <div className="row text-justify">
                                <div className="col-sm-12 col-lg-1"></div>
                                    <div className="col-sm-6 col-xs-6 col-lg-2">
                                        <Link href="/technology-careers">
                                            <div className="sbox-2">
                                                <img className="img-fluid" style={{ borderRadius: '40px', width: '60px'}} src="/images/technology.png" alt="about-image" />
                                                <h5 className="h5-md">Technology</h5>
                                                <Link href="/technology-careers">View Jobs &#8594;</Link>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-xs-6 col-lg-2">
                                        <Link href="">
                                            <div className="sbox-2">
                                                <img className="img-fluid" style={{ borderRadius: '40px', width: '60px'}} src="/images/sales-job.png" alt="about-image" />
                                                <h5 className="h5-md">Sales</h5>
                                                <Link href="">View Jobs &#8594;</Link>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-xs-6 col-lg-2">
                                        <Link href="">
                                            <div className="sbox-2">
                                                <img className="img-fluid" style={{ borderRadius: '40px', width: '60px'}} src="/images/operation-job.png" alt="about-image" />
                                                <h5 className="h5-md">Operation</h5>
                                                <Link href="">View Jobs &#8594;</Link>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-xs-6 col-lg-2">
                                        <Link href="">
                                            <div className="sbox-2">
                                                <img className="img-fluid" style={{ borderRadius: '40px', width: '60px'}} src="/images/marketing-job.png" alt="about-image" />
                                                <h5 className="h5-md">Marketing</h5>
                                                <Link href="">View Jobs &#8594;</Link>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-xs-6 col-lg-2">
                                        <Link href="">
                                            <div className="sbox-2">
                                                <img className="img-fluid" style={{ borderRadius: '40px', width: '60px'}} src="/images/hr-job.jpeg" alt="about-image" />
                                                <h5 className="h5-md">HR</h5>
                                                <Link href="">View Jobs &#8594;</Link>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-12 col-lg-1"></div>
                                    
                                </div> 
                            </div>  
                </section>

                    <PricingCommon />
                </div>

            </Layout>
        </>
    )
}


