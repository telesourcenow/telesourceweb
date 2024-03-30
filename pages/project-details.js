import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ProjectDetails() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark">

                <div className="inner-page-wrapper">
                    <section id="project-details-page" className="page-hero-section division">
                        <div className="container">
                            <div className="row">
                                {/* PAGE HERO TEXT */}
                                <div className="col-md-10 offset-md-1">
                                    <div className="hero-txt text-center white-color">
                                        {/* Title */}
                                        <h3 className="h3-xl">Burgers  Grill Restaurant</h3>
                                        {/* Text */}
                                        <p>How we achieved a 182,18% increase in organic search traffic</p>
                                    </div>
                                </div>	{/* END PAGE HERO TEXT */}
                            </div>    {/* End row */}
                        </div>	   {/* End container */}
                    </section>

                    {/* SINGLE PROJECT-1
				============================================= */}
                    <section id="sp-1" className="single-project-section sp-page sp-left division">
                        <div className="container">
                            <div className="sp-wrapper bg-white">
                                <div className="row d-flex align-items-center">
                                    {/* PROJECT PREVIEW IMAGE */}
                                    <div className="col-md-6">
                                        <div className="sp-preview text-center">
                                            <img className="img-fluid" src="/images/portfolio/project-07.jpg" alt="project-preview" />
                                        </div>
                                    </div>
                                    {/* PROJECT TEXT */}
                                    <div className="col-md-6">
                                        <div className="sp-txt">
                                            {/* Brand Logo */}
                                            <div className="sp-logo"><img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" /></div>
                                            {/* Text */}
                                            <p>Semper lacus cursus porta, feugiat a primis ultrice ligula a risus auctor tempus a feugiat dolor
                                                at lacinia risus interdum auctor
                                            </p>
                                            {/* Project Data */}
                                            <div className="sp-data">
                                                <div className="row">
                                                    <div className="col-md-12"><p>Client Results</p></div>
                                                </div>
                                                <div className="row d-flex align-items-center clearfix">
                                                    {/* Data */}
                                                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.4s">
                                                        <h4 className="h4-lg darkblue-color">+34,78%</h4>
                                                        <span>increase in website visitors</span>
                                                    </div>
                                                    {/* Data */}
                                                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                                                        <h4 className="h4-lg darkblue-color">+182,18%</h4>
                                                        <span>increase in organic search traffic</span>
                                                    </div>
                                                    {/* Data */}
                                                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                                        <h4 className="h4-lg darkblue-color">+346,93%</h4>
                                                        <span>increase in the conversion rate</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Small Text */}
                                            <p className="p-sm">Sep 1 - Dec 31, 2019 vs Sep 1 - Dec 31, 2018</p>
                                        </div>
                                    </div>	{/* END PROJECT TEXT */}
                                </div>    {/* End row */}
                            </div>
                        </div>	   {/* End container */}
                    </section>	{/* END SINGLE PROJECT-1 */}
                    {/* CONTENT-10
				============================================= */}
                    <section id="content-10" className="wide-60 content-section division">
                        <div className="container">
                            <div className="row">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6">
                                    <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xs">Backstory:</h4>
                                        {/* Text */}
                                        <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae
                                            auctor integer congue magna at pretium purus pretium ligula rutrum and luctus risus ultrice
                                        </p>
                                        {/* Text */}
                                        <p>Gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue magna at
                                            pretium purus pretium
                                        </p>
                                        {/* Title */}
                                        <h4 className="h4-xs mt-20">The Challenge:</h4>
                                        {/* List */}
                                        <ul className="txt-list mb-15">
                                            <li>Rutrum and luctus risus eros dolor an auctor blandits</li>
                                            <li>Sagittis congue augue egestas volutpat egestas magna</li>
                                            <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor
                                                auctor ipsum blandit purus
                                            </li>
                                            <li>Pretium ligula rutrum and luctus risus eros vehicula</li>
                                            <li>Tempor sapien gravida donec enim ipsum portas</li>
                                            <li>Purus pretium ligula rutrum and luctus risus ultrice</li>
                                        </ul>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* TEXT BLOCK */}
                                <div className="col-md-6">
                                    <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xs">Strategic SEO Plan:</h4>
                                        {/* Text */}
                                        <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae
                                            auctor integer congue magna at pretium purus pretium ligula rutrum and luctus risus ultrice
                                        </p>
                                        {/* Title */}
                                        <h4 className="h4-xs mt-20">SEO Campaign at work:</h4>
                                        {/* List */}
                                        <ul className="txt-list mb-15">
                                            <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor
                                                auctor ipsum blandit purus
                                            </li>
                                            <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et magnis ipsum porta
                                                justo integer velna purus
                                            </li>
                                            <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor
                                                auctor ipsum blandit purus vehicula magna and luctus tempor quisque integer congue magna
                                            </li>
                                            <li>Pretium ligula rutrum and luctus risus eros dolor auctor ipsum blandit purus vehicula magna
                                                and luctus tempor
                                            </li>
                                            <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et magnis ipsum porta
                                                justo integer velna purus
                                            </li>
                                        </ul>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>    {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-10 */}
                    {/* CONTENT-11
				============================================= */}
                    <section id="content-11" className="bg-lightcyan wide-60 content-section division">
                        <div className="container">
                            {/* CONTENT-11 IMAGES */}
                            <div className="row">
                                <div className="col-md-6 mb-40">
                                    <div className="content-img wow fadeInLeft" data-wow-delay="0.4s">
                                        <img className="img-fluid" src="/images/image-14.jpg" alt="content-image" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-40">
                                    <div className="content-img wow fadeInRight" data-wow-delay="0.4s">
                                        <img className="img-fluid" src="/images/image-15.jpg" alt="content-image" />
                                    </div>
                                </div>
                            </div>	{/* END CONTENT-11 IMAGES */}
                            {/* CONTENT TEXT */}
                            <div className="row">
                                <div className="col-md-12 mt-30">
                                    <div className="txt-block mb-40 text-center wow fadeInUp" data-wow-delay="0.6s">
                                        {/* Text */}
                                        <h4 className="h4-md">Organic traffic increased by 182.18% during the first active months of SEO
                                            (September – December 2019)
                                        </h4>
                                        <p>(Organic traffic trends continue to increase month-over-month.)</p>
                                    </div>
                                </div>
                            </div>
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-11 */}
                    {/* CONTENT-4
				============================================= */}
                    <section id="content-4" className="pt-100 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block pc-25 wow fadeInLeft" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xl">Problem-solving content:</h4>
                                        <div className="cbox-1">
                                            <i className="fas fa-check grey-color" />
                                            <div className="cbox-1-txt">
                                                <p>Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrice ligula
                                                    purus ipsum primis in cubilia
                                                </p>
                                            </div>
                                        </div>
                                        {/* Text */}
                                        <div className="cbox-1">
                                            <i className="fas fa-check grey-color" />
                                            <div className="cbox-1-txt">
                                                <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor auctor
                                                    ipsum blandit purus vehicula magna and luctus tempor quisque	turpis magna ligula
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
                                                <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor auctor
                                                    ipsum blandit purus
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-5 col-lg-6">
                                    <div className="content-4-img wow fadeInRight" data-wow-delay="0.6s">
                                        <img className="img-fluid" src="/images/image-11.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>	  {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-4 */}
                    {/* TESTIMONIALS-1
				============================================= */}
                    <section id="reviews-1" className="bg-green bg-map wide-100 reviews-section division">
                        <div className="container white-color">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    {/* TESTIMONIAL TEXT */}
                                    <div className="review-1">
                                        {/* Testimonial Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img className="img-fluid" src="/images/review-author-1.jpg" alt="author-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <div className="review-1-txt">
                                            <p>"Etiam sapien sem at sagittis congue an augue massa varius egestas and suscipit magna a
                                                tempus undo aliquet ligula magna suscipit vitae"
                                            </p>
                                        </div>
                                        {/* Testimonial Author */}
                                        <div className="review-1-author">
                                            <h5 className="h5-xs">Sean McMarthy</h5>
                                            <span>CEO  Founder of Company Name</span>
                                        </div>
                                    </div>	{/* END TESTIMONIAL TEXT */}
                                </div>
                            </div>	   {/* End row */}
                        </div>	    {/* End container */}
                    </section>	 {/* END TESTIMONIALS-1 */}
                    {/* CONTENT-3
				============================================= */}
                    <section id="content-3" className="wide-60 content-section division">
                        <div className="container">
                            {/* CONTENT IMAGE */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="content-3-img wow fadeInUp" data-wow-delay="0.6s">
                                        <img className="img-fluid" src="/images/image-16.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>
                            {/* CONTENT TEXT */}
                            <div className="row">
                                <div className="col-xl-10 offset-xl-1">
                                    <div className="txt-block mb-40 wow fadeInUp" data-wow-delay="0.6s">
                                        {/* Title */}
                                        <h4 className="h4-xs mt-20">Success Page Results:</h4>
                                        {/* Text */}
                                        <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and odio velna
                                            vitae auctor integera congue magna at purus pretium ligula rutrum luctus and ultrice a gravida
                                            lectus. Pretium ligula rutrum and luctus risus dolor auctor ipsum blandit purus vehicula magna
                                            and luctus tempor congue augue egestas volutpat egestas magna donec
                                        </p>
                                        {/* List */}
                                        <ul className="txt-list">
                                            <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor
                                                auctor ipsum blandit purus
                                            </li>
                                            <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et magnis ipsum porta
                                                justo integer velna purus
                                            </li>
                                            <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor
                                                auctor ipsum blandit purus vehicula magna and luctus tempor quisque integer congue magna
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-3 */}
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