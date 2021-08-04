import video from "../../assets/video.mp4"
import React from "react";

const Video = () => {
    return (
        <>
            <video className="kira-landing-section__video" autoPlay muted loop playsInline>
                <source src={video}/>
            </video>
        </>
    )
}
export default Video;
