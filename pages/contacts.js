import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"
export default function Contacts() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Contact Us"}>
                <div>
                    <section id="contacts-1" className="wide-60 contacts-section division">
                        <div className="container">
                            <div className="row">
                                
                                {/* CONTACTS INFO */}
                                <div className="col-lg-7">
                                    <div className="contacts-info pc-25">
                                        {/* LOCATION */}
                                        <div className="contact-box">
                                            <h5 className="h5-sm">Pune Address:</h5>
                                            <p className="grey-color">Office No: 102BB, Turning Point NX S.No: 206/3, 
                                            Plot No: 17, behind Phoenix Marketcity, Viman Nagar, Pune - 411014</p>
                                        </div>
                                        <div className="contact-box">
                                            <h5 className="h5-sm">Bangalore Address:</h5>
                                            <p className="grey-color">Office no. 404A Arvind Shambabhin Devrachikenhalli Sennappa 
                                            Layout Bommanahalli Bangalore - 560068</p>
                                        </div>
                                        <div className="contact-box">
                                            <h5 className="h5-sm">Gurugram Address:</h5>
                                            <p className="grey-color">Office no.201, New Office Bajghera Road, Ward No.7, Rajendra Park, 
                                            Palam Vihar, Gurugram, Haryana 122006</p>
                                        </div>
                                        {/* Email */}
                                        <div className="contact-box">
                                            <p className="grey-color"><strong>Email :</strong>
                                                <a href="mailto:sales@telesourcenow.com">sales@telesourcenow.com</a>
                                             </p>
                                            <p className="grey-color"><strong>Phone :</strong>
                                                <a href="tel:+918080876443">+91 8080876443</a> 
                                             </p>
                                        </div>
                                    </div>
                                </div>	
                                {/* END CONTACTS INFO */}

                                {/* CONTACT FORM */}
                                <div className="col-lg-5">
                                    <div className="form-holder mb-40 pc-25">
                                        <form name="contactform" className="row contact-form">
                                            {/* Contact Form Input */}
                                            <div id="input-name" className="col-md-6">
                                                <input type="text" name="name" className="form-control name" placeholder="First Name" required />
                                            </div>
                                            <div id="input-email" className="col-md-6">
                                                <input type="text" name="email" className="form-control email" placeholder="Last Name" required />
                                            </div>
                                            <div id="input-name" className="col-md-6">
                                                <input type="text" name="name" className="form-control name" placeholder="Company Name" required />
                                            </div>
                                            <div id="input-email" className="col-md-6">
                                                <input type="text" name="email" className="form-control email" placeholder="Work Email" required />
                                            </div>
                                            <div id="input-name" className="col-md-6">
                                                <input type="text" name="name" className="form-control name" placeholder="Mobile Number" required />
                                            </div>
                                            <div id="input-email" className="col-md-6">
                                                <input type="text" name="email" className="form-control email" placeholder="Services & Products" />
                                            </div>
                                            <div id="input-message" className="col-md-12 input-message">
                                                <textarea className="form-control" name="message" rows={2} placeholder="Your Message ..." />
                                            </div>
                                            {/* Contact Form Button */}
                                            <div className="col-lg-12 mt-10 form-btn text-right">
                                                <button type="submit" className="btn btn-md btn-green deepgreen-hover submit">Send Message</button>
                                            </div>
                                            {/* Contact Form Message */}
                                            <div className="col-lg-12 contact-form-msg">
                                                <span className="loading" />
                                            </div>
                                        </form>
                                    </div>
                                </div>	
                                {/* END CONTACT FORM */}

                            </div>	  {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END CONTACTS-1 */}
                    <PricingCommon />
                </div>
            </Layout>
        </>
    )
}