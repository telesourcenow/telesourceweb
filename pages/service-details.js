import Layout from "@/components/layout/Layout"
import Content4 from "@/components/sections/Content4"
import Faqs1 from "@/components/sections/Faqs1"
import Reviews3 from "@/components/sections/Reviews3"
import Link from "next/link"
export default function ServiceDetails() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Content Optimization"}>
                <div>
                    {/* CONTENT-1
				============================================= */}
                    <section id="content-1" className="wide-60 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xl">We create content that is useful and helpful (unique)</h4>
                                        {/* Text */}
                                        <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio
                                            velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice
                                            a gravida lectus suscipit gestas magna suscipit luctus undo
                                        </p>
                                        {/* QUOTE */}
                                        <div className="quote quote-primary">
                                            {/* Quote Text */}
                                            <p>"Lorem ipsum dolor sit, consectetuer amet adipiscing elit. Aenean magna ligula eget dolor
                                                suscipit egestas at viverra dolor iaculis luctus magna suscipit egestas "
                                            </p>
                                            {/* Quote Avatar */}
                                            <div className="quote-avatar">
                                                <img src="/images/quote-avatar.jpg" alt="quote-avatar" />
                                            </div>
                                            {/* Quote Author */}
                                            <div className="quote-author">
                                                <h5 className="h5-xs">Sean Mcmarthy </h5>
                                                <span>Founder of Metreex</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-5 col-lg-6">
                                    <div className="img-block pl-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                        <img className="img-fluid" src="/images/image-04.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>	  {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-1 */}
                    {/* CONTENT-2
				============================================= */}
                    <section id="content-2" className="bg-lightgrey wide-60 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-5 col-lg-6">
                                    <div className="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                        <img className="img-fluid" src="/images/image-03.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xl">We create content that caters to the targeted user audience</h4>
                                        {/* Text */}
                                        <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and
                                            odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus
                                            and ultrice a gravida lectus
                                        </p>
                                        {/* List */}
                                        <ul className="ico-list mb-10">
                                            <li><i className="fas fa-check green-color" /> <span>Vitae auctor integer congue magna at pretium</span></li>
                                            <li><i className="fas fa-check green-color" /> <span>Integer congue magna and pretium purus ligula</span></li>
                                            <li><i className="fas fa-check green-color" /> <span>Sagittis congue augue egestas volutpat egestas</span></li>
                                            <li><i className="fas fa-check green-color" /> <span>Donec pretium ipsum egestas porta justo integer</span></li>
                                        </ul>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>	  {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-2 */}
                    {/* CONTENT-4
				============================================= */}
                    <Content4 cls={"bg-primary bg-map pt-100"} />
                    {/* CONTENT-6
				============================================= */}
                    <section id="content-6" className="wide-60 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-5 col-lg-6">
                                    <div className="content-6-img mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                        <img className="img-fluid" src="/images/image-08.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                        {/* Title */}
                                        <h4 className="h4-xl">Using accurate keyword research as your foundation</h4>
                                        {/* Text */}
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
                            </div>	  {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END CONTENT-6 */}
                    {/* TESTIMONIALS-3
				============================================= */}
                    <Reviews3 />
                    {/* FAQs-1
				============================================= */}
                    <Faqs1 />	{/* END FAQs-1 */}
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