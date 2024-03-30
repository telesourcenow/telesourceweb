import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Brands1 from "@/components/sections/Brands1"
import Contacts2 from "@/components/sections/Contacts2"
import Content2 from "@/components/sections/Content2"
import Content5 from "@/components/sections/Content5"
import Content6 from "@/components/sections/Content6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero3 from "@/components/sections/Hero3"
import Pricing2 from "@/components/sections/Pricing2"
import Projects2 from "@/components/sections/Projects2"
import Reviews2 from "@/components/sections/Reviews2"
import Reviews4 from "@/components/sections/Reviews4"
import Services4 from "@/components/sections/Services4"
import Statistic3 from "@/components/sections/Statistic3"
import Video2 from "@/components/sections/Video2"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-light">
                <Hero3 />
                <About1 style={1} />
                <Services4 cls={"bg-lightgrey"} />
                <Content5 style={3} />
                <div className="section-divider"><div className="container"><div className="row"><div className="grey-border" /></div></div></div>
                <Content6 style={2} />
                <Reviews2 />
                <Statistic3 />
                <Content2 cls={"bg-lightgrey wide-60"} />
                <Projects2 />
                <Reviews4 cls={"bg-05"} />
                <Pricing2 />
                <Brands1 cls={"bg-lightgrey"} style={2} />
                <Faqs1 />
                <Video2 />
                <Blog1 />
                <Contacts2 cls={"bg-purple bg-pattern"} />
            </Layout>
        </>
    )
}