import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Brands2 from "@/components/sections/Brands2"
import Contacts2 from "@/components/sections/Contacts2"
import Content2 from "@/components/sections/Content2"
import Content4 from "@/components/sections/Content4"
import Content5 from "@/components/sections/Content5"
import Faqs1 from "@/components/sections/Faqs1"
import Hero4 from "@/components/sections/Hero4"
import Pricing1 from "@/components/sections/Pricing1"
import Projects1 from "@/components/sections/Projects1"
import Reviews3 from "@/components/sections/Reviews3"
import Reviews4 from "@/components/sections/Reviews4"
import Services4 from "@/components/sections/Services4"
import Services5 from "@/components/sections/Services5"
import Video2 from "@/components/sections/Video2"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="tra-menu navbar-light">
                <Hero4 />
                <About2 cls="pt-60 pb-60" />
                <Services5 />
                <Content2 cls={"wide-60"} />
                <Content4 cls={"bg-primary bg-map pt-100"} style={1} />
                <Services4 />
                <Projects1 />
                <Reviews4 cls={"bg-05"} />
                <Content5 style={4} />
                <Reviews3 title={"2,968 Positive Reviews From Our Customers"} />
                <Video2 />
                <Pricing1 />
                <Brands2 cls={"bg-lightgrey"} />
                <Faqs1 />
                <Contacts2 cls={"bg-primary bg-map "} />
            </Layout>
        </>
    )
}