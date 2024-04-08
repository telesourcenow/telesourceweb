import Layout from "@/components/layout/Layout"
import Content4 from "@/components/sections/Content4"
import Faqs1 from "@/components/sections/Faqs1"
import PricingCommon from "@/components/sections/PricingCommon"
import Reviews3 from "@/components/sections/Reviews3"
import Link from "next/link"
import CloudVoiceBreadCrumb from "@/components/sections/CloudVoiceBreadCrumb"

export default function WhatsappAPI() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"WhatsApp API"}>
                <div>

                <section>
                        <div className="container">
                            <div className="row d-flex align-items-center mt-5">
                              <div className="col-md-12 col-lg-12 text-center">
                                    <div className="txt-block pc-25 mb-40">
                                        {/* Title */}
                                        <h4 className="h4-xl">
                                            Connect, Converse, Engage, Sell & offer Support  -WhatsApp Business API.
                                        </h4>
                                        {/* Text */}
                                        <p>
                                            More than 2 Billion people are on WhatsApp, Your business should be too!
                                        </p>
                                    </div>
                              </div>
                            </div>	  
                        </div>    
                </section>

                <section style={{ background: '#6936f5'}}>
                <div className="container mt-5" style={{ background: '#6936f5'}}>
                                <div className="row first-gen-ai-chatbot-row text-justify">
                                    <div className="col-sm-12 col-lg-12 text-center">
                                        <div>
                                            <h5 className="text-white pb-4 text-justify pt-5">
                                            The WhatsApp Business API offers a powerful platform for businesses to engage with their
                                            customers through fast and reliable communication. By integrating with this API, 
                                            businesses can leverage the popularity and convenience of WhatsApp to reach their 
                                            audience more effectively. WhatsApp Business API enables faster and more reliable 
                                            communication:
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="sbox-2">
                                        <h5 className="h5-md text-white">Automation</h5>
                                            <p className="h5-md text-white text-justify">
                                                Businesses can use automation tools to streamline communication processes, 
                                                such as sending automated messages for order confirmations, delivery updates, 
                                                appointment reminders, and more. This helps in providing timely information 
                                                to customers without manual intervention.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="sbox-2">
                                        <h5 className="h5-md text-white">Template Messages</h5>
                                            <p className="h5-md text-white text-justify">
                                                To ensure compliance and maintain a high-quality user experience, WhatsApp 
                                                requires businesses to use predefined message templates for certain types 
                                                of interactions, such as account verification, appointment scheduling, 
                                                and shipping notifications. This helps in standardizing communication 
                                                and ensures that messages are delivered reliably.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="sbox-2">
                                        <h5 className="h5-md text-white"> Security and Privacy</h5>
                                            <p className="h5-md text-white text-justify">
                                                WhatsApp prioritizes user privacy and security, implementing end-to-end 
                                                encryption for all messages sent through the platform. This ensures that 
                                                sensitive information shared between businesses and customers remains 
                                                secure and private.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="sbox-2">
                                        <h5 className="h5-md text-white">Instant Messaging</h5>
                                            <p className="h5-md text-white text-justify">
                                                WhatsApp's instant messaging feature allows businesses to communicate with 
                                                customers in real-time, enabling quick responses to inquiries, support 
                                                requests, and other interactions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                        <h5 className="h5-md text-white">High Deliverability</h5>
                                            <p className="h5-md text-white text-justify">
                                                Messages sent through the WhatsApp Business API typically have high 
                                                deliverability rates, ensuring that your messages reach your intended 
                                                recipients promptly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                        <h5 className="h5-md text-white">Rich Media Support</h5>
                                            <p className="h5-md text-white text-justify">
                                                The API supports various types of rich media, including images, videos, 
                                                documents, and interactive buttons, allowing businesses to create engaging 
                                                and visually appealing messages.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                        <div className="sbox-2">
                                        <h5 className="h5-md text-white">Global Reach</h5>
                                            <p className="h5-md text-white text-justify">
                                                With over 2 billion users worldwide, WhatsApp offers businesses the opportunity 
                                                to reach a vast global audience, enabling them to expand their customer base 
                                                and market their products or services internationally.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-12 text-center">
                                        <div>
                                            <p className="text-white pb-4 pt-4">
                                                <strong>
                                                    Overall, by leveraging the WhatsApp Business API, businesses can enhance their 
                                                    communication capabilities, providing faster, more reliable, and personalized 
                                                    experiences for their customers, leading to improved customer satisfaction 
                                                    and loyalty.
                                                </strong>
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


