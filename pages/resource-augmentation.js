import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"

export default function ResourceAugmentation() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark">
                <div>

                <section className="integrated-marketing-solutions-bg">
                        <div className="container-fluid pt-5">
                            <div className="row d-flex align-items-center">
                              <div className="col-md-12 col-lg-12 col-sm-12 text-center pt-4">
                                    <div className="txt-block pc-25 mb-40">
                                        <h4 className="h4-xl pt-2 text-white">Resource Augmentation</h4>
                                        <p className="text-white text-bolder"> 
                                            Boost Agility and Expertise with Resource Augmentation by Telesourcenow
                                        </p>
                                        <p className="text-white text-bolder">
                                            Fuel Your Growth Without Building a Bigger Team
                                        </p>
                                    </div>
                              </div>
                            </div>  
                        </div>    
                </section>

                <section>
                        <div className="container-fluid">
                            <div className="row d-flex align-items-center justify-content-center">
                              <div className="col-md-offset-7 col-md-7 col-sm-12 text-center">
                                    <div className="txt-block">
                                        {/* Title */}
                                        <h4 className="h4-xl pt-4 text-dark">We are Champions</h4>
                                        {/* Text */}
                                        <p className="text-dark">
                                          Supercharge Your Sales Funnel, Customer Engagement Support and Operations With 
                                          Tailored Tele-calling Services with Telesourcenow
                                        </p>
                                    </div>
                              </div>
                            </div>	  
                        </div>    
                </section>

                <section  className="pt-2 pb-30 services-section division"  style={{ background: '#6936f5'}}>
                        <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                              <div className="col-md-offset-7 col-md-7 col-sm-12 text-center">
                                    <div className="txt-block">
                                        <h4 className="h4-xl pt-2 pb-2 text-white">Elevate Your Brand Experience and Drive Sales</h4>
                                    </div>
                              </div>
                            </div>
                            <div className="row first-cloud-service-row">
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                            <h5 className="h5-md ">Strategic Plan Development</h5>
                                            <p className="p-sm">
                                                We collaborate with you to develop a customized merchandising strategy aligned 
                                                with your brand identity and target audience.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                            <h5 className="h5-md ">Product Placement & Assortment Optimization</h5>
                                            <p className="p-sm">
                                                Our experts ensure optimal product placement and curate enticing product 
                                                assortments that entice customers and maximize sales opportunities.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                            <h5 className="h5-md ">Visually Appealing Displays</h5>
                                            <p className="p-sm">
                                                We design and implement visually captivating displays that showcase your 
                                                products, enhance brand storytelling, and encourage customer engagement.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                            <h5 className="h5-md ">Inventory Management & Compliance</h5>
                                            <p className="p-sm">
                                                Our services ensure accurate inventory levels and compliance with brand guidelines, 
                                                maximizing operational efficiency and minimizing stockouts.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                            <h5 className="h5-md ">Comprehensive Retail Audits</h5>
                                            <p className="p-sm">
                                                Regular audits conducted by our trained professionals identify areas for improvement 
                                                and provide actionable insights to optimize your merchandising strategies.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                            <h5 className="h5-md ">Retail Merchandising</h5>
                                            <p className="p-sm">
                                                Optimize product presentation and maximize sales potential with strategic retail 
                                                merchandising solutions tailored to enhance customer engagement and drive profitability.
                                            </p>
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


