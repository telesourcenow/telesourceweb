import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function Statistic1({ cls }) {
    return (
        <>
            <div id="statistic-1" className={`statistic-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row">
                        {/* STATISTIC BLOCK #1 */}
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block wow fadeInUp" data-wow-delay="0.4s">
                                {/* Text */}
                                <h5 className="statistic-number">3,<span className="count-element"><CounterUp count={485} time={1} /></span></h5>
                                <p className="p-md">Links Optimized</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #2 */}
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block wow fadeInUp" data-wow-delay="0.6s">
                                {/* Text */}
                                <h5 className="statistic-number">1,<span className="count-element"><CounterUp count={281} time={1} /></span></h5>
                                <p className="p-md">Happy Customers</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #3 */}
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block wow fadeInUp" data-wow-delay="0.8s">
                                {/* Text */}
                                <h5 className="statistic-number">4,<span className="count-element"><CounterUp count={379} time={1} /></span></h5>
                                <p className="p-md">Websites Improved</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #4 */}
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block wow fadeInUp" data-wow-delay="1s">
                                {/* Text */}
                                <h5 className="statistic-number">2,<span className="count-element"><CounterUp count={473} time={1} /></span></h5>
                                <p className="p-md">Active Accounts</p>
                            </div>
                        </div>
                    </div> {/* End row */}
                </div>	 {/* End container */}
            </div>

        </>
    )
}
