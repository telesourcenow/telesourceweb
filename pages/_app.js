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
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Preloader logic
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      // Tawk.to script
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/666f18939a809f19fb3e6c06/1i0gvg06f';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
  
      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <>
        {!loading ? (
          <Component {...pageProps} />
        ) : (
          <Preloader />
        )}
      </>
    );
  }
  
  export default MyApp;
  
