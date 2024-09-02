import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function HomeCounter () {
    return (
        <>
            <section>
            <div className="container-fluid mt-3">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Section SubTitle */}
                            {/* <span className="section-subtitle bluestone-color">Plannig For The Future</span> */}
                            {/* Title */}
                            <h3 className="">Score Board</h3>
                            {/* Text */}
                        </div>
                    </div> {/* END SECTION TITLE */}
                    {/* STATISTIC DATA */}
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="row">
                                {/* STATISTIC BLOCK #1 */}
                                <div className="col-md-4">
                                    <div className="statistic-block bg-gray">
                                        {/* Statistic Digit */}
                                        <h3 className="primary-color font-weight-bold">Industry</h3>
                                        <h2 className="statistic-number primary-secondary"><span className="count-element"><CounterUp count={12} time={1} />+</span>
                                        </h2>
                                        {/* Text */}
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #2 */}
                                <div className="col-md-4">
                                    <div className="statistic-block">
                                        {/* Statistic Digit */}
                                        <h3 className="primary-color font-weight-bold">Brands</h3>
                                        <h2 className="statistic-number primary-secondary"><span className="count-element"><CounterUp count={100} time={1} />+</span>
                                        </h2>
                                        {/* Text */}
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #3 */}
                                <div className="col-md-4">
                                    <div className="statistic-block">
                                        {/* Statistic Digit */}
                                        <h3 className="primary-color font-weight-bold">Cities Covered </h3>
                                        <h2 className="statistic-number primary-secondary"><span className="count-element"><CounterUp count={2000} time={1} />+</span>
                                        </h2>
                                        {/* Text */}
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #4 */}
                                <div className="col-md-4">
                                    <div className="statistic-block">
                                        {/* Statistic Digit */}
                                        <h3 className="primary-color font-weight-bold">Workforce</h3>
                                        <h2 className="statistic-number primary-secondary"><span className="count-element"><CounterUp count={1} time={1} />Million +</span>
                                        </h2>
                                        {/* Text */}
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #5 */}
                                <div className="col-md-4">
                                    <div className="statistic-block">
                                        {/* Statistic Digit */}
                                        <h3 className="primary-color font-weight-bold">Partners</h3>
                                        <h2 className="statistic-number primary-secondary"><span className="count-element"><CounterUp count={50} time={1} />+</span>
                                        </h2>
                                        {/* Text */}
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #6 */}
                                <div className="col-md-4">
                                    <div className="statistic-block">
                                        {/* Statistic Digit */}
                                        <h3 className="primary-color font-weight-bold">IT Consultants</h3>
                                        <h2 className="statistic-number primary-secondary"><span className="count-element"><CounterUp count={20} time={1} />+</span>
                                        </h2>
                                        {/* Text */}
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
