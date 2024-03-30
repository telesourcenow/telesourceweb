import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Brands1 from "@/components/sections/Brands1"
import Content2 from "@/components/sections/Content2"
import Content4 from "@/components/sections/Content4"
import Content5 from "@/components/sections/Content5"
import Content6 from "@/components/sections/Content6"
import Cta6 from "@/components/sections/Cta6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero1 from "@/components/sections/Hero1"
import Pricing1 from "@/components/sections/Pricing1"
import Projects1 from "@/components/sections/Projects1"
import Reviews3 from "@/components/sections/Reviews3"
import Services2 from "@/components/sections/Services2"
import Services4 from "@/components/sections/Services4"
import Statistic3 from "@/components/sections/Statistic3"
import Video3 from "@/components/sections/Video3"
export default function Home1() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-light" seoBtn>
                <Hero1 />
                <About1 cls="bg-lightgrey" style={1}/>
                <Services2 />
                <Content4 cls={"bg-primary bg-map pt-100"} />
                <Services4 />
                <Projects1 />
                <Content2 cls={"bg-lightgrey wide-60"} />
                <Statistic3 />
                {/* <Brands1 cls={"bg-purple bg-pattern "} style={1} /> */}
                {/* <Content5  style={1}/> */}
                {/* <Content6 style={1}/> */}
                {/* <Video3 cls={"bg-lightdark"}/> */}
                {/* <Pricing1 /> */}
                <Reviews3 />
                <Faqs1 />
                <Cta6 cls={"bg-purple bg-pattern "} />
            </Layout>
        </>
    )
}