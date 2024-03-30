import Link from "next/link"


export default function Pricing1({ cls }) {
    return (
        <>
            <section id="pricing-1" className={`wide-60 pricing-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Section SubTitle */}
                            <span className="section-subtitle bluestone-color">Our Pricing Packages</span>
                            {/* Title 	*/}
                            <h3 className="h3-lg">Simple Pricing, Instant Sign Up</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div> {/* END SECTION TITLE */}
                    <div className="row pricing-row">
                        {/* PRICE PLAN STARTER */}
                        <div className="col-md-4 col-lg-4">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="0.4s">
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <h5 className="h5-md">SEO Starter</h5>
                                    <sup>$</sup>
                                    <span className="price">3</span>
                                    <sup className="coins">99</sup>
                                </div>
                                <p className="p-sm">Monthly Payment</p>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>10 Analytics Campaign</li>
                                    <li><span>800 Change Keywords</span></li>
                                    <li><span>3 Free Optimization</span></li>
                                    <li><span>25 Social Media Reviews</span></li>
                                    <li className="disabled-option">Upgrate Options</li>
                                    <li className="disabled-option">Extra Features</li>
                                    <li>12/5 Free Support</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <Link href="#" className="btn btn-tra-grey black-hover">Get Started</Link>
                            </div>
                        </div> {/* END PRICE PLAN STARTER */}
                        {/* PRICE PLAN BASIC */}
                        <div className="col-md-4 col-lg-4">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="0.6s">
                                {/* Plan Price  */}
                                <div className="pricing-plan primary-color">
                                    <h5 className="h5-md">SEO Basic</h5>
                                    <sup>$</sup>
                                    <span className="price">24</span>
                                    <sup className="coins">99</sup>
                                </div>
                                <p className="p-sm">Monthly Payment</p>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>20 Analytics Campaign</li>
                                    <li><span>1,200 Change Keywords</span></li>
                                    <li><span>15 Optimization</span></li>
                                    <li><span>1K Social Media Reviews</span></li>
                                    <li><span>Upgrate Options</span></li>
                                    <li className="disabled-option">Extra Features</li>
                                    <li>12/7 Free Support</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <Link href="#" className="btn btn-primary black-hover">Get Started</Link>
                            </div>
                        </div> {/* END PRICE PLAN BASIC */}
                        {/* PRICE PLAN PRO */}
                        <div className="col-md-4 col-lg-4">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="0.8s">
                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <h5 className="h5-md">SEO Premium</h5>
                                    <sup>$</sup>
                                    <span className="price">89</span>
                                    <sup className="coins">99</sup>
                                </div>
                                <p className="p-sm">Monthly Payment</p>
                                {/* Pricing Plan Features  */}
                                <ul className="features">
                                    <li>Unlimited Analytics Campaign</li>
                                    <li><span>Unlimited Change Keywords</span></li>
                                    <li><span>Unlimited Optimization</span></li>
                                    <li><span>5K Social Media Reviews</span></li>
                                    <li><span>Upgrate Options</span></li>
                                    <li>Extra Features</li>
                                    <li>24/7 Free Support</li>
                                </ul>
                                {/* Pricing Table Button  */}
                                <Link href="#" className="btn btn-tra-grey black-hover">Upgrade To Premium</Link>
                            </div>
                        </div> {/* END PRICE PLAN PRO */}
                    </div> {/* End row */}
                    {/* PRICING NOTICE TEXT */}
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                            <div className="pricing-notice text-center mb-40">
                                <p className="p-md"><span>Note!</span> Prices may vary from location to location due to local
                                    taxation laws and conversion rates from U.S. Dollars.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> {/* End container */}
            </section>

        </>
    )
}
