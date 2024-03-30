

export default function Services5({ cls }) {
    return (
        <>
            <section id="services-5" className={`bg-lightgrey wide-60 services-section division ${cls ? cls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* SERVICE BOX #1 */}
                        <div className="col-md-4">
                            <div className="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.4s">
                                {/* Icon */}
                                <img className="img-65" src="/images/icons/hierarchical-structure-1.png" alt="feature-icon" />
                                {/* Text */}
                                <div className="sbox-5-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Experienced and knowledgeable team</h5>
                                    {/* Text */}
                                    <p className="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis and
                                        viverra augue dictum tempor varius at posuere imperdiet
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* SERVICE BOX #2 */}
                        <div className="col-md-4">
                            <div className="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.6s">
                                {/* Icon */}
                                <img className="img-65" src="/images/icons/trophy-1.png" alt="feature-icon" />
                                {/* Text */}
                                <div className="sbox-5-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Transparent and trustworthy services</h5>
                                    {/* Text */}
                                    <p className="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis and
                                        viverra augue dictum tempor varius at posuere imperdiet
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* SERVICE BOX #3 */}
                        <div className="col-md-4">
                            <div className="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.8s">
                                {/* Icon */}
                                <img className="img-65" src="/images/icons/analytics-3.png" alt="feature-icon" />
                                {/* Text */}
                                <div className="sbox-5-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Quality Traffic. Measurable Results</h5>
                                    {/* Text */}
                                    <p className="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis and
                                        viverra augue dictum tempor varius at posuere imperdiet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>  {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
