import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"

import 'swiper/css'
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "/public/css/bootstrap.min.css"
import "/public/css/dropdown-effects/fade-down.css"
import "/public/css/flaticon.css"
import "/public/css/flexslider.css"
import "/public/font-awesome/css/all.min.css"
import "/public/css/magnific-popup.css"
import "/public/css/menu.css"
import "/public/css/custom.css"
// import "/public/css/owl.carousel.min.css"
// import "/public/css/owl.theme.default.min.css"
import "/public/css/animate.css"
import "/public/css/green.css"
import "/public/assests/css/style.css"
import "/public/css/responsive.css"

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <Preloader />
        )}
    </>)
}

export default MyApp
