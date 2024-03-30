import Link from "next/link"


export default function Team1({ cls }) {
    return (
        <>
            <section id="team-1" className={`wide-60 team-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Meet Our Leadership Team</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div>
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
                                            <li><Link href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></Link></li>
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
                                            <li><Link href="#" className="ico-youtube"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Team Member Meta */}
                                <div className="tm-meta">
                                    <h5 className="h5-sm">Stephanie Reed</h5>
                                    <span>Senior Advertising Manager</span>
                                    <Link href="mailto:youremail@mail.com">stephanie@domain.com</Link>
                                </div>
                            </div>
                        </div>	{/* END TEAM MEMBER #4 */}
                    </div>	{/* End row */}
                </div>     {/* End container */}
            </section>

        </>
    )
}
