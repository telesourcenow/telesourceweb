import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Brands2 from "@/components/sections/Brands2"
import Contacts2 from "@/components/sections/Contacts2"
import Content2 from "@/components/sections/Content2"
import Content4 from "@/components/sections/Content4"
import Content6 from "@/components/sections/Content6"
import Cta6 from "@/components/sections/Cta6"
import Faqs1 from "@/components/sections/Faqs1"
import Hero10 from "@/components/sections/Hero10"
import Pricing1 from "@/components/sections/Pricing1"
import Projects3 from "@/components/sections/Projects3"
import Reviews3 from "@/components/sections/Reviews3"
import Services2 from "@/components/sections/Services2"
import Services4 from "@/components/sections/Services4"
import Statistic1 from "@/components/sections/Statistic1"
import Team1 from "@/components/sections/Team1"
import Video3 from "@/components/sections/Video3"
export default function Home10() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="tra-menu navbar-light">
                <Hero10 />
                <About1 style={1} />
                <Services2 cls={"bg-lightcyan"} />
                <Content4 cls={"pt-100"} />
                <Cta6 cls={"bg-darkblue bg-pattern"} />
                <Services4 />
                <Content6 cls={"bg-lightcyan"} style={2} />
                <Projects3 />
                <Statistic1 cls={"bg-03"} />
                <Content2 cls={"wide-60"} />
                <Reviews3 />
                <Team1 />
                <Video3 cls={"bg-05"} />
                <Pricing1 />
                <Brands2 cls={"bg-lightgrey"} />
                <Faqs1 />
                <Contacts2 cls={"bg-darkblue bg-map"} />
            </Layout>
        </>
    )
}