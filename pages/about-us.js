import Layout from "@/components/layout/Layout"

export default function AboutUs() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"About Us"}>
                <div>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-12">
                                    <div className="mb-40">
                                        <h4 className="text-dark">ABOUT US</h4>
                                        <h5>WE ARE DIFFERENT</h5>
                                        <p>
                                            Welcome to TelesourceNow, a provider of business services that is shaping the future 
                                            with boundless possibilities.
                                        </p>
                                        <p>We offer cutting edge technology enabled solutions to empower the worlds brands, 
                                            in optimizing their operations in sustainable ways all with the aim of achieving 
                                            their business objectives.
                                        </p>
                                        <p>
                                            Our dedication to excellence permeates every aspect of our work positioning us as a 
                                            driving force, for businesses embracing a future characterized by AI innovation 
                                            and unprecedented accomplishments.
                                        </p>
                                    </div>
                                </div>	 
                            </div>    
                        </div>	  
                    </section>	
                   
                    <div id="brands-2" className="brands-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <p className="p-lg grey-color"> INTEGRATIONS </p>
                                    <ul className="brands-list">
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/airtable.svg" alt="brand-logo" />
                                        </li>
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/calendly.svg" alt="brand-logo" />
                                        </li>
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/googlecalender.svg" alt="brand-logo" />
                                        </li>
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/googlesheet.svg" alt="brand-logo" />
                                        </li>
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/hubspot.svg" alt="brand-logo" />
                                        </li>
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/slack.svg" alt="brand-logo" />
                                        </li>
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/slaesforce.svg" alt="brand-logo" />
                                        </li>
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/zapier.svg" alt="brand-logo" />
                                        </li>
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/zoho.svg" alt="brand-logo" />
                                        </li>
                                    </ul>
                                </div>
                            </div>     
                        </div>	   
                    </div>	
                    <section id="cta-4" className="bg-06 cta-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 text-white">
                                    <div className="cta-txt">
                                        <h3 className="h3-xs text-white">OUR VISION</h3>
                                        <p className="p-md">To be the go-to partner for businesses seeking exceptional customer 
                                        experiences, innovative solutions, and unparalleled corporate communication strategies.
                                        </p>
                                    </div>
                                </div>	
                                <div className="col-lg-6">
                                    <div className="cta-txt">
                                        <h3 className="h3-xs text-white">OUR MISSION</h3>
                                        <p className="p-md text-white">TelesourceNow is committed to redefining communication standards by 
                                        providing customer-centric solutions, fostering retail success, and enhancing corporate 
                                        communication to empower businesses in today's dynamic market
                                        </p>
                                    </div>
                                </div>
                            </div>	
                        </div>	   
                    </section>	
                </div>	
            </Layout>
        </>
    )
}