import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Team() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Our Marketing Team"}>

                <section id="team-2" className="wide-60 team-section division">
                    <div className="container">
                        <div className="row">
                            {/* TEAM MEMBER #1 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-1.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Sam Richardson</h5>
                                        <span>President</span>
                                        <Link href="mailto:youremail@mail.com">sam_r@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #1 */}
                            {/* TEAM MEMBER #2 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-2.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Jennifer Harper</h5>
                                        <span>Director of Operations</span>
                                        <Link href="mailto:youremail@mail.com">jennifer@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #2 */}
                            {/* TEAM MEMBER #3 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-3.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Jonathan Coronado</h5>
                                        <span>Market Analysis Expert</span>
                                        <Link href="mailto:youremail@mail.com">jonathan@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #3 */}
                            {/* TEAM MEMBER #4 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="1s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-4.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Stephanie Reed</h5>
                                        <span>Digital Advertising Manager</span>
                                        <Link href="mailto:youremail@mail.com">stephanie@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #4 */}
                            {/* TEAM MEMBER #5 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-5.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Daniel Wells</h5>
                                        <span>Senior Marketing Manager</span>
                                        <Link href="mailto:youremail@mail.com">daniel@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #5 */}
                            {/* TEAM MEMBER #6 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-6.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-youtube"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Brandon Morgan</h5>
                                        <span>SEO Analyst</span>
                                        <Link href="mailto:youremail@mail.com">brandon@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #6 */}
                            {/* TEAM MEMBER #7 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-7.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Selena Sanchez</h5>
                                        <span>SEO Analyst</span>
                                        <Link href="mailto:youremail@mail.com">selena@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #7 */}
                            {/* TEAM MEMBER #8 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="1s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-8.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-youtube"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Spencer Singh</h5>
                                        <span>SEM Specialist</span>
                                        <Link href="mailto:youremail@mail.com">spencer@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #8 */}
                            {/* TEAM MEMBER #9 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="1.2s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-9.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#" className="ico-pinterest"><i className="fab fa-pinterest-p" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Tiffany McKenzie</h5>
                                        <span>Social Media Strategist</span>
                                        <Link href="mailto:youremail@mail.com">tiffany@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #9 */}
                            {/* TEAM MEMBER #10 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="1.4s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-10.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-youtube"><i className="fab fa-youtube" /></Link></li>
                                                <li><Link href="#" className="ico-pinterest"><i className="fab fa-pinterest-p" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Amber Miller</h5>
                                        <span>Web Project Manager</span>
                                        <Link href="mailto:youremail@mail.com">amber@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #10 */}
                            {/* TEAM MEMBER #11 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="1.6s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-11.jpg" alt="team-member-foto" />
                                        {/* Social Icons */}
                                        <div className="tm-social clearfix">
                                            <ul className="text-center clearfix">
                                                <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Craig White</h5>
                                        <span>Web Support Developer</span>
                                        <Link href="mailto:youremail@mail.com">craig@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #11 */}
                            {/* TEAM MEMBER #12 */}
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="1.8s">
                                <div className="team-member">
                                    {/* Team Member Photo */}
                                    <div className="team-member-photo">
                                        <img className="img-fluid" src="/images/team-12.jpg" alt="team-member-foto" />
                                    </div>
                                    {/* Team Member Meta */}
                                    <div className="tm-meta">
                                        <h5 className="h5-sm">Grow With Us</h5>
                                        <Link href="mailto:youremail@mail.com">hireme@domain.com</Link>
                                        <Link href="mailto:youremail@mail.com">hireme1@domain.com</Link>
                                    </div>
                                </div>
                            </div>	{/* END TEAM MEMBER #12 */}
                        </div>	  {/* End row */}
                    </div>     {/* End container */}
                </section>	{/* END TEAM-2 */}
                {/* CALL TO ACTION-4
				============================================= */}
                <section id="cta-4" className="bg-06 cta-section division">
                    <div className="container white-color">
                        <div className="row d-flex align-items-center">
                            {/* CALL TO ACTION TEXT */}
                            <div className="col-lg-8">
                                <div className="cta-txt">
                                    {/* Title */}
                                    <h3 className="h3-xs">Improve your search ranking now!</h3>
                                    {/* Text */}
                                    <p className="p-md">Donec vel sapien augue integer urna vel turpis cursus porta, mauris sed augue
                                        luctus dolor velna auctor congue tempus magna integer
                                    </p>
                                </div>
                            </div>	{/* END CALL TO ACTION TEXT */}
                            {/* CALL TO ACTION BUTTON */}
                            <div className="col-lg-4">
                                <div className="cta-btn text-right">
                                    <Link href="/pricing" className="btn btn-md btn-primary tra-white-hover">Get Started Now</Link>
                                </div>
                            </div>
                        </div>	 {/* End row */}
                    </div>	   {/* End container */}
                </section>	{/* END CALL TO ACTION-4 */}


            </Layout>
        </>
    )
}