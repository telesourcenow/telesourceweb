import Link from "next/link"


export default function Content5({ cls, style }) {
    return (
        <>
            <section id="content-5" className={`wide-60 content-section division ${cls ? cls : ""}`}>
                <div className="container">




                    {style === 1 &&
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                    <span className="section-subtitle bluestone-color">Drive Sales  Leads</span>
                                    <h4 className="h4-xl">Our SEO plans will help you to dominate the search engines</h4>
                                    <p>Velna iaculis odio auctor integer congue and impedit magna viverra dolor vitae donec
                                        mauris lectus laoreet gestas neque undo luctus feugiat. Justo integer at odio velna
                                        vitae
                                    </p>
                                    <p>Integer congue magna at pretium purus pretium ligula at rutrum luctus risus eros dolor
                                        auctor ipsum blandit luctus purus vehicula magna a tempor. Quisque vel laoreet turpis
                                        and cubilia augue. Sagittis congue augue egestas volutpat egestas magna
                                    </p>
                                    <Link href="/pricing" className="btn btn-md btn-primary tra-black-hover">Our Pricing
                                        Packages</Link>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-6">
                                <div className="content-5-img mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="/images/image-09.png" alt="content-image" />
                                </div>
                            </div>
                        </div>
                    }
                    {style === 2 &&
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl indigo-color">Get more sales with SEO, PPC, and Email Marketing</h4>
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
                                                vitae auctor integer congue
                                            </p>
                                        </div>
                                    </div>
                                    {/* SMALL STATISTIC */}
                                    <div className="small-statistic">
                                        <div className="row">
                                            {/* STATISTIC BLOCK #1 */}
                                            <div className="col-sm-6">
                                                <div className="statistic-block">
                                                    <h5 className="statistic-number primary-color">4,<span className="count-element">379</span></h5>
                                                    <p className="indigo-color">Websites Improved</p>
                                                    <p className="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                                                </div>
                                            </div>
                                            {/* STATISTIC BLOCK #2 */}
                                            <div className="col-sm-6">
                                                <div className="statistic-block">
                                                    <h5 className="statistic-number primary-color"><span className="count-element">99</span>%</h5>
                                                    <p className="indigo-color">Customer Satisfaction</p>
                                                    <p className="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END SMALL STATISTIC */}
                                </div>
                            </div>	{/* END TEXT BLOCK */}
                            {/* IMAGE BLOCK */}
                            <div className="col-md-5 col-lg-6">
                                <div className="content-5-img mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-07.png" alt="content-image" />
                                </div>
                            </div>
                        </div>

                    }
                    {style === 3 &&
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl">Increase your website traffic with our proven approach</h4>
                                    {/* Text */}
                                    <p>Velna iaculis odio auctor integer congue and impedit magna viverra dolor vitae donec
                                        mauris lectus laoreet gestas neque undo luctus feugiat. Justo integer at odio velna vitae
                                    </p>
                                    {/* Text */}
                                    <p>Integer congue magna at pretium purus pretium ligula at rutrum luctus risus eros dolor
                                        auctor ipsum blandit luctus purus vehicula magna a tempor. Quisque vel laoreet turpis
                                        and cubilia augue. Sagittis congue augue egestas volutpat egestas magna
                                    </p>
                                    {/* List */}
                                    <ul className="ico-list">
                                        <li><i className="fas fa-check primary-color" /> <span>Vitae auctor integer congue magna at pretium</span></li>
                                        <li><i className="fas fa-check primary-color" /> <span>Integer congue magna at pretium purus ligula</span></li>
                                        <li><i className="fas fa-check primary-color" /> <span>Sagittis congue augue egestas volutpat egestas</span></li>
                                    </ul>
                                </div>
                            </div>	{/* END TEXT BLOCK */}
                            {/* IMAGE BLOCK */}
                            <div className="col-md-5 col-lg-6">
                                <div className="content-5-img mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-07.png" alt="content-image" />
                                </div>
                            </div>
                        </div>

                    }
                    {style === 4 &&
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl">Our SEO plans will help you to dominate the search engines</h4>
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
                            {/* IMAGE BLOCK */}
                            <div className="col-md-5 col-lg-6">
                                <div className="content-5-img mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-09.png" alt="content-image" />
                                </div>
                            </div>
                        </div>

                    }
                </div>
            </section>

        </>
    )
}
