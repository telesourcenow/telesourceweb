import React from 'react'
import Link from "next/link"

const HomeAbout = ({cls, style}) => {
  return (
    <>
   <section id="about-1" className={`wide-60 about-section division ${cls ? cls : ""}`}>
                <div className="container">

                    {style === 1 &&
                        <div className="row d-flex align-items-center">
 
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40">
                                    <span className="section-subtitle bluestone-color">About Us</span>
                                    <h4 className="h4-xl">WE ARE DIFFERENT</h4>
                                  
                                    <div className="quote quote-primary">
                                        <p>
                                        Welcome to TelesourceNow, a provider of business services that is shaping the future with 
                                        boundless possibilities. We offer cutting edge technology enabled solutions to empower the worlds 
                                        brands, in optimizing their operations in sustainable ways all with the aim of achieving their
                                        business objectives.
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-md-5 col-lg-6">
                                <div className="img-block pr-25 mb-40">
                                    <img className="img-fluid" style={{ borderRadius: '40px'}} src="/images/home-about.webp" alt="about-image" />
                                </div>
                            </div>
                        </div>
                    }

                </div> 
            </section>
    </>
  )
}

export default HomeAbout
