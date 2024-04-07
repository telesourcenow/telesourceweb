import React from 'react'

const About = () => {
  return (
        <div>
            <div className="row d-flex align-items-center">
 
                <div className="col-md-7 col-lg-6">
                    <div className="txt-block pc-25 mb-40">
                        {/* Section SubTitle */}
                        <span className="section-subtitle bluestone-color">About Us</span>
                        {/* Title */}
                        <h4 className="h4-xl">WE ARE DIFFERENT</h4>
                    
                        {/* QUOTE */}
                        <div className="quote quote-primary">
                            {/* Quote Text */}
                            <p>
                            Welcome to TelesourceNow, a provider of business services that is shaping the future with 
                            boundless possibilities. We offer cutting edge technology enabled solutions to empower the worlds 
                            brands, in optimizing their operations in sustainable ways all with the aim of achieving their
                            business objectives.
                            </p>
                        </div>
                    </div>
                </div> {/* END ABOUT TEXT */}

                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block pr-25 mb-40">
                            <img className="img-fluid" style={{ borderRadius: '40px'}} src="/images/home-about.webp" alt="about-image" />
                        </div>
                    </div>
                    {/* ABOUT TEXT */}
                    </div>
    </div>
  )
}

export default About
