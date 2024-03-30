import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Brands2 from "@/components/sections/Brands2"
import Contacts2 from "@/components/sections/Contacts2"
import Content5 from "@/components/sections/Content5"
import Content8 from "@/components/sections/Content8"
import Cta6 from "@/components/sections/Cta6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero9 from "@/components/sections/Hero9"
import Pricing1 from "@/components/sections/Pricing1"
import Projects3 from "@/components/sections/Projects3"
import Reviews3 from "@/components/sections/Reviews3"
import Services3 from "@/components/sections/Services3"
import Services4 from "@/components/sections/Services4"
import Statistic3 from "@/components/sections/Statistic3"
import Tabs1 from "@/components/sections/Tabs1"
import Video3 from "@/components/sections/Video3"
export default function Home9() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-light" seoBtn>
                <Hero9 />
                <Services3 />
                <About1 cls="bg-lightgrey" style={1} />
                <Content5 style={2} />
                <Cta6 cls={"bg-blue bg-pattern "} />
                <Tabs1 />
                <Services4 cls={"bg-lightgrey"} />
                <Projects3 />
                <Video3 cls={"bg-05"} />
                <Statistic3 />
                <Reviews3 />
                <Pricing1 />
                <Brands2 cls={"bg-06"} light />
                <Faqs1 />
                <Content8 />
                <Blog1 />
                <Contacts2 cls={"bg-blue bg-map"} />
            </Layout>
        </>
    )
}