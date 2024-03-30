import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Brands2 from "@/components/sections/Brands2"
import Content1 from "@/components/sections/Content1"
import Content5 from "@/components/sections/Content5"
import Content6 from "@/components/sections/Content6"
import Cta4 from "@/components/sections/Cta4"
import Faqs1 from "@/components/sections/Faqs1"
import Hero8 from "@/components/sections/Hero8"
import Pricing1 from "@/components/sections/Pricing1"
import Projects1 from "@/components/sections/Projects1"
import Reviews3 from "@/components/sections/Reviews3"
import Reviews4 from "@/components/sections/Reviews4"
import Services4 from "@/components/sections/Services4"
import Statistic1 from "@/components/sections/Statistic1"
import Video2 from "@/components/sections/Video2"
export default function Home8() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="tra-menu navbar-light">
                <Hero8 />
                <Content5   style={2}/>
                <About1 cls="bg-lightgrey" style={5}/>
                <Services4 />
                <Statistic1 cls={"bg-02"}/>
                <Content1 cls={"wide-60"} />
                <Reviews3 />
                <Reviews4 cls={"bg-05"} />
                <Content6  style={3}/>
                <Projects1 />
                <Video2 />
                <Pricing1 />
                <Brands2 cls={"bg-lightgrey"} />
                <Faqs1 />
                <Cta4 />
            </Layout>
        </>
    )
}