import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"

export default function RenewablePower() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark">
                <div>
                    <section className="renewable-power-page-hero-section">
                            <div className="container-fluid pt-5">
                                <div className="row d-flex align-items-center">
                                <div className="col-md-12 col-lg-12 col-sm-12 text-center pt-4">
                                        <div className="txt-block pc-25 mb-40">
                                            <h4 className="h4-xl pt-2 text-white">Renewable Power</h4>
                                            <p className="text-white text-bolder"> 
                                            <br /> <br />
                                            </p>
                                            <p className="text-white text-bolder">
                                                <br /> <br />
                                            </p>
                                        </div>
                                </div>
                                </div>  
                            </div>    
                    </section>
                    <section  className="pt-30 pb-30 services-section division">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div class="card">
                                                <div class="content">
                                                    <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                                    ></path>
                                                    </svg>
                                                    <h4 className="text-white">Personalized Guidance</h4>
                                                    <p class="para">
                                                        AI assistants answer basic questions, recommend solutions, and connect customers with 
                                                        specialists, while agents handle complex inquiries and build trust.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div class="card">
                                                <div class="content">
                                                    <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                                    ></path>
                                                    </svg>
                                                    <h4 className="text-white">24/7 Availability</h4>
                                                    <p class="para">
                                                        Chatbots provide instant support for troubleshooting, billing inquiries, and information access.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div class="card">
                                                <div class="content">
                                                    <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                                    ></path>
                                                    </svg>
                                                    <h4 className="text-white">Streamlining Operations</h4>
                                                    <p class="para">
                                                        AI automates tasks like appointment scheduling and field data collection, boosting efficiency.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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


