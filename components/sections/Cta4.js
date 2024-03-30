import Link from "next/link"


export default function Cta4({ cls }) {
    return (
        <>
            <section id="cta-4" className={`bg-06 cta-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* CALL TO ACTION TEXT */}
                        <div className="col-lg-8">
                            <div className="cta-txt">
                                {/* Title */}
                                <h3 className="h3-xs">Improve your search ranking now!</h3>
                                {/* Text */}
                                <p className="p-md">Donec vel sapien augue integer urna vel turpis cursus porta, mauris sed augue
                                    luctus dolor velna auctor congue tempus magna integer
                                </p>
                            </div>
                        </div>	{/* END CALL TO ACTION TEXT */}
                        {/* CALL TO ACTION BUTTON */}
                        <div className="col-lg-4">
                            <div className="cta-btn text-right">
                                <Link href="/pricing" className="btn btn-md btn-primary tra-white-hover">Get Started Now</Link>
                            </div>
                        </div>
                    </div>	 {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
