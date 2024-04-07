import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
import Tabs1 from "@/components/sections/Tabs1"
import Link from "next/link"
import AboutBreadCrumb from "@/components/sections/AboutBreadCrumb"

export default function AboutUs() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}  breadcrumbTitle={"About us"}>
                <div>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-12">
                                    <div className="mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="text-dark">ABOUT US</h4>
                                        <h5>WE ARE DIFFERENT</h5>
                                        {/* Text */}
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
                                </div>	  {/* END ABOUT TEXT */}
                            </div>    {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END ABOUT-1 */}
                   
                    <div id="brands-2" className="brands-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    {/* Title */}
                                    <p className="p-lg grey-color"> INTEGRATIONS </p>
                                    <ul className="brands-list">
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/airtable.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/calendly.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/googlecalender.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/googlesheet.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/hubspot.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/slack.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/slaesforce.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/zapier.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/zoho.svg" alt="brand-logo" />
                                        </li>
                                    </ul>
                                </div>
                            </div>      {/* End row */}
                        </div>	    {/* End container */}
                    </div>	{/* END BRANDS-2 */}
                    {/* CALL TO ACTION-4
============================================= */}
                    <section id="cta-4" className="bg-06 cta-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* CALL TO ACTION TEXT */}
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
                        {/* End container */}
                    </section>	
                    {/* END CALL TO ACTION-4 */}

                </div>	
                {/* END INNER PAGE WRAPPER */}

            </Layout>
        </>
    )
}