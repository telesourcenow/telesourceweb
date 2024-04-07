import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"

export default function Healthcare() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Healthcare"}>
                <div>
                    <section  className="pt-80 pb-30 services-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                        <div className="sbox-2">
                                            <h5 className="h5-md">Healthcare</h5>
                                            <p className="p-sm grey-color">
                                                Will be updated soon.....
                                            </p>
                                        </div>
                                </div>
                            </div>	  
                        </div>	   
                    </section>	
                    <PricingCommon />
                </div>
            </Layout>
        </>
    )
}