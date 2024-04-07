import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"

export default function ERP() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"ERP"}>
                <div>
                    <section  className="pt-80 pb-30 services-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6">
                                        <div className="sbox-2">
                                            <h5 className="h5-md">Policy Sales:</h5>
                                            <p className="p-sm grey-color">
                                                Telecalling is crucial for selling insurance policies, explaining coverage options, 
                                                and helping customers choose the right plan for their needs.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                        <div className="sbox-2">
                                            <h5 className="h5-md">Claims Assistance</h5>
                                            <p className="p-sm grey-color">
                                                Telecalling provides support during the claims process, helping customers understand 
                                                requirements, submit documentation, and track claim status.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                        <div className="sbox-2">
                                            <h5 className="h5-md">Customer Retention</h5>
                                            <p className="p-sm grey-color">
                                                Telecalling helps in retaining customers by offering 
                                                policy upgrades, providing renewal reminders, and addressing customer concerns proactively.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                        <div className="sbox-2">
                                            <h5 className="h5-md">Cross-selling and Up-selling</h5>
                                            <p className="p-sm grey-color">
                                                Telecalling is used to promote additional insurance products or coverage options 
                                                to existing customers based on their profiles and needs.
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