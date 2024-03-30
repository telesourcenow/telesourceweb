

import Layout from "@/components/layout/Layout"
import Content4 from "@/components/sections/Content4"
import Faqs1 from "@/components/sections/Faqs1"
import Reviews3 from "@/components/sections/Reviews3"
import Link from "next/link"
import CloudVoiceBreadCrumb from "@/components/sections/CloudVoiceBreadCrumb"

export default function CloudVoice() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark">
                <div>
                    {/* CONTENT-1
				============================================= */}
                  {/* banner */}
                  <CloudVoiceBreadCrumb />
                 	{/* END CONTACTS-1 */}
                {/* bannerEnd */}

                    <section id="content-1" className="wide-60 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">


                              <div className="col-md-12 col-lg-12 text-center">
                                    <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xl">AI Enabled Call Management System</h4>
                                        {/* Text */}
                                        <p>
                                        Boost your business with a custom AI enabled call management solution, from Telesourcenow. 
                                        Simplify call records, recordings and voice prompts seamlessly by teaming up with us.
                                        </p>
                                    </div>
                              </div>
                            </div>	  {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-1 */}
                    {/* CONTENT-2
				============================================= */}
                    <section className="bg-lightgrey wide-60 content-section division" style={{ backgroundColor: '#ecf2f4'}}>
                        <div className="container-fluid">
                            <div className="row cloud-voice">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-4 col-lg-4">
                                    <div className="inner-section">
                                    <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Outbound Calling</h5>
                                       <p>Our platform enables you to easily connect with customers and investors via outbound 
                                        calls keeping them updated on your releases and maintaining communication. Telesourcenow offers an outbound call service, for generating bulk voice calls.</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-lg-4">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Toll Free Number</h5>
                                       <p>
                                       Contact Telesourcenow to acquire toll numbers and be listed as 1800 in directories. 
                                       Utilizing a toll number can expand your customer reach across sectors such, as retail,
                                        marketing and real estate allowing customers to reach out to you without any cost implications.
                                       </p>
                                    </div>
                                </div>  
                                </div>

                                <div className="col-md-4 col-lg-4">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Intractiv Voice Record</h5>
                                       <p>Enhancing caller satisfaction can be achieved by incorporating cloud based 
                                        IVR services that offer personalized experiences.</p>
                                    </div>
                                </div>
                                </div>

                                <div className="col-md-4 col-lg-4">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Virtual Number</h5>
                                       <p>
                                       Using Virtual Number enables you to effortlessly stay connected, with your customers 
                                       without requiring a team. Incorporating AI technology supports interactions. Boosts operational effectiveness.
                                       </p>
                                    </div>
                                </div>
                                </div>

                                <div className="col-md-4 col-lg-4">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Click To Call</h5>
                                       <p>
                                       Providing clients with the option to ask for a callback can lead to a notable boost, 
                                       in return on investment potentially, up to 152%.
                                       </p>
                                    </div>
                                </div>
                                </div>

                                <div className="col-md-4 col-lg-4">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Campaigns Framing</h5>
                                       <p>
                                       Unlock the advantages of campaigns using Telesourcenow, which offers customer feedback 
                                       cloud based phone services and automated OTP verification. Connect with us now to discover these solutions.
                                       </p>
                                    </div>
                                </div>
                                </div>

                            </div>	  
                            {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-2 */}
                    
                    <Faqs1 />	{/* END FAQs-1 */}
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


