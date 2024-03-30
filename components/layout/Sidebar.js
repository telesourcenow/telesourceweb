import Link from "next/link"
import { useState } from 'react'
export default function Sidebar() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="wsmenu-list">
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/about-us">About</Link></li>
                {/* DROPDOWN MENU */}
                <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle(1)}><i className="wsmenu-arrow" /></span>
                    <Link href="#">Pages <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix halfmenu"
                        style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
                    >
                        <div className="container-fluid">
                            <div className="row">
                                {/* Links */}
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li>
                                        <Link href="/about-us">About Us Page</Link></li>
                                    <li>
                                        <Link href="/services">Services Page</Link></li>
                                    <li>
                                        <Link href="/service-details">Service Details Page</Link></li>
                                    <li>
                                        <Link href="/case-studies-1">Case Studies #1</Link></li>
                                    <li>
                                        <Link href="/case-studies-2">Case Studies #2</Link></li>
                                    <li>
                                        <Link href="/project-details">Single Project Page</Link></li>
                                    <li>
                                        <Link href="/reviews">Customers Reviews</Link></li>
                                </ul>
                                {/* Links */}
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li>
                                        <Link href="/resources">Resources Page</Link></li>
                                    <li>
                                        <Link href="/pricing">Pricing Page</Link></li>
                                    <li>
                                        <Link href="/team">Our Team Page</Link></li>
                                    <li>
                                        <Link href="/faqs">FAQs Page</Link></li>
                                    <li>
                                        <Link href="/blog-listing">Blog Listing Page</Link></li>
                                    <li>
                                        <Link href="/single-post">Single Blog Post</Link></li>
                                    <li>
                                        <Link href="/contats">Contact Us Page</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li> {/* END DROPDOWN MENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/services">Services</Link></li>
                {/* MEGAMENU */}
                <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle(2)}><i className="wsmenu-arrow" /></span>
                    <Link href="#">Mega Menu <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix"
                        style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
                    >
                        <div className="container">
                            <div className="row">
                                {/* MEGAMENU QUICK LINKS */}
                                <div className="col-md-12 col-lg-3">
                                    {/* Title */}
                                    <h3 className="title">Marketing Solutions:</h3>
                                    <ul className="link-list">
                                        <li>
                                            <Link href="#">Search Engine Optimization</Link></li>
                                        <li>
                                            <Link href="#">Web Design  Development</Link></li>
                                        <li>
                                            <Link href="#">Social Media Marketing</Link></li>
                                        <li>
                                            <Link href="#">Pay per Click (PPC)</Link></li>
                                        <li>
                                            <Link href="#">Video Production</Link></li>
                                        <li>
                                            <Link href="#">Content Marketing</Link></li>
                                        <li>
                                            <Link href="#">Email Marketing Campaigns</Link></li>
                                    </ul>
                                </div> {/* END MEGAMENU QUICK LINKS */}
                                {/* MEGAMENU FEATURED NEWS */}
                                <div className="col-md-12 col-lg-5">
                                    {/* Title */}
                                    <h3 className="title">Featured News:</h3>
                                    {/* Image */}
                                    <div className="fluid-width-video-wrapper mb-15"><img src="/images/blog/featured-news.jpg" alt="featured-news" />
                                    </div>
                                    {/* Text */}
                                    <h5 className="h5-md">

                                        <Link href="/single-post">Things to know while performing SEO
                                            for multiple location
                                            businesses
                                        </Link>
                                    </h5>
                                    <p className="wsmwnutxt">Porta semper lacus cursus, feugiat primis
                                        ultrice in ligula risus auctor
                                        tempus feugiat dolor impedit magna...
                                    </p>
                                </div> {/* END MEGAMENU FEATURED NEWS */}
                                {/* MEGAMENU LATEST NEWS */}
                                <div className="col-md-12 col-lg-4">
                                    {/* Title */}
                                    <h3 className="title">Latest News:</h3>
                                    {/* Latest News */}
                                    <ul className="latest-news">
                                        {/* Post #1 */}
                                        <li className="clearfix d-flex align-items-center">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/blog/latest-post-1.jpg" alt="blog-post-preview" />
                                            {/* Text */}
                                            <div className="post-summary">

                                                <Link href="/single-post">Etiam sapien risus ante
                                                    auctor tempus an accumsan...</Link>
                                                <p>03 hours ago</p>
                                            </div>
                                        </li>
                                        {/* Post #2 */}
                                        <li className="clearfix d-flex align-items-center">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/blog/latest-post-2.jpg" alt="blog-post-preview" />
                                            {/* Text */}
                                            <div className="post-summary">

                                                <Link href="/single-post">Blandit tempor sapien ipsum,
                                                    porta risus auctor justo...
                                                </Link>
                                                <p>Feb 02, 2020</p>
                                            </div>
                                        </li>
                                        {/* Post #3 */}
                                        <li className="clearfix d-flex align-items-center">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/blog/latest-post-3.jpg" alt="blog-post-preview" />
                                            {/* Text */}
                                            <div className="post-summary">

                                                <Link href="/single-post">Cursus risus an auctor risus
                                                    laoreet undo auctor varius...</Link>
                                                <p>Jan 29, 2020</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div> {/* END MEGAMENU LATEST NEWS */}
                            </div> {/* End row */}
                        </div> {/* End container */}
                    </div> {/* End wsmegamenu */}
                </li> {/* END MEGAMENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/case-studies-2">Case
                        Studies</Link></li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/blog-listing">Blog</Link></li>
                {/* HEADER PHONE NUMBER 
								    <li class="nl-simple primary-scroll" aria-haspopup="true">
								    	
                                    <Link href="tel:123456789" class="last-link last-link-number">
								    		<i class="fas fa-phone-square-alt"></i> 855-569-7890
								    	</Link>
								    </li>*/}
                {/* HEADER BUTTON */}
                <li className="nl-simple" aria-haspopup="true">

                    <Link href="#cta-6" className="btn btn-tra-white primary-hover last-link">Free SEO
                        Audit</Link>
                </li>
            </ul>
        </>
    )
}
