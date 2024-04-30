import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"

export default function Media() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Media"}>
                <div>
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
                                                    <h4 className="text-white">Audience Engagement</h4>
                                                    <p class="para">
                                                        Telecalling helps media companies engage with their audience through surveys, 
                                                        feedback collection, and promotional offers.
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
                                                    <h4 className="text-white">Subscription and Membership Sales</h4>
                                                    <p class="para">
                                                        Telecalling is used to promote and sell subscriptions, memberships, and premium 
                                                        content packages to audiences.
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
                                                    <h4 className="text-white">Event Promotion</h4>
                                                    <p class="para">
                                                        Telecalling assists in promoting events such as concerts, movie releases, and 
                                                        shows, helping in ticket sales and audience turnout.
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
                                                    <h4 className="text-white">Customer Support</h4>
                                                    <p class="para">
                                                        Telecalling provides customer support for media products such as TV services, streaming 
                                                        platforms, and publications, assisting with account management, technical issues, and 
                                                        content inquiries.
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


