import React from 'react'
import Link from "next/link"

const HomeOurProducts = () => {
  return (
    <>
      <section>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-12 section-title">
                            {/* Section SubTitle */}
                            {/* Title 	*/}
                            <h3 className="h3-lg pt-4">Our Products</h3>
                            {/* Text */}
                            <p className="p-lg text-dark">
                                A Telesourcenow communication platform is a centralized digital tool that facilitates 
                                interaction, collaboration, and information sharing among individuals and groups of 
                                enterprises within an organization or community. Here's a general description of such 
                                a platform.
                            </p>
                        </div>
                    </div> {/* END SECTION TITLE */}
                    {/* SERVICE BOXES */}
                    <div className="row">
                        {/* SERVICE BOX #1 */}
                        <div className="col-sm-6 col-lg-4" >
                            <Link href="/cloud-voice">
                                <div className="sbox-2">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/cloud-voice-icon.webp" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">Cloud Voice</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">AI enabled Call Management System</p>
                                    <Link href="/cloud-voice" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #2 */}
                        <div className="col-sm-6 col-lg-4">
                            <Link href="/gen-ai-chatbot">
                                <div className="sbox-2">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/gen-ai-icon.webp" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">Gen-AI Chatbot</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Customer Messaging Tools to Improve Customer Experience</p>
                                    <Link href="/gen-ai-chatbot" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #3 */}
                        <div className="col-sm-6 col-lg-4">
                            <Link href="/whatsapp-api">
                                <div className="sbox-2 ">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/whatsapp-icon.webp" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">Whatsapp API</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Connect, Converse, Engage, Sell & offer Support  -WhatsApp Business API</p>
                                    <Link href="/whatsapp-api" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #4 */}
                        <div className="col-sm-6 col-lg-4">
                            <Link href="/web-mail">
                                <div className="sbox-2">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/web-mail-icon.webp" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">Web Mail </h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Best Email Service for strong communication</p>
                                    <Link href="/web-mail" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #5 */}
                        <div className="col-sm-6 col-lg-4">
                            <Link href="/sms">
                                <div className="sbox-2">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/sms-icon.webp" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">SMS </h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Enterprise SMS Provider</p>
                                    <Link href="/sms" style={{ color: 'purple'}}> Read More...</Link>
                                </div>
                            </Link>
                        </div>
                        {/* SERVICE BOX #6 */}
                        <div className="col-sm-6 col-lg-4">
                            <Link href="/crm-solutions">
                                <div className="sbox-2">
                                    {/* Icon  */}
                                    <img className="img-85" src="/images/crm-icon.webp" alt="feature-icon" />
                                    {/* Title */}
                                    <h5 className="h5-md">CRM solution </h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Unified Customer Experience Platform:</p>
                                    <Link href="/crm-solutions" style={{ color: 'purple'}}> Read More...</Link>
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
