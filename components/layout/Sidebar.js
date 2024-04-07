import Link from "next/link";
import { useState } from 'react';

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
            <ul className="wsmenu-list" style={{ height: '500px', overflowY: 'auto'}}>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/">Home</Link>
                </li>
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/about-us">About</Link>
                </li>
                {/* DROPDOWN MENU - Products */}
                <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle("products")}>
                        <i className="wsmenu-arrow" />
                    </span>
                    <Link href="#">Products <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix halfmenu" style={{ display: `${isActive.key === "products" ? "block" : "none"}` }}>
                        <div className="container-fluid">
                            <div className="row">
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
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
                                    <li>
                                        <Link href="/erp">ERP</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                {/* SERVICES */}
                <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle("services")}>
                        <i className="wsmenu-arrow" />
                    </span>
                    <Link href="#">Services <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix halfmenu" style={{ display: `${isActive.key === "services" ? "block" : "none"}` }}>
                        <div className="container-fluid">
                            <div className="row">
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li>
                                        <Link href="/tele-calling-solutions">Tele-Calling Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="/managed-sales-process">Managed Sales Process</Link>
                                    </li>
                                    <li>
                                        <Link href="/ecommerce-plugin">Ecommerce-PlugIn</Link>
                                    </li>
                                    <li>
                                        <Link href="/retail-merchandising-audit">Retail Merchandising & Audit </Link>
                                    </li>
                                    <li>
                                        <Link href="/resource-augmentation">Resource Augmentation</Link>
                                    </li>
                                    <li>
                                        <Link href="/cloud-transformation">Cloud Transformation</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                {/* BUSINESS */}
                <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle("business")}>
                        <i className="wsmenu-arrow" />
                    </span>
                    <Link href="#">Businesses <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix halfmenu" style={{ display: `${isActive.key === "business" ? "block" : "none"}` }}>
                        <div className="container-fluid">
                            <div className="row">
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
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
                                        <Link href="/renewable-power">Renewable Power</Link></li>
                                    <li>
                                    <li>
                                        <Link href="/government">Government</Link>
                                    </li>
                                        <Link href="/real-estate-infrastructure">Real Estate & Infrastructure</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                {/* TEAM */}
                {/* <li aria-haspopup="true">
                    <span className="wsmenu-click" onClick={() => handleToggle("team")}>
                        <i className="wsmenu-arrow" />
                    </span>
                    <Link href="#">Team <span className="wsarrow" /></Link>
                    <div className="wsmegamenu clearfix halfmenu" style={{ display: `${isActive.key === "team" ? "block" : "none"}` }}>
                        <div className="container-fluid">
                            <div className="row">
                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                    <li><Link href="/team1">Team 1</Link></li>
                                    <li><Link href="/team2">Team 2</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                 */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/insights">Insights</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/join-team">Join Team</Link>
                </li>
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/contacts">Contact Us</Link>
                </li>
                {/* HEADER BUTTON */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href=".#" className="btn btn-tra-white primary-hover last-link">Book A Demo</Link>
                </li>
            </ul>
        </>
    );
}
