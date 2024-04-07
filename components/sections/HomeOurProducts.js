import React from 'react'
import Link from "next/link"

const HomeOurProducts = () => {
  return (
    <>
      <section>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                            {/* Section SubTitle */}
                            <span className="section-subtitle bluestone-color">Knowledge Of The Market</span>
                            {/* Title 	*/}
                            <h3 className="h3-lg">Our Products</h3>
                            {/* Text */}
                            <p className="p-lg">asasasa a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div> {/* END SECTION TITLE */}
                    {/* SERVICE BOXES */}
                    <div className="row">
                        {/* SERVICE BOX #1 */}
                        <div className="col-sm-6 col-lg-3" >
                            <Link href="/cloud-voice">
                                <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/icons/placeholder-1.png" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">Cloud Voice</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">AI enabled Call Management System</p>
                                    <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #2 */}
                        <div className="col-sm-6 col-lg-3">
                            <Link href="/cloud-voice">
                                <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/icons/online-shop-1.png" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">Gen-AI Chatbot</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Customer Messaging Tools to Improve Customer Experience</p>
                                    <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #3 */}
                        <div className="col-sm-6 col-lg-3">
                            <Link href="/cloud-voice">
                                <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/icons/pie-chart.png" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">Whatsapp API</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Connect, Converse, Engage, Sell & offer Support  -WhatsApp Business API</p>
                                    <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #4 */}
                        <div className="col-sm-6 col-lg-3">
                            <Link href="/cloud-voice">
                                <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/icons/pay-per-click-2.png" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">Web Mail </h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Best Email Service for strong communication</p>
                                    <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #5 */}
                        <div className="col-sm-6 col-lg-4">
                            <Link href="/cloud-voice">
                                <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/icons/pay-per-click-2.png" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">SMS </h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Enterprise SMS Provider</p>
                                    <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #6 */}
                        <div className="col-sm-6 col-lg-4">
                            <Link href="/cloud-voice">
                                <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/icons/pay-per-click-2.png" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">CRM solution </h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Unified Customer Experience Platform:</p>
                                    <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #7 */}
                        <div className="col-sm-6 col-lg-4">
                            <Link href="/cloud-voice">
                                <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/icons/pay-per-click-2.png" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">ERP </h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Streamline Your Operations and Skyrocket Sales with a Custom ERP</p>
                                    <Link href="/tele-calling-solutions" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                    </div> {/* END SERVICE BOXES */}
                </div> {/* End container */}
            </section>
    </>
  )
}

export default HomeOurProducts
