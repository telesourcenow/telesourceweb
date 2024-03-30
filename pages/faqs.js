import Layout from "@/components/layout/Layout"
import { useState } from 'react'
export default function Faqs() {
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
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"FAQs"}>
                <div>
                    <section id="faqs-1" className="wide-100 faqs-section division">
                        <div className="container">
                            {/* QUESTIONS HOLDER */}
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div id="accordion" role="tablist">
                                        {/* CATEGORY TITLE  */}
                                        <h4 className="h4-lg primary-color">01. General Questions</h4>
                                        {/* QUESTION #1 */}
                                        <div className="card wow fadeInUp" data-wow-delay="0.4s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingOne">
                                                <h5 className="h5-sm" onClick={() => handleToggle(1)}>
                                                    <a className={isActive.key == 1 ? "collapsed" : ""} role="button" aria-expanded="true" aria-controls="collapseOne">
                                                        Do you require a contract?
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
                                                        What kind of support do you offer?
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
                                                        Do you provide details of what SEO work you will be doing?
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
                                                        What is on-page search engine optimization?
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
                                        {/* CATEGORY TITLE  */}
                                        <h4 className="h4-lg mt-60 primary-color">02. Payment Questions</h4>
                                        {/* QUESTION #5 */}
                                        <div className="card wow fadeInUp" data-wow-delay="1.2s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingFive">
                                                <h5 className="h5-sm" onClick={() => handleToggle(5)}>
                                                    <a className={isActive.key == 5 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseFive">
                                                        How much do your monthly services cost?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseFive" className={isActive.key == 5 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                                                <div className="card-body">
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
                                        </div>	  {/* END QUESTION #5 */}
                                        {/* QUESTION #6 */}
                                        <div className="card wow fadeInUp" data-wow-delay="1.4s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingSix">
                                                <h5 className="h5-sm" onClick={() => handleToggle(6)}>
                                                    <a className={isActive.key == 6 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseSix">
                                                        Do you offer set campaign prices or hourly rates?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseSix" className={isActive.key == 6 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingSix" data-parent="#accordion">
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
                                        </div>	{/* END QUESTION #6 */}
                                        {/* QUESTION #7 */}
                                        <div className="card wow fadeInUp" data-wow-delay="1.6s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingSeven">
                                                <h5 className="h5-sm" onClick={() => handleToggle(7)}>
                                                    <a className={isActive.key == 7 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseSeven">
                                                        Why does the cost of SEO services vary?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseSeven" className={isActive.key == 7 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingSeven" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                                        turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur
                                                        nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est.
                                                        Fusce non nulla vitae massa placerat vulputate vel a purus
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	{/* END QUESTION #7 */}
                                        {/* QUESTION #8 */}
                                        <div className="card wow fadeInUp" data-wow-delay="1.8s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingEight">
                                                <h5 className="h5-sm" onClick={() => handleToggle(8)}>
                                                    <a className={isActive.key == 8 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseEight">
                                                        Do you offer any guarantees for SEO results?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseEight" className={isActive.key == 8 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingEight" data-parent="#accordion">
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
                                        </div>	  {/* END QUESTION #8 */}
                                        {/* QUESTION #9 */}
                                        <div className="card wow fadeInUp" data-wow-delay="2s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingNine">
                                                <h5 className="h5-sm" onClick={() => handleToggle(9)}>
                                                    <a className={isActive.key == 9 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseNine">
                                                        Can I change my subscription at any time?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseNine" className={isActive.key == 9 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingNine" data-parent="#accordion">
                                                <div className="card-body">
                                                    {/* Text */}
                                                    <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo
                                                        ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed purus,
                                                        venenatis nec. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor
                                                    </p>
                                                </div>
                                            </div>
                                        </div>	  {/* END QUESTION #9 */}
                                        {/* QUESTION #10 */}
                                        <div className="card wow fadeInUp" data-wow-delay="2.2s">
                                            {/* Question */}
                                            <div className="card-header" role="tab" id="headingTen">
                                                <h5 className="h5-sm" onClick={() => handleToggle(10)}>
                                                    <a className={isActive.key == 10 ? "collapsed" : ""} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseTen">
                                                        What payment methods do you accept?
                                                    </a>
                                                </h5>
                                            </div>
                                            {/* Answer */}
                                            <div id="collapseTen" className={isActive.key == 10 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingTen" data-parent="#accordion">
                                                <div className="card-body">
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
                                        </div>	  {/* END QUESTION #10 */}
                                    </div>	{/* END ACCORDION */}
                                </div>  {/* End col-x */}
                            </div>	{/* END QUESTIONS HOLDER */}
                            {/* MORE QUESTIONS BUTTON */}
                            <div className="row">
                                <div className="col-md-12 text-center more-questions">
                                    <h5>Still have a question? <a href="/contacts" className="primary-color">Ask your question here</a></h5>
                                </div>
                            </div>
                        </div>	   {/* End container */}
                    </section>	{/* END FAQs-1 */}
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
                                        <a href="/pricing" className="btn btn-md btn-primary tra-white-hover">Get Started Now</a>
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