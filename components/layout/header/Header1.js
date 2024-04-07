import Link from "next/link"

import Menu from "../Menu"
import Sidebar from "../Sidebar"
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, headerCls,seoBtn }) {
    return (
        <>
            <header id="header" className={`header ${headerCls ? headerCls : ""}`}>
                <div className="header-wrapper">
                    {/* MOBILE HEADER */}
                    <div className="wsmobileheader clearfix">
                        <a id="wsnavtoggle" onClick={handleMobileMenu} className="wsanimated-arrow"><span /></a>
                        <span className="smllogo smllogo-black"><img src="/images/logo.png" width={180} height={50} alt="mobile-logo" /></span>
                        <span className="smllogo smllogo-white"><img src="/images/logo-white.png" width={180} height={50} alt="mobile-logo" /></span>

                        <Link href="tel:123456789" className="callusbtn"><i className="fas fa-phone" /></Link>
                    </div>
                    {/* NAVIGATION MENU */}
                    <div className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}>
                        <div className="wsmainwp clearfix">
                            {/* LOGO IMAGE */}
                            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 334 x 80 pixels) */}
                            <div className="desktoplogo">
                                <Link href="/" className="logo-black"><img src="/images/logo.png" width={220} height={60} alt="header-logo" /></Link>
                            </div>
                            <div className="desktoplogo">
                                <Link href="/" className="logo-white"><img src="/images/logo-white.png" width={220} height={60} alt="header-logo" /></Link>
                            </div>
                            {/* MAIN MENU */}
                            <nav className="wsmenu clearfix">
                                <div className="overlapblackbg" onClick={handleMobileMenu} />
                                {isMobileMenu ? <Sidebar /> : <Menu seoBtn={seoBtn} />}
                            </nav> {/* END MAIN MENU */}
                        </div>
                    </div> {/* END NAVIGATION MENU */}
                </div> {/* End header-wrapper */}
            </header>

        </>
    )
}
