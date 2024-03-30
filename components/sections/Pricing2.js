import Link from "next/link"


export default function Pricing2({ cls }) {
    return (
        <>
            <section id="pricing-2" className={`wide-60 pricing-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                            {/* Title 	*/}
                            <h3 className="h3-lg indigo-color">Simple Pricing, Instant Sign Up</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div>
                    <div className="row pricing-row">
                        {/* PRICE PLAN BASIC */}
                        <div className="col-md-6">
                            <div className="pricing-table wow fadeInLeft" data-wow-delay="0.4s">
                                {/* Plan Price  */}
                                <div className="pricing-plan indigo-color text-center">
                                    <h4 className="h4-xs">Basic Subscription</h4>
                                    <sup>$</sup>
                                    <span className="price">24</span>
                                    <sup className="coins">99</sup>
                                    <p className="p-lg">Limited Access</p>
                                </div>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li><span className="indigo-color">Growth Plan</span> - purus ipsum neque dolor primis libero tempus,
                                        blandit posuere and ligula varius magna porta
                                    </li>
                                    <li><span className="indigo-color">Website Monitoring</span> - augue suscipit, luctus and neque purus
                                        ipsum neque dolor primis libero tempus, blandit posuere
                                    </li>
                                    <li><span className="indigo-color">Weekly Snapshot Email</span> - purus ipsum neque at dolor primis
                                        libero tempus, blandit posuere and ligula varius
                                    </li>
                                    <li><span className="indigo-color">Benchmarking</span> - iaculis odio auctor integer congue an impedit
                                        magna viverra dolor vitae donec  mauris lectus laoreet gestas neque undo luctus feugiat lectus
                                        laoreet gestas neque
                                    </li>
                                    <li><span className="indigo-color">Daily Health Score</span> - pretium ipsum porta justo integer at
                                        odio velna vitae auctor integera congue magna
                                    </li>
                                    <li><span className="indigo-color">12/7 Free Support</span> - gravida lectus suscipit gestas luctus</li>
                                </ul>
                                {/* Pricing Table Button */}
                                <div className="text-center">
                                    <Link href="#" className="btn btn-tra-grey black-hover">Get Started</Link>
                                </div>
                            </div>
                        </div>	{/* END PRICE PLAN BASIC */}
                        {/* PRICE PLAN PRO */}
                        <div className="col-md-6">
                            <div className="pricing-table wow fadeInRight" data-wow-delay="0.4s">
                                {/* Plan Price  */}
                                <div className="pricing-plan indigo-color text-center">
                                    <h4 className="h4-xs">Pro Subscription</h4>
                                    <sup>$</sup>
                                    <span className="price">89</span>
                                    <sup className="coins">99</sup>
                                    <p className="p-lg">Full Access</p>
                                </div>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li><span className="indigo-color">Growth Plan</span> - purus ipsum neque dolor primis libero tempus,
                                        blandit posuere and ligula varius magna porta
                                    </li>
                                    <li><span className="indigo-color">Website Monitoring</span> - augue suscipit, luctus and neque purus
                                        ipsum neque dolor primis libero tempus, blandit posuere
                                    </li>
                                    <li><span className="indigo-color">Weekly Snapshot Email</span> - purus ipsum neque at dolor primis
                                        libero tempus, blandit posuere and ligula varius
                                    </li>
                                    <li><span className="indigo-color">Benchmarking</span> - iaculis odio auctor integer congue an impedit
                                        magna viverra dolor vitae donec  mauris lectus laoreet gestas neque undo luctus feugiat lectus
                                        laoreet gestas neque
                                    </li>
                                    <li><span className="indigo-color">Daily Health Score</span> - pretium ipsum porta justo integer at
                                        odio velna vitae auctor integera congue magna
                                    </li>
                                    <li><span className="indigo-color">Social Media</span> - augue suscipit, luctus and neque purus ipsum
                                        neque dolor primis libero tempus, blandit posuere
                                    </li>
                                    <li><span className="indigo-color">SEO  Keywords</span> - iaculis odio auctor integer congue an impedit
                                        magna viverra dolor vitae donec  mauris lectus laoreet gestas neque undo luctus feugiat lectus laoreet
                                        gestas neque
                                    </li>
                                    <li><span className="indigo-color">24/7 Free Support</span> - gravida lectus suscipit gestas luctus</li>
                                </ul>
                                {/* Pricing Table Button */}
                                <div className="text-center">
                                    <Link href="#" className="btn btn-primary tra-black-hover">Upgrade To PRO</Link>
                                </div>
                            </div>
                        </div>	{/* END PRICE PLAN PRO */}
                    </div>
                    {/* PRICING NOTICE TEXT */}
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                            <div className="pricing-notice text-center mb-40">
                                <p className="grey-color">No commitment required – you can cancel anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>     {/* End container */}
            </section>

        </>
    )
}
