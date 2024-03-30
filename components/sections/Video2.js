import VideoPopup from "../elements/VideoPopup"


export default function Video2({ cls }) {
    return (
        <>
            <div id="video-2" className={`bg-scroll video-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row">
                        {/* VIDEO LINK */}
                        <div className="col-md-8 offset-md-2">
                            <div className="video-link text-center">
                                {/* Change the link HERE!!! */}
                                <div className="play-btn-primary text-center">
                                    <VideoPopup />
                                </div>
                            </div>
                        </div>	{/* END VIDEO LINK */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </div>

        </>
    )
}
