

export default function Brands2({ cls, light }) {
    return (
        <>
            <div id="brands-2" className={`brands-section division ${cls ? cls : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* Title */}
                            <p className={`p-lg ${light ? "lightgrey-color" : "grey-color"} `}>Used by startups, e-stores, web designers, and teams including:</p>
                            <ul className="brands-list">
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}1.png`} alt="brand-logo" />
                                </li>
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}2.png`} alt="brand-logo" />
                                </li>
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}3.png`} alt="brand-logo" />
                                </li>
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}4.png`} alt="brand-logo" />
                                </li>
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}5.png`} alt="brand-logo" />
                                </li>
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}6.png`} alt="brand-logo" />
                                </li>
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}7.png`} alt="brand-logo" />
                                </li>
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}8.png`} alt="brand-logo" />
                                </li>
                                {/* BRAND LOGO IMAGE */}
                                <li className="brand-logo">
                                    <img className="img-fluid" src={`/images/brand-${light ? "1" : ""}9.png`} alt="brand-logo" />
                                </li>
                            </ul>
                        </div>
                    </div>      {/* End row */}
                </div>	    {/* End container */}
            </div>

        </>
    )
}
