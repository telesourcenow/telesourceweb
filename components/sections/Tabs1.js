import Link from "next/link"

import { useState } from "react"
export default function Tabs1({ cls }) {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section id="tabs-1" className={`wide-60 tabs-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* TABS NAVIGATION */}
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="tabs-nav clearfix">
                                <ul className="tabs-1 primary-tabs">
                                    {/* TAB-1 LINK */}
                                    <li className={activeIndex === 1 ? "tab-link displayed" : "tab-link"} onClick={() => handleOnClick(1)}>Pay-Per-Click Advertising</li>
                                    {/* TAB-2 LINK */}
                                    <li className={activeIndex === 2 ? "tab-link displayed" : "tab-link"} onClick={() => handleOnClick(2)}>Social Media Marketing</li>
                                    {/* TAB-3 LINK */}
                                    <li className={activeIndex === 3 ? "tab-link displayed" : "tab-link"} onClick={() => handleOnClick(3)}>Search Engine Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* END TABS NAVIGATION */}
                    {/* TABS CONTENT */}
                    <div className="tabs-content">
                        {/* TAB-1 CONTENT */}
                        <div id="tab-1" className={activeIndex === 1 ? "tab-content displayed" : "tab-content"}>
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-5 col-lg-6">
                                    <div className="img-block pr-25 mb-40">
                                        <img className="img-fluid" src="/images/image-05.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block pc-25 mb-40">
                                        {/* Title */}
                                        <h4 className="h4-xl">We will help your business achieve predictable growth</h4>
                                        {/* Text */}
                                        <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae
                                            auctor integer congue magna at pretium purus pretium ligula rutrum and luctus risus ultrice
                                        </p>
                                        {/* List */}
                                        <ul className="txt-list mb-15">
                                            <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor
                                                auctor ipsum blandit purus vehicula magna and luctus tempor quisque integer congue magna
                                            </li>
                                            <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et magnis ipsum porta
                                                justo integer velna purus
                                            </li>
                                        </ul>
                                        {/* Button */}
                                        <Link href="/resources" className="btn btn-tra-grey primary-hover">Our Resources</Link>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>	  {/* End row */}
                        </div>	{/* END TAB-1 CONTENT */}
                        {/* TAB-2 CONTENT */}
                        <div id="tab-2" className={activeIndex === 2 ? "tab-content displayed" : "tab-content"}>
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-5 col-lg-6">
                                    <div className="img-block pr-25 mb-40">
                                        <img className="img-fluid" src="/images/image-03.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block pc-25 mb-40">
                                        {/* Title */}
                                        <h4 className="h4-xl">We craft marketing  digital products that grow business</h4>
                                        {/* Text */}
                                        <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and
                                            odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus
                                            and ultrice a gravida lectus
                                        </p>
                                        {/* List */}
                                        <ul className="ico-list mb-10">
                                            <li><i className="fas fa-check grey-color" /> <span>Vitae auctor integer congue magna at pretium</span></li>
                                            <li><i className="fas fa-check grey-color" /> <span>Integer congue magna and pretium purus ligula</span></li>
                                            <li><i className="fas fa-check grey-color" /> <span>Sagittis congue augue egestas volutpat egestas</span></li>
                                        </ul>
                                        {/* Button */}
                                        <Link href="/case-studies-2" className="btn btn-md btn-primary tra-black-hover">Our Case Studies</Link>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>	 {/* End row */}
                        </div>	{/* END TAB-2 CONTENT */}
                        {/* TAB-3 CONTENT */}
                        <div id="tab-3" className={activeIndex === 3 ? "tab-content displayed" : "tab-content"}>
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-5 col-lg-6">
                                    <div className="img-block pr-25 mb-40">
                                        <img className="img-fluid" src="/images/image-04.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block pc-25 mb-40">
                                        {/* Title */}
                                        <h4 className="h4-xl">We're providing the best SEO services for your website</h4>
                                        {/* Text */}
                                        <div className="cbox-1">
                                            <i className="fas fa-check grey-color" />
                                            <div className="cbox-1-txt">
                                                <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor
                                                    auctor ipsum blandit purus vehicula magna and luctus tempor quisque turpis magna ligula
                                                </p>
                                            </div>
                                        </div>
                                        {/* Text */}
                                        <div className="cbox-1">
                                            <i className="fas fa-check grey-color" />
                                            <div className="cbox-1-txt">
                                                <p>An enim nullam tempor sapien gravida donec enim blandit ipsum at porta justo integer velna
                                                    vitae auctor integer congue magna pretium purus pretium magnis nulla dolor sapien
                                                </p>
                                            </div>
                                        </div>
                                        {/* Text */}
                                        <div className="cbox-1">
                                            <i className="fas fa-check grey-color" />
                                            <div className="cbox-1-txt">
                                                <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor
                                                    auctor ipsum blandit purus vehicula magna and luctus tempor quisque turpis magna ligula
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>	 {/* End row */}
                        </div>	{/* END TAB-3 CONTENT */}
                    </div>	{/* END TABS CONTENT */}
                </div>     {/* End container */}
            </section>

        </>
    )
}
