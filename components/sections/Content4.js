import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function Content4({ cls, style }) {
    return (
        <>
            <section id="content-4" className={`content-section division ${cls ? cls : ""}`}>
                <div className="container white-color">


                    {style === 1 &&
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 wow fadeInLeft" data-wow-delay="0.4s">
                                    {/* Section SubTitle */}
                                    <span className="section-subtitle">Boost Your Traffic</span>
                                    {/* Title */}
                                    <h4 className="h4-xl">Increase your website traffic with our proven approach</h4>
                                    {/* List */}
                                    <ul className="txt-list">
                                        <li>Vitae auctor integer congue magna at pretium blandit porta justo integer. Feugiat a
                                            ligula rutrum luctus primis ultrice
                                        </li>
                                        <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros
                                            dolor
                                            auctor ipsum blandit purus vehicula magna luctus tempor quisque
                                        </li>
                                    </ul>
                                    {/* SMALL STATISTIC */}
                                    <div className="small-statistic">
                                        <div className="row">
                                            {/* STATISTIC BLOCK #1 */}
                                            <div className="col-sm-6">
                                                <div className="statistic-block">
                                                    <h5 className="statistic-number">4,<span className="count-element"><CounterUp count={379} time={1} /></span></h5>
                                                    <p>Websites Improved</p>
                                                    <p className="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                                                </div>
                                            </div>
                                            {/* STATISTIC BLOCK #2 */}
                                            <div className="col-sm-6">
                                                <div className="statistic-block">
                                                    <h5 className="statistic-number"><span className="count-element"><CounterUp count={99} time={1} /></span>%</h5>
                                                    <p>Customer Satisfaction</p>
                                                    <p className="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* END SMALL STATISTIC */}
                                </div>
                            </div> {/* END TEXT BLOCK */}
                            {/* IMAGE BLOCK */}
                            <div className="col-md-5 col-lg-6">
                                <div className="content-4-img wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="/images/image-11.png" alt="content-image" />
                                </div>
                            </div>
                        </div>
                    }
                    {style === 2 &&
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 wow fadeInLeft" data-wow-delay="0.4s">
                                    {/* Section SubTitle */}
                                    <span className="section-subtitle">We're technical and creative</span>
                                    {/* Title */}
                                    <h4 className="h4-xl">Rely on our experienced and knowledgeable team</h4>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and
                                        odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus
                                        and ultrice a gravida lectus
                                    </p>
                                    <h5 className="h5-lg">We're proud to help businesses grow</h5>
                                    {/* Text */}
                                    <div className="cbox-1">
                                        <i className="fas fa-check" />
                                        <div className="cbox-1-txt">
                                            <p>An enim nullam tempor sapien gravida donec enim blandit ipsum at porta justo integer velna
                                                vitae auctor integer congue magna pretium purus pretium magnis nulla dolor sapien
                                            </p>
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-1">
                                        <i className="fas fa-check" />
                                        <div className="cbox-1-txt">
                                            <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus and dolor auctor
                                                ipsum a blandit purus tempor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END TEXT BLOCK */}
                            {/* IMAGE BLOCK */}
                            <div className="col-md-5 col-lg-6">
                                <div className="content-4-img wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-11.png" alt="content-image" />
                                </div>
                            </div>
                        </div>

                    }
                    {style === 3 &&
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 wow fadeInLeft" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl">Increase your website traffic with our proven approach</h4>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida purus pretium donec undo ipsum porta justo integer and velna
                                        vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice sapien
                                    </p>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida donec pretium undo ipsum porta justo integer odio velna
                                        vitae auctor integera congue magna purus pretium a ligula rutrum luctus blandit at justo tempor
                                    </p>
                                    {/* List */}
                                    <ul className="ico-list">
                                        <li><i className="fas fa-check primary-color" /> <span>Digital Competitive Analysis</span></li>
                                        <li><i className="fas fa-check primary-color" /> <span>Search Engine Optimization (SEO)</span></li>
                                        <li><i className="fas fa-check primary-color" /> <span>Strategy and Analytics Consulting</span></li>
                                    </ul>
                                </div>
                            </div>	{/* END TEXT BLOCK */}
                            {/* IMAGE BLOCK */}
                            <div className="col-md-5 col-lg-6">
                                <div className="content-4-img wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-11.png" alt="content-image" />
                                </div>
                            </div>
                        </div>

                    }
                    {style === 4 &&
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 wow fadeInLeft" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl darkblue-color">Increase your website traffic with our proven approach</h4>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio
                                        velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice
                                        a gravida lectus suscipit gestas magna suscipit luctus undo
                                    </p>
                                    {/* QUOTE */}
                                    <div className="quote quote-primary">
                                        {/* Quote Text */}
                                        <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean magna ligula eget dolor
                                            suscipit egestas at viverra dolor iaculis luctus magna suscipit egestas "
                                        </p>
                                        {/* Quote Avatar */}
                                        <div className="quote-avatar">
                                            <img src="images/quote-avatar.jpg" alt="quote-avatar" />
                                        </div>
                                        {/* Quote Author */}
                                        <div className="quote-author">
                                            <h5 className="h5-xs darkblue-color">Sean Mcmarthy </h5>
                                            <span className="grey-color">Founder of Metreex</span>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END TEXT BLOCK */}
                            {/* IMAGE BLOCK */}
                            <div className="col-md-5 col-lg-6">
                                <div className="content-4-img wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-11.png" alt="content-image" />
                                </div>
                            </div>
                        </div>

                    }
                    {style === 5 &&
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 wow fadeInLeft" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl">We will help your business achieve predictable growth</h4>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae
                                        auctor integer congue magna at pretium purus pretium ligula rutrum and luctus risus ultrice
                                    </p>
                                    {/* Small Title */}
                                    <h5 className="h5-lg">Committed to top quality and results</h5>
                                    {/* List */}
                                    <ul className="txt-list">
                                        <li>Vitae auctor integer congue magna at pretium blandit porta</li>
                                        <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros dolor
                                            auctor ipsum blandit purus
                                        </li>
                                        <li>Gravida donec pretium ipsum porta justo integer and odio velna vitae auctor integera congue
                                            undo purus pretium ligula
                                        </li>
                                    </ul>
                                </div>
                            </div>	{/* END TEXT BLOCK */}
                            {/* IMAGE BLOCK */}
                            <div className="col-md-5 col-lg-6">
                                <div className="content-4-img wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-11.png" alt="content-image" />
                                </div>
                            </div>
                        </div>

                    }

                    {/* End row */}
                </div> {/* End container */}
            </section>

        </>
    )
}
