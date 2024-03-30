

export default function About1({ cls, style }) {
    return (
        <>
            <section id="about-1" className={`wide-60 about-section division ${cls ? cls : ""}`}>
                <div className="container">

                    {/* End row */}
                    {style === 1 &&
                        <div className="row d-flex align-items-center">
 
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
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
                                <div className="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                    <img className="img-fluid" style={{ borderRadius: '40px'}} src="/images/home-about.webp" alt="about-image" />
                                </div>
                            </div>
                            {/* ABOUT TEXT */}
                        </div>
                    }
                    {style === 2 &&
                        <div className="row d-flex align-items-center">
                            {/* ABOUT IMAGE */}
                            <div className="col-md-5 col-lg-6">
                                <div className="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-01.png" alt="about-image" />
                                </div>
                            </div>
                            {/* ABOUT TEXT */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl">We're providing the best SEO services for your website</h4>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio
                                        velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice
                                        a gravida lectus suscipit gestas magna suscipit luctus undo
                                    </p>
                                    {/* QUOTE */}
                                    <div className="quote quote-primary">
                                        {/* Quote Text */}
                                        <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean magna ligula eget dolor
                                            suscipit egestas at viverra dolor iaculis luctus magna suscipit egestas "
                                        </p>
                                        {/* Quote Avatar */}
                                        <div className="quote-avatar">
                                            <img src="images/quote-avatar.jpg" alt="quote-avatar" />
                                        </div>
                                        {/* Quote Author */}
                                        <div className="quote-author">
                                            <h5 className="h5-xs">Sean Mcmarthy </h5>
                                            <span>Founder of Metreex</span>
                                        </div>
                                    </div>
                                </div>
                            </div>	  {/* END ABOUT TEXT */}
                        </div>

                    }
                    {style === 3 &&
                        <div className="row d-flex align-items-center">
                            {/* ABOUT IMAGE */}
                            <div className="col-md-5 col-lg-6">
                                <div className="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-01.png" alt="about-image" />
                                </div>
                            </div>
                            {/* ABOUT TEXT */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl">Get more sales with SEO, PPC, and Email Marketing</h4>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio
                                        velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice
                                        a gravida lectus suscipit gestas magna suscipit luctus undo
                                    </p>
                                    {/* QUOTE */}
                                    <div className="quote quote-primary">
                                        {/* Quote Text */}
                                        <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean magna ligula eget dolor
                                            suscipit egestas at viverra dolor iaculis luctus magna suscipit egestas "
                                        </p>
                                        {/* Quote Avatar */}
                                        <div className="quote-avatar">
                                            <img src="images/quote-avatar.jpg" alt="quote-avatar" />
                                        </div>
                                        {/* Quote Author */}
                                        <div className="quote-author">
                                            <h5 className="h5-xs">Sean Mcmarthy </h5>
                                            <span>Founder of Metreex</span>
                                        </div>
                                    </div>
                                </div>
                            </div>	  {/* END ABOUT TEXT */}
                        </div>

                    }
                    {style === 4 &&
                        <div className="row d-flex align-items-center">
                            {/* ABOUT IMAGE */}
                            <div className="col-md-5 col-lg-6">
                                <div className="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-02.png" alt="about-image" />
                                </div>
                            </div>
                            {/* ABOUT TEXT */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h4 className="h4-xl">We're providing the best SEO services for your website</h4>
                                    {/* List */}
                                    <ul className="txt-list mb-30">
                                        <li>Vitae auctor integer congue magna at pretium blandit porta justo integer. Feugiat a
                                            ligula rutrum luctus primis ultrice
                                        </li>
                                        <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros dolor
                                            auctor ipsum blandit purus vehicula magna luctus tempor quisque
                                        </li>
                                    </ul>
                                    {/* SMALL STATISTIC */}
                                    <div className="small-statistic">
                                        <div className="row">
                                            {/* STATISTIC BLOCK #1 */}
                                            <div className="col-sm-6">
                                                <div className="statistic-block">
                                                    <h5 className="statistic-number primary-color">4,<span className="count-element">379</span></h5>
                                                    <p>Websites Improved</p>
                                                    <p className="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                                                </div>
                                            </div>
                                            {/* STATISTIC BLOCK #2 */}
                                            <div className="col-sm-6">
                                                <div className="statistic-block">
                                                    <h5 className="statistic-number primary-color"><span className="count-element">99</span>%</h5>
                                                    <p>Customer Satisfaction</p>
                                                    <p className="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END SMALL STATISTIC */}
                                </div>
                            </div>	  {/* END ABOUT TEXT */}
                        </div>

                    }
                    {style === 4 &&
                        <div className="row d-flex align-items-center">
                            {/* ABOUT IMAGE */}
                            <div className="col-md-5 col-lg-6">
                                <div className="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="images/image-02.png" alt="about-image" />
                                </div>
                            </div>
                            {/* ABOUT TEXT */}
                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
                                    {/* Section SubTitle */}
                                    <span className="section-subtitle bluestone-color">Knowledge Of The Market</span>
                                    {/* Title */}
                                    <h4 className="h4-xl">We're providing the best SEO services for your website</h4>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio
                                        velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice
                                        a gravida lectus suscipit gestas magna suscipit luctus undo
                                    </p>
                                    {/* QUOTE */}
                                    <div className="quote quote-primary">
                                        {/* Quote Text */}
                                        <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean magna ligula eget dolor
                                            suscipit egestas at viverra dolor iaculis luctus magna suscipit egestas "
                                        </p>
                                        {/* Quote Avatar */}
                                        <div className="quote-avatar">
                                            <img src="images/quote-avatar.jpg" alt="quote-avatar" />
                                        </div>
                                        {/* Quote Author */}
                                        <div className="quote-author">
                                            <h5 className="h5-xs">Sean Mcmarthy </h5>
                                            <span>Founder of Metreex</span>
                                        </div>
                                    </div>
                                </div>
                            </div>	  {/* END ABOUT TEXT */}
                        </div>

                    }

                </div> {/* End container */}
            </section>

        </>
    )
}
