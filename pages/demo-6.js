import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import About2 from "@/components/sections/About2"
import Brands2 from "@/components/sections/Brands2"
import Content4 from "@/components/sections/Content4"
import Content6 from "@/components/sections/Content6"
import Cta4 from "@/components/sections/Cta4"
import Cta6 from "@/components/sections/Cta6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero6 from "@/components/sections/Hero6"
import Pricing1 from "@/components/sections/Pricing1"
import Projects2 from "@/components/sections/Projects2"
import Reviews3 from "@/components/sections/Reviews3"
import Reviews4 from "@/components/sections/Reviews4"
import Services4 from "@/components/sections/Services4"
import Services5 from "@/components/sections/Services5"
import Team1 from "@/components/sections/Team1"
import Video3 from "@/components/sections/Video3"
export default function Home6() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-light">
                <Hero6 />
                <About2 cls="wide-60" />
                <Services5 />
                <About1 style={3} />
                <Video3 cls={"bg-05"} />
                <Services4 />
                <Projects2 cls={"bg-lightgrey"} />
                <Content6 style={3} />
                <Reviews4 cls={"bg-03"} />
                <Content4 cls={"pt-100"} style={4} />
                <Reviews3 />
                <Team1 />
                <Cta6 />
                <Pricing1 />
                <Brands2 cls={"bg-lightgrey"} />
                <Faqs1 />
                <Cta4 cls={"bg-03"} />
            </Layout>
        </>
    )
}