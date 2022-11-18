import React from "react";
import {env} from "../../environment";
import {Partners} from "../../shared/partners";

export const Careers = () => {
    return (
        <>
            <section data-bs-version="5.1" className="header3 cid-taJ4pnV3MS mbr-parallax-background" id="header03-29">
                <div className="mbr-overlay" style={{ opacity: "0.3", backgroundColor: "rgb(0, 0, 0)" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 d-flex">
                            <div className="link-wrapper">
                                <p className="link mbr-fonts-style display-5">
                                    <strong>BUILD A CAREER WITH US</strong>
                                </p>
                                <span className="mbr-iconfont link-icon mobi-mbri-right mobi-mbri"></span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-md-7">
                            <h1 className="mbr-section-title align-right mbr-fonts-style pb-5 mb-5 display-5">
                                <div>We are an equal opportunity employer. Our employees consider <br/>this to be one of
                                    the best workplaces in Finland.</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section data-bs-version="5.1" className="content10 cid-taJ4poFAe9" id="content10-2a">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md">
                            <h6 className="mbr-section-subtitle mbr-fonts-style mb-4 display-5">
                                <strong>Careers and Internship</strong>
                            </h6>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <p className="mbr-text mbr-fonts-style display-7">
                                {env.appName} places a strong
                                value on experience, self-starters and strong ethics. We would encourage anyone with
                                that meets the criteria for our positions below to submit a resume. We are an equal
                                opportunity employer. Our employees consider this to be one of the best workplaces in
                                Finland in the Architecture/Construction industry. Our training and safety programs
                                along with our field experience provide a robust career experience for entry level and
                                senior staff. Compensation including health insurance and (defined benefits programs or
                                401k), personal time off allowances provide a competitive comprehensive packages that
                                scale up with advancement.
                                <br/><br/>
                                <strong>PROJECT MANAGERS &amp; ARCHITECTS</strong>
                                <br/><br/>
                                This ultimate senior
                                position engages all aspects of project construction ranging from marketing,
                                interviews and conceptual estimating, client relationships, sub-contractor
                                relationships, down to the final walk through and occupancy inspection including
                                warranty follow up. Candidates must embrace {env.appName}'s single source
                                management approach. College degree in Building Construction Science or Engineering
                                as well as 10-15 years of experience required. Depth of familiarity with tilt-wall
                                concrete as well as steel frame construction is a must along with excellent computer
                                skills using ArchiCAD and Microsoft Teams.
                                <br/><br/>
                                <strong>INTERNSHIPS</strong>
                                <br/><br/>
                                Our Internship Program offers one of the most comprehensive
                                experiences in commercial construction. With emphasis on both office and field
                                environments, training will offer hands on drawing and document coordination,
                                submittal reviews, meeting overviews, scheduling, developing interpersonal
                                skills as well as leading edge software applications. From working directly with
                                Project Managers and Architects, our interns are able to glean applicable
                                knowledge from some of the best minds in the industry.
                                <br/><br/>
                                <strong>Send us an Email with the Subject as (Career/Internship) </strong>
                                to:&nbsp;
                                <a href="mailto:info@hankaconstructionsltd.com" className="text-primary">
                                    info@hankaconstructionsltd.com
                                </a>
                                <br/><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Partners/>
        </>
    );
}