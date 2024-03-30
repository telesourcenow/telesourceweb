export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header id="header" className="header tra-menu navbar-light">
                <div className="header-wrapper">
                    {/* MOBILE HEADER */}
                    <div className="wsmobileheader clearfix">
                        <span className="smllogo"><img src="/images/logo.png" width={162} height={40} alt="mobile-logo" /></span>
                    </div>
                    {/* LOGO IMAGE */}
                    <div className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}>
                        <div className="wsmainwp clearfix">
                            <div className="desktoplogo"><a href="#" className="logo-black"><img src="/images/logo.png" width={162} height={40} alt="header-logo" /></a></div>
                            <div className="desktoplogo"><a href="#" className="logo-white"><img src="/images/logo-white.png" width={162} height={40} alt="header-logo" /></a></div>
                        </div>
                    </div>	{/* END LOGO IMAGE */}
                </div>     {/* End header-wrapper */}
            </header>

        </>
    )
}
