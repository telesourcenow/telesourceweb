import Link from "next/link"
import { useState } from 'react'
export default function Menu({ seoBtn }) {
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
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/">Home</Link></li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/about-us">About Us</Link></li>
                {/* Products MENU */}
                <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle(1)}><i className="wsmenu-arrow" /></span>
                    <Link href="#">Products <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix halfmenu">
                        <div className="container-fluid">
                            <div className="row">
                                {/* Links */}
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li>
                                        <Link href="/cloud-voice">Cloud Voice</Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="/whatsapp-api">Whatsapp API</Link>
                                    </li>
                                    <li>
                                        <Link href="/sms">SMS</Link>
                                    </li>
                                </ul>
                                {/* Links */}
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li>
                                        <Link href="/gen-ai-chatbot">Gen-AI Chatbot</Link>
                                    </li>
                                    <li>
                                        <Link href="/web-mail">Web Mail </Link>
                                    </li>
                                    <li>
                                        <Link href="/crm-solutions">CRM solutions</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </li> 
                {/* END Products MENU */}

                {/* Services MENU */}
                <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle(1)}><i className="wsmenu-arrow" /></span>
                    <Link href="#">Services <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix halfmenu">
                        <div className="container-fluid">
                            <div className="row">
                                {/* Links */}
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li>
                                        <Link href="/tele-calling-solutions">Tele-Calling Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="/integrated-marketing-solutions">Integrated Marketing <br /> Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="/retail-merchandising-audit">Ecommerce-PlugIn Content</Link>
                                    </li>
                                </ul>
                                {/* Links */}
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li>
                                        <Link href="/managed-sales-process">Managed Sales Process</Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="/retail-merchandising-audit">Retail Merchandising <br /> & Audit</Link>
                                    </li>
                                    <li>
                                        <Link href="/resource-augmentation">Resource Augmentation</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li> 
                {/* END Services MENU */}

                {/* DROPDOWN MENU */}
                <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle(1)}><i className="wsmenu-arrow" /></span>
                    <Link href="#">Businesses<span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix halfmenu">
                        <div className="container-fluid">
                            <div className="row">
                                {/* Links */}
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li>
                                        <Link href="/ecommerce">E-Commerce </Link>
                                    </li>
                                    <li>
                                        <Link href="/travel-hospitality">Travel & Hospitality</Link>
                                    </li>
                                    <li>
                                        <Link href="/financial-services">Financial Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/telecommunication">Telecommunication</Link>
                                    </li>
                                    <li>
                                       <Link href="/automotive">Automotive</Link>
                                    </li>
                                    <li>
                                        <Link href="/government">Government</Link>
                                    </li>
                                </ul>
                                {/* Links */}
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    
                                    <li>
                                        <Link href="/insurance">Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="/healthcare">Healthcare</Link>
                                    </li>
                                    <li>
                                        <Link href="/media">Media</Link>
                                    </li>
                                    <li>
                                        <Link href="/technologies">Technologies</Link></li>
                                    
                                    <li>
                                        <Link href="/renewable-power">Renewable Power</Link></li>
                                    <li>
                                        <Link href="/real-estate-infrastructure">Real Estate & Infrastructure</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li> {/* END DROPDOWN MENU */}

                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/insights">Insights</Link></li>
                {/* MEGAMENU */}

                {/* <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle(2)}><i className="wsmenu-arrow" /></span>
                    <Link href="#">Mega Menu <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-3">
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
                                </div> 
                                <div className="col-md-12 col-lg-5">
                                    <h3 className="title">Featured News:</h3>
                                    <div className="fluid-width-video-wrapper mb-15"><img src="/images/blog/featured-news.jpg" alt="featured-news" />
                                    </div>
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
                                </div> 
                                <div className="col-md-12 col-lg-4">
                                    <h3 className="title">Latest News:</h3>
                                    <ul className="latest-news">
                                        <li className="clearfix d-flex align-items-center">
                                            <img className="img-fluid" src="/images/blog/latest-post-1.jpg" alt="blog-post-preview" />
                                            <div className="post-summary">

                                                <Link href="/single-post">Etiam sapien risus ante
                                                    auctor tempus an accumsan...</Link>
                                                <p>03 hours ago</p>
                                            </div>
                                        </li>
                                        <li className="clearfix d-flex align-items-center">
                                            <img className="img-fluid" src="/images/blog/latest-post-2.jpg" alt="blog-post-preview" />
                                            <div className="post-summary">

                                                <Link href="/single-post">Blandit tempor sapien ipsum,
                                                    porta risus auctor justo...
                                                </Link>
                                                <p>Feb 02, 2020</p>
                                            </div>
                                        </li>
                                        <li className="clearfix d-flex align-items-center">
                                            <img className="img-fluid" src="/images/blog/latest-post-3.jpg" alt="blog-post-preview" />
                                            <div className="post-summary">

                                                <Link href="/single-post">Cursus risus an auctor risus
                                                    laoreet undo auctor varius...</Link>
                                                <p>Jan 29, 2020</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                </li>  */}

                {/* END MEGAMENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/join-team">
                        Join Team
                    </Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/contacts">
                        Contact Us
                    </Link>
                </li>

                {/* {seoBtn ?
                    <li className="nl-simple" aria-haspopup="true">

                        <Link href="#cta-6" className="btn btn-tra-white primary-hover last-link">Free SEO
                            Audit</Link>
                    </li> :
                    <li className="nl-simple primary-scroll" aria-haspopup="true">
                        <a href="tel:123456789" className="last-link last-link-number" >
                            <i className="fas fa-phone-square-alt" /> 855-569-7890
                        </a>
                    </li>
                } */}

            </ul>
        </>
    )
}
