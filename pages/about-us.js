import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Reviews3 from "@/components/sections/Reviews3"
import Statistic1 from "@/components/sections/Statistic1"
import Tabs1 from "@/components/sections/Tabs1"
import Link from "next/link"
import AboutBreadCrumb from "@/components/sections/AboutBreadCrumb"

export default function AboutUs() {

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                headerCls="white-menu navbar-dark"
                // breadcrumbTitle={"About TelesourceNow"}
            >
                <AboutBreadCrumb />
                <div className="inner-page-wrapper">

                    <section id="about-1" className="wide-60 about-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* ABOUT IMAGE */}
                                {/* <div className="col-md-5 col-lg-6">
                                    <div className="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                        <img className="img-fluid" src="/images/image-01.png" alt="about-image" />
                                    </div>
                                </div> */}
                                {/* ABOUT TEXT */}
                                <div className="col-md-12 col-lg-12">
                                    <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xl">ABOUT US</h4>
                                        <h5>WE ARE DIFFERENT</h5>
                                        {/* Text */}
                                        <p>
                                            Welcome to TelesourceNow, a provider of business services that is shaping the future 
                                            with boundless possibilities.
                                        </p>
                                        <p>We offer cutting edge technology enabled solutions to empower the worlds brands, 
                                            in optimizing their operations in sustainable ways all with the aim of achieving 
                                            their business objectives.
                                        </p>
                                        <p>
                                            Our dedication to excellence permeates every aspect of our work positioning us as a 
                                            driving force, for businesses embracing a future characterized by AI innovation 
                                            and unprecedented accomplishments.
                                        </p>
                                    </div>
                                </div>	  {/* END ABOUT TEXT */}
                            </div>    {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END ABOUT-1 */}
                    {/* SERVICES-2
============================================= */}

                    {/* <section id="services-2" className="bg-lightgrey wide-30 services-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                                    <h3 className="h3-lg">Custom SEO Services – Our Specialty</h3>
                                    <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                        tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                                    </p>
                                </div>
                            </div>	
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
                                            <img className="img-85" src="/images/icons/placeholder-1.png" alt="feature-icon" />
                                            <h5 className="h5-md">Local SEO</h5>
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
                                            <img className="img-85" src="/images/icons/online-shop-1.png" alt="feature-icon" />
                                            <h5 className="h5-md">E-Commerce SEO</h5>
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
                                            <img className="img-85" src="/images/icons/pie-chart.png" alt="feature-icon" />
                                            <h5 className="h5-md">Advanced Analytics</h5>
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <Link href="/service-details">
                                        <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                                            <img className="img-85" src="/images/icons/pay-per-click-2.png" alt="feature-icon" />
                                            <h5 className="h5-md">PPC Management</h5>
                                            <p className="p-sm grey-color">Porta semper lacus cursus feugiat and primis ultrice</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>	
                        </div>	   
                    </section>	 */}

                    {/* END SERVICES-2 */}
                    {/* ABOUT-2
============================================= */}
                    {/* <About2 cls="wide-60" /> */}
                    {/* STATISTIC-1
============================================= */}
                    {/* <Statistic1 cls={"bg-06"} /> */}
                    {/* TABS-1
============================================= */}
                    {/* <Tabs1 /> */}
                    {/* TESTIMONIALS-3
============================================= */}
                    {/* <Reviews3 /> */}
                    {/* BRANDS-2
============================================= */}
                    <div id="brands-2" className="brands-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    {/* Title */}
                                    <p className="p-lg grey-color"> INTEGRATIONS </p>
                                    <ul className="brands-list">
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/airtable.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/calendly.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/googlecalender.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/googlesheet.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/hubspot.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/slack.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/slaesforce.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/zapier.svg" alt="brand-logo" />
                                        </li>
                                        {/* BRAND LOGO IMAGE */}
                                        <li className="brand-logo">
                                            <img className="img-fluid" src="/images/zoho.svg" alt="brand-logo" />
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
                                <div className="col-lg-6">
                                    <div className="cta-txt">
                                        <h3 className="h3-xs">OUR VISION</h3>
                                        <p className="p-md">To be the go-to partner for businesses seeking exceptional customer 
                                        experiences, innovative solutions, and unparalleled corporate communication strategies.
                                        </p>
                                    </div>
                                </div>	

                                <div className="col-lg-6">
                                    <div className="cta-txt">
                                        <h3 className="h3-xs">OUR MISSION</h3>
                                        <p className="p-md">TelesourceNow is committed to redefining communication standards by 
                                        providing customer-centric solutions, fostering retail success, and enhancing corporate 
                                        communication to empower businesses in today's dynamic market
                                        </p>
                                    </div>
                                </div>

                            </div>	
                        </div>	   
                        {/* End container */}
                    </section>	
                    {/* END CALL TO ACTION-4 */}

                </div>	
                {/* END INNER PAGE WRAPPER */}

            </Layout>
        </>
    )
}