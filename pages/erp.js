import Layout from "@/components/layout/Layout"
import Brands1 from "@/components/sections/Brands1"
import Faqs1 from "@/components/sections/Faqs1"
import PricingCommon from "@/components/sections/PricingCommon"

export default function ERP() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"ERP"}>
                <div>

                <section>
                        <div className="container">
                            <div className="row d-flex align-items-center mt-5">
                              <div className="col-md-12 col-lg-12 text-center">
                                    <div className="txt-block pc-25 mb-40">
                                        {/* Title */}
                                        <h4 className="h4-xl">
                                            Streamline Your Operations and Skyrocket Sales with a Custom ERP
                                        </h4>
                                        {/* Text */}
                                        <p>
                                            Take control of your business with Telesourcenow's powerful Enterprise Resource 
                                            Planning (ERP) solutions.
                                        </p>
                                    </div>
                              </div>
                            </div>	  
                        </div>    
                </section>

                <section style={{ background: '#6936f5'}}>
                    <div className="container mt-5 pt-5" style={{ background: '#6936f5'}}>
                        <div className="row first-gen-ai-chatbot-row text-justify">
                            <div className="col-sm-12 col-lg-12 text-center">
                                <div>
                                    <h5 className="text-white pb-5 text-center">
                                        Telesourcenow's custom ERP solutions can revolutionize your business by:
                                    </h5>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <div className="sbox-2">
                                    <h5 className="h5-md text-white">Unifying Your Operations</h5>
                                        <p className="h5-md text-white text-justify">
                                            Centralize inventory management, order processing, accounting, customer relationship 
                                            management (CRM), and more – all within a single, user-friendly platform.
                                        </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <div className="sbox-2">
                                    <h5 className="h5-md text-white"> Improving Collaboration</h5>
                                        <p className="h5-md text-white text-justify">
                                            Foster seamless communication and collaboration between departments. Empower 
                                            your team with the tools they need to work smarter, not harder.
                                        </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <div className="sbox-2">
                                    <h5 className="h5-md text-white">Scalability for Growth</h5>
                                        <p className="h5-md text-white text-justify">
                                            Our custom-built ERPs are designed to scale with your business. As you grow, 
                                            your ERP can adapt to meet your evolving needs.
                                        </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <div className="sbox-2">
                                    <h5 className="h5-md text-white">Boosting Sales Efficiency</h5>
                                        <p className="h5-md text-white text-justify">
                                            Automate repetitive tasks, streamline workflows, and gain real-time insights into 
                                            your sales pipeline. Close deals faster and focus on what matters most – building 
                                            customer relationships.
                                        </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <div className="sbox-2">
                                    <h5 className="h5-md text-white">Enhancing Data Visibility</h5>
                                        <p className="h5-md text-white text-justify">
                                            Gain a holistic view of your entire business with comprehensive reporting and 
                                            analytics. Make data-driven decisions to optimize operations, improve resource 
                                            allocation, and drive profitability.
                                        </p>
                                </div>
                            </div>
                        </div> 
                    </div>  
                </section>

                    <Faqs1 />	{/* END FAQs-1 */}
                    {/* CALL TO ACTION-4
				============================================= */}
                    <Brands1 cls={"bg-purple bg-pattern "} style={1} />
                </div>

            </Layout>
        </>
    )
}


