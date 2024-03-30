
import Layout from "@/components/layout/Layout"
import Content4 from "@/components/sections/Content4"
import Faqs1 from "@/components/sections/Faqs1"
import Reviews3 from "@/components/sections/Reviews3"
import Link from "next/link"
import CloudVoiceBreadCrumb from "@/components/sections/CloudVoiceBreadCrumb"

export default function TeleCallingSolutions() {

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
                                        <h4 className="h4-xl">We are Champions</h4>
                                        {/* Text */}
                                        <p>
                                        Supercharge Your Sales Funnel, Customer Engagement Support and Operations With Tailored
                                        Tele-calling Services with Telesourcenow.
                                        </p>
                                        <p>
                                        Telesourcenow offers tailored tele-calling services designed to supercharge your sales 
                                        funnel, enhance customer engagement, and streamline operations. Our team of experienced 
                                        professionals is dedicated to helping your business succeed by providing personalized 
                                        solutions that meet your specific needs. Whether you're looking to generate leads,
                                         nurture prospects, or provide exceptional customer support, we have the expertise and 
                                         resources to help you achieve your goals.
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
                          <h2 className="text-center pb-5">Here's how our tele-calling services can benefit your business:</h2>
                            <div className="row cloud-voice">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-4 col-lg-4">
                                    <div className="inner-section">
                                    <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Increased Sales</h5>
                                       <p> 
                                      Our tele-callers are trained to identify and qualify leads, resulting in a higher 
                                      conversion rate and increased sales for your business.

                                        </p>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-lg-4">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Enhanced Customer Engagement</h5>
                                       <p>
                                       We understand the importance of building strong relationships with your customers. Our 
                                       team engages with your customers in a professional and friendly manner, ensuring a 
                                       positive experience at every touchpoint.
                                       </p>
                                    </div>
                                </div>  
                                </div>

                                <div className="col-md-4 col-lg-4">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Improved Support</h5>
                                       <p> From handling inquiries and resolving issues to providing product information and 
                                        support, our tele-callers are equipped to handle all aspects of customer support, 
                                        leading to higher customer satisfaction and loyalty.</p>
                                    </div>
                                </div>
                                </div>

                                <div className="col-md-6 col-lg-6">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Customized Solutions</h5>
                                       <p>
                                       We work closely with you to understand your business objectives and tailor our services 
                                       to meet your specific requirements. Whether you need help with outbound sales calls, 
                                       inbound customer support, or lead generation, we have the flexibility to adapt to your 
                                       needs.                                      
                                        </p>
                                    </div>
                                </div>
                                </div>

                                <div className="col-md-6 col-lg-6">
                                <div className="inner-section">
                                <div className="wow fadeInLeft" data-wow-delay="0.6s">
                                       <h5>Efficient Operations</h5>
                                       <p>
                                       By outsourcing your tele-calling needs to Telesourcenow, you can free up valuable time 
                                       and resources, allowing you to focus on core business activities and strategic initiatives.
                                       </p>
                                    </div>
                                </div>
                                </div>
                            </div>	
                            <h5 className="text-center text-dark pt-5">
                              <strong>
                              Partnering with Telesourcenow means gaining a trusted ally dedicated to helping you achieve your 
                              sales and customer engagement objectives. Let us help you unlock the full potential of your 
                              business with our tailored tele-calling services.
                              </strong>
                            </h5>  
                            {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-2 */}

                    <section>
                    <div className="container-fluid mt-5">
                      <div className="row d-flex align-items-center">
                        
                      <div className="col-md-6 col-sm-offset-3">
                      <h3 className="text-center">Our Tele-Calling Offering</h3>
                      <table class="table table-dark">
                        <thead>
                          <tr>
                            <th>Outbound Services</th>
                            <th>Customer Experience Management</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Inside sales</td>
                            <td>Inbound Customer Service</td>
                            
                          </tr>
                          <tr>
                            <td>Lead Generation and Fulfilment</td>
                            <td>Retention & Engagement</td>
                          </tr>
                          <tr>
                            <td>Upsell/Cross Sell</td>
                            <td>Escalation Management</td>
                          </tr>
                          <tr>
                            <td>Collections</td>
                            <td>Social Media Monitoring</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Reputation Managemen</td>
                          </tr>
                        </tbody>
                      </table>

                     
                      </div>
                      </div>
                    </div>
                    </section>
                    
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



