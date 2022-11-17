import React from "react";

export const Hero = () => {
    return (
        <section data-bs-version="5.1" className="header2 cid-tl9ZQYcfLu mbr-fullscreen" id="header2-4f">
            <div className={"video-container"}>
                <video playsInline={true} autoPlay={true} loop={true} muted={true}>
                    <source src={"https://fprs.help/bg-video.mp4"} type={"video/mp4"}/>
                </video>
            </div>
            <div className="mbr-overlay" style={{ opacity: "0.4", backgroundColor: "rgb(19, 40, 125)" }}/>
            <div className="main-container">
                <div className="row">
                    <div className="col-12 align-center">
                        <div className="text-wrapper">
                            <h1 className="mbr-section-title mbr-fonts-style display-2">
                                <strong>
                                    We are a progressive, people-oriented <br/>company driven by our values.
                                </strong>
                                <br/><br/>
                                WHAT WE DO: WE ARE THE BEST HERE
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}