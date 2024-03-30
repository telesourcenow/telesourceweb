import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Brands2 from "@/components/sections/Brands2"
import Content2 from "@/components/sections/Content2"
import Content5 from "@/components/sections/Content5"
import Content8 from "@/components/sections/Content8"
import Cta4 from "@/components/sections/Cta4"
import Faqs1 from "@/components/sections/Faqs1"
import Hero2 from "@/components/sections/Hero2"
import Pricing2 from "@/components/sections/Pricing2"
import Projects2 from "@/components/sections/Projects2"
import Reviews3 from "@/components/sections/Reviews3"
import Reviews4 from "@/components/sections/Reviews4"
import Services2 from "@/components/sections/Services2"
import Services4 from "@/components/sections/Services4"
import Statistic1 from "@/components/sections/Statistic1"
import Video3 from "@/components/sections/Video3"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-dark dark-scroll">
                <Hero2 />
                <Brands2 />
                <Content5 cls={"bg-lightgrey"} style={2} />
                <Services4 />
                <Statistic1 cls={"bg-06"} />
                <About1 cls="bg-lightgrey" style={2} />
                <Reviews3 title={"2,968 Positive Reviews From Our Customers"} />
                <Services2 />
                <Reviews4 cls={"bg-05"} />
                <Projects2 />
                <Content2 cls={"bg-lightgrey wide-60"} />
                <Pricing2 />
                <Video3 cls={"bg-indigo bg-map "} />
                <Faqs1 />
                <Content8 />
                <Blog1 />
                <Cta4 />
            </Layout>
        </>
    )
}