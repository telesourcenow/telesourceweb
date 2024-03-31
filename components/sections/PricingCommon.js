import React from 'react'
import Link from "next/link"

const PricingCommon = () => {
  return (
        <div>
            <section id="cta-4" className="bg-06 cta-section division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-8">
                            <div className="cta-txt">
                                <h3 className="h3-xs">Enhance Your Online Visibility Today!</h3>
                                    <p className="p-md">
                                        Elevate your online visibility with competitive pricing strategies. 
                                        Stand out in search rankings and attract more customers today!"
                                    </p>
                            </div>
                        </div>	
                    <div className="col-lg-4">
                        <div className="cta-btn text-right">
                            <Link href="/pricing" className="btn btn-md btn-primary tra-white-hover">Get Started Now</Link>
                        </div>
                    </div>
                </div>	 
            </div>	   
            </section>	
    </div>
  )
}

export default PricingCommon
