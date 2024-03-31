

import Layout from "@/components/layout/Layout"
import Content4 from "@/components/sections/Content4"
import Faqs1 from "@/components/sections/Faqs1"
import PricingCommon from "@/components/sections/PricingCommon"
import Reviews3 from "@/components/sections/Reviews3"
import Link from "next/link"
import CloudVoiceBreadCrumb from "@/components/sections/CloudVoiceBreadCrumb"

export default function CloudVoice() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Cloud Voice"}>
                <div>

                <section id="content-1" className="wide-60 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                              <div className="col-md-12 col-lg-12 text-center">
                                    <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xl">AI enabled Call Management System</h4>
                                        {/* Text */}
                                        <p className="grey-color">
                                            Revamp your communication approach, with our cutting edge AI enabled voice 
                                            control system that raises the bar for interaction.
                                        </p>
                                    </div>
                              </div>
                            </div>	  
                        </div>    
                </section>

                <section  className="pt-80 pb-30 services-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                            <h5 className="h5-md">AI Enabled Call Management System</h5>
                                            <p className="p-sm grey-color">
                                                Boost your business with a custom AI enabled call management solution, from Telesourcenow. 
                                                Simplify call records, recordings and voice prompts seamlessly by teaming up with us.
                                            </p>
                                        </div>
                                </div>
                            </div>	  
                        </div>	   
                    </section>	

                <section  className="pt-80 pb-30 services-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
                                            <h5 className="h5-md">Outbound Calling</h5>
                                            <p className="p-sm grey-color">
                                                Our platform enables you to easily connect with customers and investors via outbound calls
                                                keeping them updated on your releases and maintaining communication. Telesourcenow offers 
                                                an outbound call service, for generating bulk voice calls.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
                                            <h5 className="h5-md">Toll Free Number</h5>
                                            <p className="p-sm grey-color">
                                                Contact Telesourcenow to acquire toll numbers and be listed as 1800 in directories. 
                                                Utilizing a toll number can expand your customer reach across sectors such, as retail, 
                                                marketing and real estate allowing customers to reach out to you without any cost 
                                                implications.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
                                            <h5 className="h5-md">Intractiv Voice Record</h5>
                                            <p className="p-sm grey-color">
                                                Enhancing caller satisfaction can be achieved by incorporating cloud based IVR services 
                                                that offer personalized experiences.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                            <h5 className="h5-md">Virtual Number</h5>
                                            <p className="p-sm grey-color">
                                                Using Virtual Number enables you to effortlessly stay connected, with your customers 
                                                without requiring a team. Incorporating AI technology supports interactions. 
                                                Boosts operational effectiveness.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                            <h5 className="h5-md">Click To Call</h5>
                                            <p className="p-sm grey-color">
                                                Providing clients with the option to ask for a callback can lead to a notable boost, 
                                                in return on investment potentially, up to 152%.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                            <h5 className="h5-md">Campaigns Framing</h5>
                                            <p className="p-sm grey-color">
                                                Unlock the advantages of campaigns using Telesourcenow, which offers customer feedback 
                                                cloud based phone services and automated OTP verification. Connect with us now to discover
                                                these solutions.
                                            </p>
                                        </div>
                                </div>
                            </div>	  
                        </div>	   
                    </section>

                    <Faqs1 />	{/* END FAQs-1 */}
                    {/* CALL TO ACTION-4
				============================================= */}
<PricingCommon />
                </div>

            </Layout>
        </>
    )
}


