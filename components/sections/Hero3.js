import VideoPopup from "../elements/VideoPopup"


export default function Hero3({ cls }) {
    return (
        <>
            <section id="hero-3" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-8 col-xl-7">
                            <div className="hero-txt white-color">
                                {/* Title */}
                                <h3>Integrated Marketing Solutions That Explosive Business Growth</h3>
                                {/* Text */}
                                <p>Feugiat primis ligula risus and auctor laoreet augue egestas mauris viverra tortor in
                                    iaculis pretium magna mauris a rhoncus feugiat
                                </p>
                                {/* Button */}
                                <a href="/about-us" className="btn btn-md btn-primary tra-white-hover">Find Out More</a>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO VIDEO BUTTON */}
                        <div className="col-md-4 col-xl-5">
                            <div className="hero-3-btn play-btn-primary text-center">
                                <VideoPopup />
                            </div>
                        </div>
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
