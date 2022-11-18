import React from "react";
import {env} from "../environment";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <section data-bs-version="5.1" className="footer1 businessm4_footer1 cid-tc8hZvcJaq" id="footer1-43">
            <div className="container">
                <div className="media-container-row content text-white">
                    <div className="col-12 col-lg-4 col-md-4">
                        <div className="media-wrap">
                            <Link to="/">
                                <img src="/images/logo.png" alt="" loading="lazy" className="lazyload"
                                     data-src="/images/logo.png"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mbr-fonts-style mbr-black col-lg-4 col-md-4">
                        <h5 className="pb-3 column-title display-5"><strong>
                            Contact Information</strong>
                        </h5>
                        <div className="contact-list display-7">
                            <div className="list-item">
                                <span className="mbr-iconfont mbri-map-pin"></span>
                                <p>Firdonkatu 2, Workery West, 6th Floor, <br/>00520, Helsinki, Finland.</p>
                            </div>
                            <div className="list-item">
                                <span className="mbr-iconfont mbri-mobile"></span>
                                <p>Phone: <Link to="/tel:+1 (587) 713-8612" className="text-primary">+1 (587) 713-8612</Link>
                                </p>
                            </div>
                            <div className="list-item">
                                <span className="mbr-iconfont mbri-paper-plane"></span>
                                <p>Email: <Link to="/mailto:info@hankaconstructionsltd.com"
                                             className="text-primary">info@hankaconstructionsltd.com</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mbr-fonts-style mbr-black col-lg-4 col-md-4">
                        <h5 className="pb-3 column-title display-5">
                            Navigation
                        </h5>
                        <div className="mbr-text mbr-fonts-style display-7">
                            <ul className="list">
                                <li>
                                    <span style={{ fontSize: "1rem" }}>
                                        <Link to="/about-us" className="text-primary">Our Leadership</Link>
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "1rem" }}>
                                        <Link to="/services" className="text-primary" style={{ fontSize: "1rem" }}>
                                            Ethics &amp; Compliance
                                        </Link>
                                        <br/>
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "1rem" }}>
                                        <span style={{ fontSize: "1rem" }}>
                                            <Link to="/projects" className="text-primary">Projects &amp; Insights</Link>
                                        </span>
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "1rem" }}>
                                        <span style={{ fontSize: "1rem" }}>
                                            <Link to="/careers" className="text-primary">Careers &amp; Internships</Link>
                                        </span>
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "1rem" }}>
                                        <span style={{ fontSize: "1rem" }}>
                                            <Link to="/contact-us" className="text-primary">Contact Us</Link>
                                            <br/>
                                        </span>
                                        <br/>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-lower">
                    <div className="media-container-row">
                        <div className="col-sm-12"><hr/></div>
                    </div>
                    <div className="media-container-row mbr-black">
                        <div className="col-sm-6 copyright">
                            <p className="mbr-fonts-style display-7">
                                © {new Date().getFullYear()} {env.appName} - All Rights Reserved
                            </p>
                        </div>
                        <div className="col-md-6"/>
                    </div>
                </div>
            </div>
        </section>
    );
}