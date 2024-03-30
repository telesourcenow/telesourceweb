import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Blog1 from "@/components/sections/Blog1"
import Brands2 from "@/components/sections/Brands2"
import Content4 from "@/components/sections/Content4"
import Cta6 from "@/components/sections/Cta6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero5 from "@/components/sections/Hero5"
import Pricing2 from "@/components/sections/Pricing2"
import Projects3 from "@/components/sections/Projects3"
import Reviews3 from "@/components/sections/Reviews3"
import Services2 from "@/components/sections/Services2"
import Services4 from "@/components/sections/Services4"
import Services5 from "@/components/sections/Services5"
import Statistic1 from "@/components/sections/Statistic1"
import Tabs1 from "@/components/sections/Tabs1"
import Video2 from "@/components/sections/Video2"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-dark">
                <Hero5 />
                <Services5 />
                <About2 cls="wide-60" />
                <div className="section-divider"><div className="container"><div className="row"><div className="grey-border" /></div></div></div>
                <Services4 />
                <Content4 cls={"bg-primary pt-100"} style={3} />
                <Tabs1 />
                <Services2 cls={"bg-lightgrey"} />
                <Projects3 />
                <Statistic1 cls={"bg-blue bg-map"} />
                <Pricing2 />
                <Reviews3 title={"2,968 Positive Reviews From Our Customers"} />
                <Video2 />
                <Faqs1 />
                <Brands2 cls={"bg-lightgrey"} />
                <Blog1 />
                <Cta6 cls={"bg-06"} />
            </Layout>
        </>
    )
}