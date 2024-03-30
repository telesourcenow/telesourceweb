import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Blog1 from "@/components/sections/Blog1"
import Contacts2 from "@/components/sections/Contacts2"
import Content4 from "@/components/sections/Content4"
import Content6 from "@/components/sections/Content6"
import Content8 from "@/components/sections/Content8"
import Cta6 from "@/components/sections/Cta6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero12 from "@/components/sections/Hero12"
import Pricing1 from "@/components/sections/Pricing1"
import Reviews3 from "@/components/sections/Reviews3"
import Services4 from "@/components/sections/Services4"
import Statistic3 from "@/components/sections/Statistic3"
import Tabs1 from "@/components/sections/Tabs1"
import Video3 from "@/components/sections/Video3"
export default function Home12() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-light">
                <Hero12 />
                <Services4 />
                <About2 cls="bg-lightgrey wide-60" />
                <Statistic3 />
                <Video3 cls={"bg-05"} />
                <Content6 style={4} />
                <Reviews3 />
                <Content4 cls={"pt-100"} style={5} />
                <Cta6 cls={"bg-06"} />
                <Tabs1 />
                <Pricing1 cls={"bg-lightgrey"} />
                <Faqs1 />
                <Content8 />
                <Blog1 />
                <Contacts2 cls={"bg-06"} />
            </Layout>
        </>
    )
}