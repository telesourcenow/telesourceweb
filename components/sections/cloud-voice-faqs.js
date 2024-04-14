import { useState } from 'react'

export default function CloudVoiceFaqs() {

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
                                            What services does Telesourcenow offer for outbound communication?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 1 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>
                                                Telesourcenow provides outbound call services, toll-free numbers, IVR solutions, virtual numbers, click-to-call options, and campaign framing to connect with customers and investors efficiently.
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
                                                How does Telesourcenow enhance caller satisfaction?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 2 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>
                                                Telesourcenow enhances caller satisfaction by offering cloud-based IVR services for personalized experiences, virtual numbers with AI technology, and the option for customers to request callbacks for a notable boost in ROI.
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
                                                What insights can businesses gain from Telesourcenow's NLP software?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 3 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>
                                            Telesourcenow's NLP software enables businesses to extract valuable insights from 
                                            diverse data formats, empowering users with robust analysis capabilities regardless of complexity, thus facilitating informed decision-making.
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* END QUESTION #3 */}
                                {/* QUESTION #4 */}
                                <div className="card">
                                    {/* Question */}
                                    <div className="card-header" role="tab">
                                        <h5 className="h5-sm" onClick={() => handleToggle(4)}>
                                            <a className={isActive.key == 4 ? "collapsed" : ""} >
                                            How does Telesourcenow ensure secure access to accounts and services?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 4 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* Text */}
                                            <p>
                                            Telesourcenow ensures secure access through auto-authentication and OTP via IVR technology, providing a seamless and hassle-free experience for users while maintaining robust security measures.
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
                                             How can businesses integrate Telesourcenow's services into their existing systems?
                                            </a>
                                        </h5>
                                    </div>
                                    {/* Answer */}
                                    <div className={isActive.key == 5 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div className="card-body">
                                            {/* List */}
                                           <p>
                                                Telesourcenow offers API integration for automated sending and receiving of calls, access to SMS APIs with sample codes in multiple programming languages, and complimentary IP phones and calling gateway for seamless communication integration with CRM and ERP systems.
                                           </p>
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
