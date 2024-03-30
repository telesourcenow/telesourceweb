import Layout from "@/components/layout/Layout"
import Reviews3 from "@/components/sections/Reviews3"
import Link from "next/link"
export default function Service() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"SEO Services"}>
                <div>
                    <section id="services-2" className="pt-80 pb-30 services-section division">
                        <div className="container">
                            <div className="row">
                                {/* SERVICE BOX #1 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/placeholder-1.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Local SEO</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #2 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/enterprise1.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Enterprise SEO</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #3 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/online-shop-1.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">E-Commerce SEO</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #4 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/strategy.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">UX Evaluation</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #5 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/link-1.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Link-Building</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #6 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/pay-per-click-2.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">PPC Management</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #7 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/pie-chart.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Advanced Analytics</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #8 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/user.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Social Media</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #9 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/computer-1.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Content Marketing</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #10 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/video-player-1.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Video Marketing</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #11 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/email-1.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Email Marketing</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                {/* SERVICE BOX #12 */}
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                            {/* Icon  */}
                                            <img className="img-85" src="/images/icons/responsive.png" alt="feature-icon" />
                                            {/* Title */}
                                            <h5 className="h5-md">Web Development</h5>
                                            {/* Text */}
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>	  {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END SERVICES-2 */}
                    {/* TESTIMONIALS-3
				============================================= */}
                    <Reviews3 />
                    {/* BRANDS-2
				============================================= */}
                    <div id="brands-2" className="brands-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    {/* Title */}
                                    <p className="p-lg grey-color">Used by startups, e-stores, web designers, and teams including:</p>
                                    <ul className="brands-list">
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-2.png" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-3.png" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-4.png" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-5.png" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-6.png" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-7.png" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-8.png" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/brand-9.png" alt="brand-logo" />
                                        </li>
                                    </ul>
                                </div>
                            </div>      {/* End row */}
                        </div>	    {/* End container */}
                    </div>	{/* END BRANDS-2 */}
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
                </div>

            </Layout>
        </>
    )
}