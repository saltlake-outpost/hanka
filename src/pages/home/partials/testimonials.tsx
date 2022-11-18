import React from "react";
import {Link} from "react-router-dom";
import {env} from "../../../environment";

export const Testimonials = () => {
    return (
        <section data-bs-version="5.1"
                 className="people1 bistro_people carousel slide testimonials-slider cid-taGrWaH15S"
                 data-interval="false" data-bs-interval="false" id="people1-20">
            <div className="two_background"></div>
            <div className="content_box">
                <div className="text-center container">
                    <div className="carousel slide" role="listbox" data-pause="true" data-keyboard="false"
                         data-ride="carousel" data-bs-ride="carousel" data-interval="6000" data-bs-interval="6000">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <div className="user col-md-8">
                                    <div className="box_text">
                                        <p className="user_text mbr-fonts-style display-5">“Our experience has been a
                                            very positive one. Working with a management team that is accommodating and
                                            sensitive to our needs. Professionalism shows in their quality of work and
                                            service.”</p>
                                    </div>
                                    <div className="user_name mbr-fonts-style display-4">
                                        Kimberly Spears / Anderson Arts Council
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="user col-md-8">
                                    <div className="box_text">
                                        <p className="user_text mbr-fonts-style display-5">"As a non-profit
                                            organization, fiscal accountability and management of resources is critical.
                                            {env.appName} has been sensitive to our concerns and budget throughout
                                            the process.”</p>
                                    </div>
                                    <div className="user_name mbr-fonts-style display-4">Richard Patti / Tetrick
                                        Residential Homes
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="user col-md-8">
                                    <div className="box_text">
                                        <p className="user_text mbr-fonts-style display-5">“{env.appName}
                                            performed very professionally with great communication and excellent onsite
                                            project management. They earned our confidence during the upgrade project at
                                            our Wastewater Treatment Plant.”</p>
                                    </div>
                                    <div className="user_name mbr-fonts-style display-4">Pete Tackett / Antioch Baptist
                                        Church
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="user col-md-8">
                                    <div className="box_text">
                                        <p className="user_text mbr-fonts-style display-5">“For 30 years, I have worked
                                            with growing churches and construction companies on projects, big and small.
                                            {env.appName} helped us value engineer various pieces of the project
                                            to get us in under budget.”</p>
                                    </div>
                                    <div className="user_name mbr-fonts-style display-4">Linda Black /&nbsp;<span
                                        style={{ fontSize: "1.3rem" }}>Kostgate Consultants</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-controls">
                            <Link to={"#"} className="carousel-control-prev" role="button" data-slide="prev" data-bs-slide="prev">
                                <span aria-hidden="true" className="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont"></span>
                                <span className="sr-only visually-hidden">Previous</span>
                            </Link>
                            <Link to={"#"} className="carousel-control-next" role="button" data-slide="next" data-bs-slide="next">
                                <span aria-hidden="true" className="mobi-mbri mobi-mbri-arrow-next mbr-iconfont"></span>
                                <span className="sr-only visually-hidden">Next</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}