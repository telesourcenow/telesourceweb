// import { useEffect, useState } from "react"
// import BackToTop from '../elements/BackToTop'
// import Breadcrumb from './Breadcrumb'
// import PageHead from './PageHead'
// import Footer1 from './footer/Footer1'
// import Footer2 from './footer/Footer2'
// import Header1 from "./header/Header1"
// import Header2 from './header/Header2'
// import Footer3 from "./footer/Footer3"

// export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, headerCls,seoBtn }) {
//     const [scroll, setScroll] = useState(0)

//     const [isMobileMenu, setMobileMenu] = useState(false)
//     const handleMobileMenu = () => {
//         setMobileMenu(!isMobileMenu)
//         !isMobileMenu ? document.body.classList.add("wsactive") : document.body.classList.remove("wsactive")

//     }

//     useEffect(() => {
//         const WOW = require('wowjs')
//         window.wow = new WOW.WOW({
//             live: false
//         })
//         window.wow.init()

//         document.addEventListener("scroll", () => {
//             const scrollCheck = window.scrollY > 100
//             if (scrollCheck !== scroll) {
//                 setScroll(scrollCheck)
//             }
//         })
//     }, [])
//     return (
//         <>
//             <PageHead headTitle={headTitle} />
//             <div id="page" className="page">

//                 {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} seoBtn={seoBtn} />}
//                 {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} seoBtn={seoBtn} /> : null}
//                 {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} seoBtn={seoBtn} /> : null}



//                 {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
//                 {children}

//                 {!footerStyle && < Footer1 />}
//                 {footerStyle == 1 ? < Footer1 /> : null}
//                 {footerStyle == 2 ? < Footer2 /> : null}
//                 {footerStyle == 3 ? < Footer3 /> : null}

//             </div>
//                 <BackToTop />
//         </>
//     )
// }


import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import PageHead from './PageHead';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Footer3 from "./footer/Footer3";

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, headerCls, seoBtn }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu); // Toggle isMobileMenu state
    };

    // Effect to handle scrolling and initialize WOW.js
    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]); // Only re-run effect if 'scroll' state changes

    useEffect(() => {
        // Update body class when isMobileMenu changes
        if (isMobileMenu) {
            document.body.classList.add("wsactive");
        } else {
            document.body.classList.remove("wsactive");
        }
    }, [isMobileMenu]); // Only re-run effect if 'isMobileMenu' state changes

    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="page" className="page">
                {/* Render Header based on 'headerStyle' prop */}
                {(headerStyle === undefined || headerStyle === 0) && (
                    <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} seoBtn={seoBtn} />
                )}
                {headerStyle === 1 && (
                    <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} seoBtn={seoBtn} />
                )}
                {headerStyle === 2 && (
                    <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} seoBtn={seoBtn} />
                )}

                {/* Render Breadcrumb if 'breadcrumbTitle' is provided */}
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {/* Render children components */}
                {children}

                {/* Render Footer based on 'footerStyle' prop */}
                {(footerStyle === undefined || footerStyle === 0) && <Footer1 />}
                {footerStyle === 1 && <Footer1 />}
                {footerStyle === 2 && <Footer2 />}
                {footerStyle === 3 && <Footer3 />}
            </div>
            <BackToTop />
        </>
    );
}
