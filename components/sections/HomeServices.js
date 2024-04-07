import React from 'react'
import Link from "next/link"

const HomeServices = () => {
  return (
    <div>
      <section>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Section SubTitle */}
                            <span className="section-subtitle bluestone-color">Explore Our Services</span>
                            {/* Title 	*/}
                            <h3 className="h3-lg">SEO Management  Strategy Services</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div>
                    {/* SERVICE BOXES */}
                    <div className="services-boxes">
                        <div className="row">
                            {/* SERVICE BOX #1 */}
                            <div className="col-md-6">
                            <Link href="/tele-calling-solutions">
                            <div className="sbox-4 icon-md">
                                    {/* Icon */}
                                    <img className="img-65" src="/images/icons/analytics-2.png" alt="feature-icon" />
                                    {/* Text */}
                                    <div className="sbox-4-txt">
                                        {/* Title */}
                                        <h5 className="h5-lg">Tele-Calling Solutions</h5>
                                        {/* Text */}
                                        <p className="grey-color">
                                        Amplify your Business - "Scale Sales, Engage Faster With ROI-Driven"
                                        </p>
                                        <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                    
                                </div>
                            </Link>
                            
                            </div>
                            {/* SERVICE BOX #2 */}
                            <div className="col-md-6">
                            <Link href="/tele-calling-solutions">
                            <div className="sbox-4 icon-md">
                                    {/* Icon */}
                                    <img className="img-65" src="/images/icons/email-1.png" alt="feature-icon" />
                                    {/* Text */}
                                    <div className="sbox-4-txt">
                                        {/* Title */}
                                        <h5 className="h5-lg">Managed Sales Process</h5>
                                        {/* Text */}
                                        <p className="grey-color">
                                        Amplify Your Sales Team, with Telesourcenows Ready Made Teams.
                                        </p>
                                        <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            {/* SERVICE BOX #3 */}
                            <div className="col-md-6">
                            <Link href="/tele-calling-solutions">
                            <div className="sbox-4 icon-md">
                                    {/* Icon */}
                                    <img className="img-65" src="/images/icons/video-player-1.png" alt="feature-icon" />
                                    {/* Text */}
                                    <div className="sbox-4-txt">
                                        {/* Title */}
                                        <h5 className="h5-lg">Ecommerce-PlugIn</h5>
                                        {/* Text */}
                                        <p className="grey-color">
                                        Our experts are skilled with developing first e-commerce store or modifying an 
                                        existing website for our clients.
                                        </p>
                                        <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            {/* SERVICE BOX #4 */}
                            <div className="col-md-6">
                            <Link href="/tele-calling-solutions">
                            <div className="sbox-4 icon-md">
                                    {/* Icon */}
                                    <img className="img-65" src="/images/icons/price-tag.png" alt="feature-icon" />
                                    {/* Text */}
                                    <div className="sbox-4-txt">
                                        {/* Title */}
                                        <h5 className="h5-lg">Retail Merchandising & Audit</h5>
                                        {/* Text */}
                                        <p className="grey-color">
                                        Unleash the Power of Retail Merchandising & Audits with Telesourcenow
                                        </p>
                                        <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            {/* SERVICE BOX #5 */}
                            <div className="col-md-6">
                            <Link href="/tele-calling-solutions">
                            <div className="sbox-4 icon-md">
                                    {/* Icon */}
                                    <img className="img-65" src="/images/icons/pay-per-click-3.png" alt="feature-icon" />
                                    {/* Text */}
                                    <div className="sbox-4-txt">
                                        {/* Title */}
                                        <h5 className="h5-lg">Resource Augmentation</h5>
                                        {/* Text */}
                                        <p className="grey-color">
                                        Boost Agility and Expertise with Resource Augmentation by Telesourcenow
                                        </p>
                                        <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            {/* SERVICE BOX #6 */}
                            <div className="col-md-6">
                            <Link href="/tele-calling-solutions">
                            <div className="sbox-4 icon-md">
                                    {/* Icon */}
                                    <img className="img-65" src="/images/icons/chat.png" alt="feature-icon" />
                                    {/* Text */}
                                    <div className="sbox-4-txt">
                                        {/* Title */}
                                        <h5 className="h5-lg">Cloud Transformation</h5>
                                        {/* Text */}
                                        <p className="grey-color">
                                        Cloud is the bedrock on which digital innovation is taking flight.    
                                        </p>
                                        <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        </div> {/* End row */}
                    </div> {/* END SERVICE BOXES */}
                </div> {/* End container */}
            </section>
    </div>
  )
}

export default HomeServices
