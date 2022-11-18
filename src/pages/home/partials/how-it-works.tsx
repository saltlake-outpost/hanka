import React from "react";
import {Link} from "react-router-dom";
import {env} from "../../../environment";

export const HowItWorks = () => {
    return (
        <section data-bs-version="5.1" className="features8 cid-t9qno0ayDm" id="afeatures8-3">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-img">
                        <div className="img-container">
                            <img src="/images/11062b-3e2e7dd0c68648b49a7f38f9f65f2f7b-mv2-787x578.jpg"
                                 loading="lazy" className="lazyload"
                                 data-src="/images/11062b-3e2e7dd0c68648b49a7f38f9f65f2f7b-mv2-787x578.jpg"/>
                        </div>
                    </div>
                    <div className="col-12 col-text">
                        <div className="text-container">
                            <div className="text-wrapper">
                                <p className="label-text mbr-fonts-style display-7">
                                    HOW IT WORKS
                                </p>
                                <h2 className="mbr-section-title mbr-fonts-style display-5"><strong>We stand out in a
                                    crowded market for our innovations and values-driven approach.</strong></h2>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    "Quality is never accidental. It is always the result of smart hard work." - {env.founderName}.
                                </p>
                                <div className="btn-container">
                                    <div className="mbr-section-btn">
                                        <Link className="btn btn-primary-outline display-7" to="/contact-us#top">
                                            GET AN ESTIMATE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}