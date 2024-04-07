
export default function Footer2() {
    return (
        <>
            <footer id="footer-2" className="pt-100 footer division mt-5">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER INFO */}
                        <div className="col-md-10 col-lg-4">
                            {/* CONTACT FORM */}
                            <div className="col-lg-5">
                                    <div className="form-holder mb-40 pc-25">
                                       
                                    </div>
                                </div>	
                                {/* END CONTACT FORM */}
                        </div>
                        {/* FOOTER PRODUCTS LINKS */}
                        <div className="col-md-3 col-lg-2 col-xl-2">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Quick Links</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Case Studies</a></li>
                                    <li><a href="#">Lawyer SEO</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">From the Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER COMPANY LINKS */}
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Featured Services</h5>
                                {/* Footer Links */}
                                <ul className="clearfix">
                                    <li><a href="#">Local SEO</a></li>
                                    <li><a href="#">Social Media Marketing</a></li>
                                    <li><a href="#">Pay Per Click Management</a></li>
                                    <li><a href="#">Search Engine Optimization</a></li>
                                    <li><a href="#">Free SEO Analysis</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER NEWSLETTER FORM */}
                        <div className="col-md-3 col-lg-2 col-xl-2">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Quick Links</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Case Studies</a></li>
                                    <li><a href="#">Lawyer SEO</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">From the Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* END FOOTER NEWSLETTER FORM */}
                    </div> {/* END FOOTER CONTENT */}
                    {/* BOTTOM FOOTER */}
                    <div className="bottom-footer">
                        <div className="row">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col-lg-8">
                                <ul className="bottom-footer-list">
                                    <li>
                                        <p>© Copyright TelesourceNow {new Date().getFullYear()}</p>
                                    </li>
                                    <li>
                                        <p><a href="tel:8080876443">8080876443</a></p>
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
                                    <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></a></li>
                                    <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr" /></a></li>
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
                    </div> {/* END BOTTOM FOOTER */}
                </div> {/* End container */}
            </footer>

        </>
    )
}
