import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'

export default function Pricing() {
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
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"SEO Pricing Packages"}>
                <div>
                    <section id="pricing-2" className=" wide-60 pricing-section division">
                        <div className="container">
                            {/* PRICING TABLES */}
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
                            </div>	{/* END PRICING TABLES */}
                            {/* PRICING NOTICE TEXT */}
                            <div className="row">
                                <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                                    <div className="pricing-notice text-center mb-40">
                                        <p className="grey-color">No commitment required – you can cancel anytime.</p>
                                    </div>
                                </div>
                            </div>
                        </div>     {/* End container */}
                    </section>	{/* END PRICING-2 */}
                    {/* BRANDS-2
				============================================= */}
                    <div id="brands-2" className="bg-04 brands-section division">
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
                    {/* FAQs-1
				============================================= */}
                    <section id="faqs-1" className="wide-100 faqs-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                                    {/* Title */}
                                    <h3 className="h3-lg">Have Questions? Look Here</h3>
                                    {/* Text */}
                                    <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                        tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                                    </p>
                                </div>
                            </div>	 {/* END SECTION TITLE */}
                            {/* QUESTIONS HOLDER */}
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div id="accordion" role="tablist">
                                        {/* QUESTION #1 */}
                                        <div className="card wow fadeInUp" data-wow-delay="0.4s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingOne">
                                                <h5 className="h5-sm" onClick={() => handleToggle(1)}>
                                                    <a className={isActive.key == 1 ? "collapsed" : ""} role="button" aria-expanded="true" aria-controls="collapseOne">
                                                        How much do your monthly services cost?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseOne" className={isActive.key == 1 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    {/* Text */}
                                                    <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae and
                                                        congue auctor magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam
                                                        sapien sagittis congue tempor gravida donec enim ipsum porta justo integer at odio velna
                                                        placerat purus, aliquet elementum massa mollis risus lectus porta rutrum magna dignissim,
                                                        porttitor hendrerit
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	{/* END QUESTION #1 */}
                                        {/* QUESTION #2 */}
                                        <div className="card wow fadeInUp" data-wow-delay="0.6s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingTwo">
                                                <h5 className="h5-sm" onClick={() => handleToggle(2)}>
                                                    <a className={isActive.key == 2 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                                        What do I need to provide to get started with your services?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseTwo" className={isActive.key == 2 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                                        turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur
                                                        nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est.
                                                        Fusce non nulla vitae massa placerat vulputate vel a purus
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	{/* END QUESTION #2 */}
                                        {/* QUESTION #3 */}
                                        <div className="card wow fadeInUp" data-wow-delay="0.8s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingThree">
                                                <h5 className="h5-sm" onClick={() => handleToggle(3)}>
                                                    <a className={isActive.key == 3 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseThree">
                                                        Why does the cost of SEO services vary?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseThree" className={isActive.key == 3 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    {/* Text */}
                                                    <p>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas,
                                                        congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae
                                                        auctor eros dolor luctus odio placerat magna cursus
                                                    </p>
                                                    {/* List */}
                                                    <ul className="txt-list">
                                                        <li>Vitae auctor integer congue magna at pretium</li>
                                                        <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor auctor
                                                            ipsum blandit purus vehicula magna and luctus tempor quisque
                                                        </li>
                                                        <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et magnis ipsum porta justo
                                                            integer velna purus ehicula magna luctus vel laoreet turpis
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>	  {/* END QUESTION #3 */}
                                        {/* QUESTION #4 */}
                                        <div className="card wow fadeInUp" data-wow-delay="1s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingFour">
                                                <h5 className="h5-sm" onClick={() => handleToggle(4)}>
                                                    <a className={isActive.key == 4 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseFour">
                                                        Do you offer set campaign prices or hourly rates?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseFour" className={isActive.key == 4 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                                <div className="card-body">
                                                    {/* Text */}
                                                    <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo
                                                        ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed purus,
                                                        venenatis nec. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	  {/* END QUESTION #4 */}
                                    </div>	{/* END ACCORDION */}
                                </div>  {/* End col-x */}
                            </div>	{/* END QUESTIONS HOLDER */}
                            {/* MORE QUESTIONS BUTTON */}
                            <div className="row">
                                <div className="col-md-12 text-center more-questions">
                                    <h5>Still have a question? <Link href="/contacts" className="primary-color">Ask your question here</Link></h5>
                                </div>
                            </div>
                        </div>	   {/* End container */}
                    </section>	{/* END FAQs-1 */}
                    {/* CALL TO ACTION-6
				============================================= */}
                    <section id="cta-6" className="bg-06 cta-section division">
                        <div className="container white-color">
                            <div className="row">
                                {/* CALL TO ACTION TEXT */}
                                <div className="col-md-12">
                                    <div className="cta-txt text-center">
                                        {/* Title */}
                                        <h3 className="h3-lg">Get a <span>FREE SEO</span> audit for your website!</h3>
                                        {/* Text */}
                                        <p className="p-lg">We will give you a true assessment of your website totally free of charge</p>
                                        {/* CALL TO ACTION FORM */}
                                        <div className="form-holder text-center">
                                            <form name="seoform" className="row seo-form">
                                                {/* Form Input */}
                                                <div id="input-email" className="col-lg-4">
                                                    <input type="text" name="email" className="form-control email" placeholder="Your Email Address*" />
                                                </div>
                                                {/* Form Input */}
                                                <div id="input-url" className="col-lg-4">
                                                    <input type="url" name="url" className="form-control url" placeholder="Your Website*" />
                                                </div>
                                                {/* Form Button */}
                                                <div className="col-lg-4 form-btn">
                                                    <button type="submit" className="btn btn-primary tra-white-hover submit">Test My Website For Free</button>
                                                </div>
                                                {/* Form Message */}
                                                <div className="col-lg-12 seo-form-msg"><span className="loading" /></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>	{/* END CALL TO ACTION TEXT */}
                            </div>	 {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END CALL TO ACTION-6 */}
                </div>

            </Layout>
        </>
    )
}