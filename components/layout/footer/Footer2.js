import Link from "next/link";

export default function Footer2() {
    return (
        <>
            <footer id="footer-2" className="pt-100 footer division mt-5">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER INFO */}
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Quick Links</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/insights">Insights</Link>
                                    </li>
                                    <li>
                                        <Link href="/join-team">Join Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/contacts">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Products</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <Link href="/cloud-voice">Cloud Voice</Link>
                                    </li>
                                    <li>
                                        <Link href="/gen-ai-chatbot">Gen-AI Chatbot</Link>
                                    </li>
                                    <li>
                                        <Link href="/whatsapp-api">Whatsapp API</Link>
                                    </li>
                                    <li>
                                        <Link href="/web-mail">Web Mail </Link>
                                    </li>
                                    <li>
                                        <Link href="/sms">SMS</Link>
                                    </li>
                                    <li>
                                        <Link href="/crm-solutions">CRM solutions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER PRODUCTS LINKS */}
                        <div className="col-md-3 col-lg-2 col-xl-3">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Services</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <Link href="/tele-calling-solutions">Tele-Calling Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="/managed-sales-process">Managed Sales Process</Link>
                                    </li>
                                    <li>
                                        <Link href="/integrated-marketing-solutions">Integrated Marketing Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="/retail-merchandising-audit">Retail Merchandising & Audit</Link>
                                    </li>
                                    <li>
                                        <Link href="/ecommerce-plugin-content">Ecommerce-PlugIn Content</Link>
                                    </li>
                                    <li>
                                        <Link href="/resource-augmentation">Resource Augmentation</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER COMPANY LINKS */}
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Businesses</h5>
                                {/* Footer Links */}
                                <ul className="clearfix">
                                    <li>
                                        <Link href="/ecommerce">E-Commerce </Link>
                                    </li>
                                    <li>
                                        <Link href="/insurance">Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="/travel-hospitality">Travel & Hospitality</Link>
                                    </li>
                                    <li>
                                        <Link href="/healthcare">Healthcare</Link>
                                    </li>
                                    <li>
                                        <Link href="/financial-services">Financial Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/media">Media</Link>
                                    </li>
                                    <li>
                                        <Link href="/telecommunication">Telecommunication</Link>
                                    </li>
                                    <li>
                                        <Link href="/technologies">Technologies</Link>
                                    </li>
                                    <li>
                                        <Link href="/automotive">Automotive</Link>
                                    </li>
                                    <li>
                                        <Link href="/renewable-power">Renewable Power</Link>
                                    </li>
                                    <li>
                                        <Link href="/government">Government</Link>
                                    </li>
                                    <li>
                                        <Link href="/real-estate-infrastructure">Real Estate & Infrastructure</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div> 
                    <div className="bottom-footer">
                        <div className="row">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col-lg-8">
                                <ul className="bottom-footer-list">
                                    <li>
                                        <p>© Copyright TelesourceNow {new Date().getFullYear()}</p>
                                    </li>
                                    <li>
                                        <p><a href="tel:+918080876443">+91-8080876443</a></p>
                                    </li>
                                    <li>
                                        <p className="last-li">
                                            <a href="mailto:sales@telesourcenow.com">sales@telesourcenow.com</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            {/* FOOTER SOCIALS LINKS */}
                            <div className="col-lg-4 text-right">
                                <ul className="foo-socials text-center clearfix">
                                    <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#" className="ico-twitter"><i className="fab fa-twitter" /></a></li>
                                    {/* <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></a></li> */}
                                    <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr" /></a></li>
                                    <li>
                                        <a 
                                            href="https://www.linkedin.com/company/telesourcenow/?viewAsMember=true" 
                                            target="_blank"
                                            className="ico-tumblr">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="https://wa.me/+918080876443?text=I'm%20interested%20in%20Mark%20Consultant.%20Please%20Share%20me%20more%20details." 
                                            target="_blank"
                                            className="ico-tumblr">
                                            <i className="fab fa-whatsapp" />
                                        </a>
                                    </li>
                                    {/*
									<li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
									<li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>									
									<li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
									<li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
									<li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>								
									<li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>										
									<li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
									<li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
									<li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
								    */}
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div> 
            </footer>

        </>
    )
}
