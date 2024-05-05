import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '@/components/layout/Layout';
import PricingCommon from '@/components/sections/PricingCommon';


// const SERVICE_ID = 'service_s6r3ubx';
// const TEMPLATE_ID = 'template_l1bd19w';
// const USER_ID = 'tAougbi2rsI1RqftQ';

export default function Contacts() {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_s6r3ubx', 'template_l1bd19w', form.current, {
            publicKey: 'tAougbi2rsI1RqftQ',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setEmailSent(true); // Set state to indicate email was sent successfully
                form.current.reset(); // Reset the form after successful submission
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
};

    
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
                                        <form className="row contact-form" ref={form} onSubmit={sendEmail}>
                                            {/* Contact Form Input */}
                                            <div id="input-name" className="col-md-6">
                                                <input type="text" name="first_name" className="form-control name" placeholder="First Name" required />
                                            </div>
                                            <div id="input-email" className="col-md-6">
                                                <input type="text" name="last_name" className="form-control email" placeholder="Last Name" required />
                                            </div>
                                            <div id="input-name" className="col-md-6">
                                                <input type="text" name="company_name" className="form-control name" placeholder="Company Name" required />
                                            </div>
                                            <div id="input-email" className="col-md-6">
                                                <input type="email" name="work_email" className="form-control email" placeholder="Work Email" required />
                                            </div>
                                            <div id="input-name" className="col-md-6">
                                                <input type="text" name="mobile_number" className="form-control name" placeholder="Mobile Number" required />
                                            </div>
                                            <div id="input-email" className="col-md-6">
                                                <input type="text" name="service_and_product" className="form-control email" placeholder="Services & Products" />
                                            </div>
                                            <div id="input-message" className="col-md-12 input-message">
                                                <textarea className="form-control" name="notes" rows={1} placeholder="Your Message ..." />
                                            </div>
                                            {/* Contact Form Button */}
                                            <div className="col-lg-12 mt-10 form-btn text-center">
                                                <button type="submit" className="btn btn-md btn-green deepgreen-hover submit">Send Message</button>
                                            </div>
                                        </form>
                                        {emailSent && (
                                            <p className="text-success mt-3">Message sent successfully!</p>
                                        )}
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