import Layout from "@/components/layout/Layout"
import Brands1 from "@/components/sections/Brands1"
import PricingCommon from "@/components/sections/PricingCommon"

export default function EcommercePlugInContent() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark">
                <div>

                <section className="ecommerce-plugin-content-bg">
                        <div className="container-fluid pt-5">
                            <div className="row d-flex align-items-center">
                              <div className="col-md-12 col-lg-12 col-sm-12 text-center pt-4">
                                    <div className="txt-block pc-25 mb-40">
                                        <h4 className="h4-xl pt-2 text-white">Ecommerce-PlugIn Content</h4>
                                        <p className="text-white text-bolder"> 
                                            Dynamic and engaging content to enhance online product listings
                                        </p>
                                        <p className="text-white text-bolder">
                                            Increase product visibility and drive sales conversions through optimized content
                                        </p>
                                    </div>
                              </div>
                            </div>  
                        </div>    
                </section>

                <section>
                        <div className="container pb-60">
                            <div className="row d-flex">
                              <div className="col-md-12 col-sm-12">
                                    <div className="txt-block">
                                        {/* Title */}
                                        <h4 className="h4-xl pt-4 text-dark text-center">Enhancing Your Online Store with Dynamic Ecommerce Plugin Content</h4>
                                        {/* Text */}
                                        <p className="text-dark">
                                            Elevate your online store with dynamic Ecommerce content. Our solutions enhance 
                                            product visibility and drive conversions, capturing customer attention to 
                                            maximize sales potential. Partner with us to transform your ecommerce strategy 
                                            and accelerate growth.
                                        </p>
                                    </div>
                              </div>
                            </div>	  
                        </div>    
                </section>

                <section>
                    <div className="container pb-60">
                    <div className="row d-flex">
                                <div className="col-md-6 col-sm-12">
                                    <h5 className="pt-40">Comprehensive Ecommerce Solutions by Telesourcenow</h5>
                                        <p>
                                            Our experts specialize in developing new e-commerce stores and modifying existing 
                                            websites to help you attract more clients. We assist in setting up your online 
                                            presence to drive customer engagement and create personalized shopping experiences. 
                                            With Telesourcenow., we offer a full suite of e-commerce 
                                            development services, including strategy, integration, development, migration, 
                                            and marketing. Additionally, we provide maintenance and support to ensure 
                                            your e-commerce store is available 24/7. Our e-commerce solutions are robust, 
                                            secure, and efficient, tailored to meet the needs of businesses of all sizes. 
                                            We have expertise in industries such as food and healthcare, manufacturing, 
                                            sports, and fitness.
                                        </p>
                                        <p>
                                            We also offer digital marketing strategies to enhance customer experience, 
                                            engagement, retention, revenue, and sales for your e-commerce store. Our services 
                                            cover simplifying and streamlining in-store processes, reducing abandoned carts,
                                             managing supply chain disruptions, and transitioning customers from offline to 
                                             online. Whether you need a new e-commerce website, a redesign, or revamping 
                                             services, our expert team provides end-to-end e-commerce solutions encompassing 
                                             planning, design, development, and marketing services.
                                        </p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <img className="img-fluid" src="/images/ecommerce-plugin.webp" alt="about-image" />
                                </div>
                            </div>
                    </div>
                </section>


                <section  className="pt-2 pb-30 services-section division"  style={{ background: '#6936f5'}}>
                        <div className="container">
                            <div className="row d-flex align-items-center justify-content-center">
                              <div className="col-md-offset-7 col-md-7 col-sm-12 text-center">
                                    <div className="txt-block">
                                        <h4 className="h4-xl pt-2 pb-2 text-white">Elements we offer in Ecommerce Website</h4>
                                    </div>
                              </div>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-sm-12 col-lg-4 text-center">
                                        <div className="sbox-2">
                                            <img className="img-fluid" style={{ width: '100px'}} src="/images/quick-invoicing.png" alt="about-image" />
                                            <h5 className="h5-md ">Quick Invoicing</h5>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 text-center">
                                        <div className="sbox-2">
                                            <img className="img-fluid" style={{ width: '100px'}} src="/images/cart-development.png" alt="about-image" />
                                            <h5 className="h5-md ">Cart Development</h5>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 text-center">
                                        <div className="sbox-2">
                                            <img className="img-fluid" style={{ width: '100px'}} src="/images/responsive-website.png" alt="about-image" />
                                            <h5 className="h5-md ">Responsive Website</h5>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 text-center">
                                        <div className="sbox-2">
                                            <img className="img-fluid" style={{ width: '100px'}} src="/images/plugin-development.png" alt="about-image" />
                                            <h5 className="h5-md ">Plug-in Development</h5>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 text-center">
                                        <div className="sbox-2">
                                            <img className="img-fluid" style={{ width: '100px'}} src="/images/regularcustomization.png" alt="about-image" />
                                            <h5 className="h5-md ">Regular Customization</h5>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 text-center">
                                        <div className="sbox-2">
                                            <img className="img-fluid" style={{ width: '100px'}} src="/images/payment-gateway-integration.png" alt="about-image" />
                                            <h5 className="h5-md ">Payment Gateway Integration</h5>
                                        </div>
                                </div>
                            </div>
                        </div>	  
                </section>

                <Brands1 cls={"bg-purple bg-pattern "} style={1} />
                </div>

            </Layout>
        </>
    )
}


