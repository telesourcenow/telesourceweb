import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer id="footer-3" className="pt-100 footer division">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER LINKS */}
                        <div className="col-md-4 col-lg-2 col-xl-3">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Quick Links</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Case Studies</Link></li>
                                    <li><Link href="#">Testimonials</Link></li>
                                    <li><Link href="#">From the Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Featured Services</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li><Link href="#">Local SEO</Link></li>
                                    <li><Link href="#">Social Media Marketing</Link></li>
                                    <li><Link href="#">Pay Per Click Management</Link></li>
                                    <li><Link href="#">Free SEO Analysis</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <div className="footer-links mb-40">
                                {/* Title */}
                                <h5 className="h5-sm">Our Careers</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Reseller Program</Link></li>
                                    <li><Link href="#">Affiliate Program</Link></li>
                                    <li><Link href="#">Client Rankings</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-lg-4 col-xl-3">
                            <div className="footer-contacts text-center mb-40">
                                {/* Title */}
                                <Link href="mailto:yourdomain@mail.com" className="btn btn-primary tra-black-hover">Get Free Proposal</Link>
                                <ul className="foo-socials text-center clearfix">
                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></Link></li>
                                    <li><Link href="#" className="ico-tumblr"><i className="fab fa-tumblr" /></Link></li>
                                    {/*
									<li><Link href="#" class="ico-behance"><i class="fab fa-behance"></i></Link></li>	
									<li><Link href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></Link></li>									
									<li><Link href="#" class="ico-instagram"><i class="fab fa-instagram"></i></Link></li>	
									<li><Link href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></Link></li>
									<li><Link href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></Link></li>								
									<li><Link href="#" class="ico-youtube"><i class="fab fa-youtube"></i></Link></li>										
									<li><Link href="#" class="ico-vk"><i class="fab fa-vk"></i></Link></li>
									<li><Link href="#" class="ico-yelp"><i class="fab fa-yelp"></i></Link></li>
									<li><Link href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></Link></li>
								    */}
                                </ul>
                                <p className="mt-20">121 King Street, Melbourne,</p>
                                <p>Victoria 3000 Australia</p>
                            </div>
                        </div>
                    </div>	  {/* END FOOTER CONTENT */}
                    {/* BOTTOM FOOTER */}
                    <div className="bottom-footer">
                        <div className="row">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col-lg-8">
                                <ul className="bottom-footer-list">
                                    <li><p>© Copyright Metreex 2020</p></li>
                                    <li><p><Link href="tel:123456789">508.746.9892</Link></p></li>
                                    <li><p className="last-li"><Link href="mailto:yourdomain@mail.com">hello@domain.com</Link></p></li>
                                </ul>
                            </div>
                        </div>
                    </div>	{/* END BOTTOM FOOTER */}
                </div>	   {/* End container */}
            </footer>

        </>
    )
}
