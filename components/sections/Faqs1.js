import { useState } from 'react'

export default function Faqs1() {

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
            <section className='mb-5'>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Section SubTitle */}
                            <span className="section-subtitle bluestone-color">Have Questions? Look Here</span>
                            {/* Title */}
                            <h3 className="h3-lg">Frequently Asked Questions</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div> {/* END SECTION TITLE */}
                    {/* QUESTIONS HOLDER */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div id="accordion" role="tablist">
                                {/* QUESTION #1 */}
                                <div className="card">
                                    {/* Question */}
                                    <div className="card-header" role="tab">
                                        <h5 className="h5-sm" onClick={() => handleToggle(1)}>
                                            <a className={isActive.key == 1 ? "collapsed" : ""} data-toggle="collapsed" role="button" aria-expanded="true" >
                                                Do you require a contract?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 1 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo.
                                                Velna vitae and
                                                congue auctor magna nihil impedit ligula risus. Mauris donec ociis et magnis
                                                sapien etiam
                                                sapien sagittis congue tempor gravida donec enim ipsum porta justo integer
                                                at odio velna
                                                placerat purus, aliquet elementum massa mollis risus lectus porta rutrum
                                                magna dignissim,
                                                porttitor hendrerit
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* END QUESTION #1 */}
                                {/* QUESTION #2 */}
                                <div className="card">
                                    {/* Question */}
                                    <div className="card-header" role="tab">
                                        <h5 className="h5-sm" onClick={() => handleToggle(2)}>
                                            <a className={isActive.key == 2 ? "collapsed" : ""} >
                                                Should I ask to see law firm website ranking proof?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 2 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque
                                                vel laoreet
                                                turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                                                consectetur
                                                nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce
                                                eu cursus est.
                                                Fusce non nulla vitae massa placerat vulputate vel a purus
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* END QUESTION #2 */}
                                {/* QUESTION #3 */}
                                <div className="card">
                                    {/* Question */}
                                    <div className="card-header" role="tab">
                                        <h5 className="h5-sm" onClick={() => handleToggle(3)}>
                                            <a className={isActive.key == 3 ? "collapsed" : ""} >
                                                Do you provide details of what SEO work you will be doing?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 3 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien
                                                egestas,
                                                congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas
                                                neque vitae
                                                auctor eros dolor luctus odio placerat magna cursus
                                            </p>
                                            {/* List */}
                                            <ul className="txt-list">
                                                <li>Vitae auctor integer congue magna at pretium</li>
                                                <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus
                                                    risus eros dolor auctor
                                                    ipsum blandit purus vehicula magna and luctus tempor quisque
                                                </li>
                                                <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et
                                                    magnis ipsum porta justo
                                                    integer velna purus ehicula magna luctus vel laoreet turpis
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> {/* END QUESTION #3 */}
                                {/* QUESTION #4 */}
                                <div className="card">
                                    {/* Question */}
                                    <div className="card-header" role="tab">
                                        <h5 className="h5-sm" onClick={() => handleToggle(4)}>
                                            <a className={isActive.key == 4 ? "collapsed" : ""} >
                                                What is on-page search engine optimization?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 4 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit
                                                tristique justo
                                                ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non
                                                molestie sed purus,
                                                venenatis nec. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt
                                                massa, et porttitor
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* END QUESTION #4 */}
                                {/* QUESTION #5 */}
                                <div className="card">
                                    {/* Question */}
                                    <div className="card-header" role="tab">
                                        <h5 className="h5-sm" onClick={() => handleToggle(5)}>
                                            <a className={isActive.key == 5 ? "collapsed" : ""} >
                                                How much do your monthly services cost?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 5 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* List */}
                                            <ul className="txt-list">
                                                <li>Vitae auctor integer congue magna at pretium</li>
                                                <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus
                                                    risus eros dolor auctor
                                                    ipsum blandit purus vehicula magna and luctus tempor quisque
                                                </li>
                                                <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et
                                                    magnis ipsum porta justo
                                                    integer velna purus ehicula magna luctus vel laoreet turpis
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> {/* END QUESTION #5 */}
                            </div> {/* END ACCORDION */}
                        </div> {/* End col-x */}
                    </div> {/* END QUESTIONS HOLDER */}
                    {/* MORE QUESTIONS BUTTON */}
                    <div className="row">
                        <div className="col-md-12 text-center more-questions">
                            <h5>Still have a question? <a href="/contacts" className="primary-color">Ask your question
                                here</a></h5>
                        </div>
                    </div>
                </div> {/* End container */}
            </section>

        </>
    )
}
