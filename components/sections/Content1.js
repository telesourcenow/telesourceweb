

export default function Content1({ cls }) {
    return (
        <>
            <section id="content-1" className={`content-section division ${cls ? cls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-7 col-lg-6">
                            <div className="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
                                {/* Section SubTitle */}
                                <span className="section-subtitle bluestone-color">Plannig For The Future</span>
                                {/* Title */}
                                <h4 className="h4-xl">We will help your business achieve predictable growth</h4>
                                {/* Text */}
                                <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae
                                    auctor integer congue magna at pretium purus pretium ligula rutrum and luctus risus ultrice
                                </p>
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
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-5 col-lg-6">
                            <div className="img-block pl-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                <img className="img-fluid" src="/images/image-03.png" alt="content-image" />
                            </div>
                        </div>
                    </div>	  {/* End row */}
                </div>     {/* End container */}
            </section>

        </>
    )
}
