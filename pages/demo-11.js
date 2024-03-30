import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Brands2 from "@/components/sections/Brands2"
import Content1 from "@/components/sections/Content1"
import Content4 from "@/components/sections/Content4"
import Content6 from "@/components/sections/Content6"
import Cta5 from "@/components/sections/Cta5"
import Cta6 from "@/components/sections/Cta6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero11 from "@/components/sections/Hero11"
import Pricing2 from "@/components/sections/Pricing2"
import Projects2 from "@/components/sections/Projects2"
import Reviews3 from "@/components/sections/Reviews3"
import Services4 from "@/components/sections/Services4"
import Sp1 from "@/components/sections/Sp1"
import Statistic3 from "@/components/sections/Statistic3"
import Video3 from "@/components/sections/Video3"
export default function Home11() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="tra-menu navbar-dark dark-scroll">
                <Hero11 />
                <About1 cls="bg-lightgrey" style={1} />
                <Statistic3 />
                <Cta6 cls={"bg-06"} />
                <Services4 />
                <Content1 cls={"bg-lightgrey wide-60"} />
                <Sp1 />
                <Video3 cls={"bg-05"} />
                <Content6 style={2} />
                <Reviews3 title={"2,968 Positive Reviews From Our Customers"} />
                <Content4 cls={"pt-100"} style={4} />
                <Brands2 cls={"bg-06"} light />
                <Projects2 />
                <Pricing2 cls={"bg-lightgrey"} />
                <Faqs1 />
                <Cta5 />
            </Layout>
        </>
    )
}