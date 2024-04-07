import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function HomeCounter () {
    return (
        <>
            <section>
            <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                            {/* Section SubTitle */}
                            <span className="section-subtitle bluestone-color">Plannig For The Future</span>
                            {/* Title */}
                            <h3 className="h3-lg">Our Track Record Of Success</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div> {/* END SECTION TITLE */}
                    {/* STATISTIC DATA */}
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="row">
                                {/* STATISTIC BLOCK #1 */}
                                <div className="col-md-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.4s">
                                        {/* Statistic Digit */}
                                        <h5 className="statistic-number primary-color">3,<span className="count-element"><CounterUp count={485} time={1} /></span>
                                        </h5>
                                        {/* Text */}
                                        <p className="p-md grey-color">Links Optimized</p>
                                        <p className="p-sm grey-color">Sagittis congue augue egestas and egestas magna ociis</p>
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #2 */}
                                <div className="col-md-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.6s">
                                        {/* Statistic Digit */}
                                        <h5 className="statistic-number primary-color">2,<span className="count-element"><CounterUp count={287} time={1} /></span>
                                        </h5>
                                        {/* Text */}
                                        <p className="p-md grey-color">Happy Customers</p>
                                        <p className="p-sm grey-color">Sagittis congue augue egestas and egestas magna ociis</p>
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #3 */}
                                <div className="col-md-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.8s">
                                        {/* Statistic Digit */}
                                        <h5 className="statistic-number primary-color">4,<span className="count-element"><CounterUp count={379} time={1} /></span>
                                        </h5>
                                        {/* Text */}
                                        <p className="p-md grey-color">Websites Improved</p>
                                        <p className="p-sm grey-color">Sagittis congue augue egestas and egestas magna ociis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* END STATISTIC DATA */}
                </div> {/* End container */}
            </section>

        </>
    )
}
