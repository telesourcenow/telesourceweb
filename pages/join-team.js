import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"

export default function JoinTeam() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"JoinTeam"}>
                <div>
                    <section  className="pt-20 pb-80">
                    <div className="container mt-5">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <h4>Open Positions</h4>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h6> <strong>Role: </strong>Business Development</h6>
                                    <h6> <strong>Location:</strong> Pune</h6>
                                    <h6> <strong>Salary:</strong> Depends on interview</h6>
                                </div>
                                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                                    <button className="btn btn-primary">
                                        <a href="mailto:sales@telesourcenow.com" className="text-white"> Apply</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container mt-5">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h6> <strong>Role:</strong> Frontend Developer</h6>
                                    <h6> <strong>Location:</strong> Pune</h6>
                                    <h6> <strong>Salary:</strong> Depends on interview</h6>
                                </div>
                                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                                    <button className="btn btn-primary">
                                        <a href="mailto:sales@telesourcenow.com" className="text-white"> Apply</a>
                                    </button>
                                </div>
                            </div>
                        </div>  
                        <hr />
                        <div className="container mt-5">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h6> <strong>Role:</strong> Backend Developer</h6>
                                    <h6> <strong>Location:</strong> Pune</h6>
                                    <h6> <strong>Salary:</strong> Depends on interview</h6>
                                </div>
                                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                                    <button className="btn btn-primary">
                                        <a href="mailto:sales@telesourcenow.com" className="text-white"> Apply</a>
                                    </button>
                                </div>
                            </div>
                        </div> 
                        <hr />
                        <div className="container mt-5">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h6> <strong>Role:</strong> Full Stack Developer</h6>
                                    <h6> <strong>Location:</strong> Pune</h6>
                                    <h6> <strong>Salary:</strong> Depends on interview</h6>
                                </div>
                                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                                    <button className="btn btn-primary">
                                        <a href="mailto:sales@telesourcenow.com" className="text-white"> Apply</a>
                                    </button>
                                </div>
                            </div>
                        </div> 
                    </section>	
                    <PricingCommon />
                </div>
            </Layout>
        </>
    )
}