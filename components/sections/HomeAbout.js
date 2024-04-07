import React from 'react'

const HomeAbout = ({cls, style}) => {
  return (
    <>
    <section id="about-1" className={`wide-60 about-section division ${cls ? cls : ""}`}>
    <div>
      <div className="container">
      <div className="row">
 
        <div className="col-md-7 col-lg-6">
            <div className="mb-40 wow fadeInRight" data-wow-delay="0.4s">
                {/* Section SubTitle */}
                <span className="">About Us</span>
                {/* Title */}
                <h4 className="">WE ARE DIFFERENT</h4>
              
                {/* QUOTE */}
                <div className="">
                    {/* Quote Text */}
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
            <div className="wow fadeInLeft" data-wow-delay="0.6s">
                <img className='img-fluid' style={{ borderRadius: '40px'}} src="/images/home-about.webp" alt="about-image" />
            </div>
        </div>
      </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default HomeAbout
