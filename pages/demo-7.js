import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Brands2 from "@/components/sections/Brands2"
import Contacts2 from "@/components/sections/Contacts2"
import Content4 from "@/components/sections/Content4"
import Content6 from "@/components/sections/Content6"
import Cta6 from "@/components/sections/Cta6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero7 from "@/components/sections/Hero7"
import Pricing1 from "@/components/sections/Pricing1"
import Projects2 from "@/components/sections/Projects2"
import Reviews3 from "@/components/sections/Reviews3"
import Services3 from "@/components/sections/Services3"
import Services4 from "@/components/sections/Services4"
import Statistic1 from "@/components/sections/Statistic1"
import Tabs1 from "@/components/sections/Tabs1"
import Video3 from "@/components/sections/Video3"
export default function Home7() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-light">
                <Hero7 />
                <Services3 />
                <About1 cls="bg-lightgrey" style={4} />
                <Content4 cls={"pt-100"} style={4} />
                <Statistic1 cls={"bg-02"} />
                <Services4 />
                <Content6 cls={"bg-lightgrey"} style={3} />
                <Projects2 />
                <Video3 cls={"bg-05"} />
                <Tabs1 />
                <Reviews3 />
                <Faqs1 />
                <Cta6 cls={"bg-blue bg-pattern "} />
                <Pricing1 />
                <Brands2 cls={"bg-lightgrey"} />
                <Blog1 />
                <Contacts2 cls={"bg-blue bg-map"} />
            </Layout>
        </>
    )
}