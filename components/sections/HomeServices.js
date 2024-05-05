import React from 'react'
import Link from "next/link"

const HomeServices = () => {
  return (
    <div>
        <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 section-title">
                            <h3 className="h3-lg pt-4">Our Services</h3>
                            <p className="p-lg text-dark">
                                A Telesourcenow offers a diverse array of services aimed at enhancing various aspects of business 
                                operations. services is aimed at addressing specific needs and challenges faced by businesses 
                                across various industries. By leveraging Telesourcenow's expertise and resources, businesses 
                                can streamline their operations, improve efficiency, and achieve their business objectives 
                                more effectively.
                            </p>
                        </div>
                    </div>
                    {/* SERVICE BOXES */}
                    <div className="services-boxes">
                        <div className="row">
                            <div className="col-md-6">
                            <Link href="/tele-calling-solutions">
                            <div className="sbox-4 icon-md">
                                    <img className="img-65" src="/images/tele-calling-solutions-icon.webp" alt="feature-icon" />
                                    <div className="sbox-4-txt">
                                       
                                        <h5 className="h5-lg">Tele-Calling Solutions</h5>

                                        <p className="grey-color">
                                        Amplify your Business - "Scale Sales, Engage Faster With ROI-Driven"
                                        </p>
                                        <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                    
                                </div>
                            </Link>
                            </div>
                            <div className="col-md-6">
                            <Link href="/managed-sales-process">
                            <div className="sbox-4 icon-md">
                                    <img className="img-65" src="/images/managed-sales-process-icon.webp" alt="feature-icon" />
                                    <div className="sbox-4-txt">
                                       
                                        <h5 className="h5-lg">Managed Sales Process</h5>

                                        <p className="grey-color">
                                        Amplify Your Sales Team, with Telesourcenows Ready Made Teams.
                                        </p>
                                        <Link href="/managed-sales-process" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div className="col-md-6">
                            <Link href="/integrated-marketing-solutions">
                            <div className="sbox-4 icon-md">
                                    <img className="img-65" src="/images/integrated-marketing-solution-icon.webp" alt="feature-icon" />
                                    <div className="sbox-4-txt">
                                       
                                        <h5 className="h5-lg">Integrated Marketing <br /> Solutions</h5>

                                        <p className="grey-color">
                                            Comprehensive Solutions Tailored to Your Needs
                                        </p>
                                        <Link href="/integrated-marketing-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div className="col-md-6">
                            <Link href="/retail-merchandising-audit">
                            <div className="sbox-4 icon-md">
                                    <img className="img-65" src="/images/retail-merchandising-audit-icon.webp" alt="feature-icon" />
                                    <div className="sbox-4-txt">
                                       
                                        <h5 className="h5-lg">Retail Merchandising & Audit</h5>

                                        <p className="grey-color">
                                        Unleash the Power of Retail Merchandising & Audits with Telesourcenow
                                        </p>
                                        <Link href="/retail-merchandising-audit" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div className="col-md-6">
                            <Link href="/ecommerce-plugin-content">
                            <div className="sbox-4 icon-md">
                                    <img className="img-65" src="/images/ecommerce-plugin-content-icon.webp" alt="feature-icon" />
                                    <div className="sbox-4-txt">
                                       
                                        <h5 className="h5-lg">Ecommerce-PlugIn Content</h5>

                                        <p className="grey-color">
                                        Our experts are skilled with developing first e-commerce store or modifying an 
                                        existing website for our clients.
                                        </p>
                                        <Link href="/ecommerce-plugin-content" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div className="col-md-6">
                            <Link href="/resource-augmentation">
                            <div className="sbox-4 icon-md">
                                    <img className="img-65" src="/images/resource-augmentation-icon.webp" alt="feature-icon" />
                                    <div className="sbox-4-txt">
                                       
                                        <h5 className="h5-lg">Resource Augmentation</h5>

                                        <p className="grey-color">
                                        Boost Agility and Expertise with Resource Augmentation by Telesourcenow
                                        </p>
                                        <Link href="/resource-augmentation" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        </div> 
                    </div> 
                </div> 
        </section>
    </div>
  )
}

export default HomeServices
