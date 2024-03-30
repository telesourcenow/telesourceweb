import Link from "next/link"


export default function Cta5({ cls }) {
    return (
        <>
            <section id="cta-5" className={`bg-06 cta-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row">
                        {/* CALL TO ACTION TEXT */}
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-txt text-center">
                                {/* Title */}
                                <h3 className="h3-xl">Custom SEO Services – Our Specialty!</h3>
                                <h5 className="h5-xl">Get more sales with SEO, PPC, and Email Marketing</h5>
                                {/* Link */}
                                <Link href="tel:123456789"><i className="fas fa-phone-square-alt" /> 855-569-7890</Link>
                            </div>
                        </div>	{/* END CALL TO ACTION TEXT */}
                    </div>	 {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
