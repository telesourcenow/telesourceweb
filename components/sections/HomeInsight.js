import Link from "next/link"


export default function HomeInsight () {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-5 col-lg-6">
                            <div className="img-block pr-25 mb-40">
                                <img className="img-fluid" src="/images/image-03.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-7 col-lg-6">
                            <div className="txt-block pc-25 mb-40">
                                {/* Section SubTitle */}
                                <span className="section-subtitle bluestone-color">Get Your Next Level</span>
                                {/* Title */}
                                <h4 className="h4-xl">Insights</h4>
                                {/* Text */}
                                <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and
                                    odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus
                                    and ultrice a gravida lectus
                                </p>
                                {/* List */}
                                <ul className="ico-list mb-10">
                                    <li><i className="fas fa-check primary-color" /> <span>Vitae auctor integer congue magna
                                        at pretium</span></li>
                                    <li><i className="fas fa-check primary-color" /> <span>Integer congue magna and pretium
                                        purus ligula</span></li>
                                    <li><i className="fas fa-check primary-color" /> <span>Sagittis congue augue egestas
                                        volutpat egestas</span></li>
                                </ul>
                                {/* Button */}
                                <Link href="#cta-6" className="btn btn-md btn-primary tra-black-hover">Read More...</Link>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </>
    )
}
