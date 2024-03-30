

export default function Services3({ cls }) {
    return (
        <>
            <section id="services-3" className={`wide-60 services-section division ${cls ? cls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                            {/* Title 	*/}
                            <h3 className="h3-sm">We know exactly how to increase your website traffic and grow up your business</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div>	{/* END SECTION TITLE */}
                    {/* SERVICE BOXES */}
                    <div className="row">
                        {/* SERVICE BOX #1 */}
                        <div className="col-md-4">
                            <div className="sbox-3 icon-xl wow fadeInUp" data-wow-delay="0.4s">
                                {/* Icon  */}
                                <img className="img-100" src="/images/icons/analytics-2.png" alt="feature-icon" />
                                {/* Title */}
                                <h5 className="h5-lg">Google Analytics</h5>
                                {/* Text */}
                                <p className="grey-color">Porta semper lacus a cursus feugiat primis ultrice and ligula risus
                                    auctor a posuere undo ligula varius
                                </p>
                            </div>
                        </div>
                        {/* SERVICE BOX #2 */}
                        <div className="col-md-4">
                            <div className="sbox-3 icon-lg wow fadeInUp" data-wow-delay="0.6s">
                                {/* Icon  */}
                                <img className="img-100" src="/images/icons/investment-1.png" alt="feature-icon" />
                                {/* Title */}
                                <h5 className="h5-lg">Monetary Planning</h5>
                                {/* Text */}
                                <p className="grey-color">Porta semper lacus a cursus feugiat primis ultrice and ligula risus
                                    auctor a posuere undo ligula varius
                                </p>
                            </div>
                        </div>
                        {/* SERVICE BOX #3 */}
                        <div className="col-md-4">
                            <div className="sbox-3 icon-lg wow fadeInUp" data-wow-delay="0.8s">
                                {/* Icon  */}
                                <img className="img-100" src="/images/icons/online-shop-1.png" alt="feature-icon" />
                                {/* Title */}
                                <h5 className="h5-lg">Market Research</h5>
                                {/* Text */}
                                <p className="grey-color">Porta semper lacus a cursus feugiat primis ultrice and ligula risus
                                    auctor a posuere undo ligula varius
                                </p>
                            </div>
                        </div>
                    </div>	{/* END SERVICE BOXES */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
