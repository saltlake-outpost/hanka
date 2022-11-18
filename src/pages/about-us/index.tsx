import React, {useEffect, useState} from 'react';
import {env} from "../../environment";
import {Partners} from "../../shared/partners";

export const AboutUs = () => {
    const [pageWidth, setPageWidth] = useState<0 | '100%'>(0);

    useEffect(() => {
        setPageWidth('100%');
    }, []);

    return (
        <div style={{ width: pageWidth, textAlign: "center", top: 0, left: 0, transition: "1.5s" }}>
            <section data-bs-version="5.1" className="header3 cid-t9FBCQ5Vz5 mbr-parallax-background" id="header03-g">
                <div className="mbr-overlay" style={{ opacity: "0.3", backgroundColor: "rgb(0, 0, 0)" }}/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 d-flex">
                            <div className="link-wrapper">
                                <p className="link mbr-fonts-style display-5">
                                    <strong>ABOUT US</strong>
                                </p>
                                <span className="mbr-iconfont link-icon mobi-mbri-right mobi-mbri"></span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-md-7">
                            <h1 className="mbr-section-title align-right mbr-fonts-style pb-5 mb-5 display-5">
                                <strong>We are a progressive, people-oriented&nbsp;</strong>
                                <strong>company </strong>
                                <br/>
                                <strong>driven by our values and passion for success.</strong>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section data-bs-version="5.1" className="article6 cid-tadVpoGFQO mbr-fullscreen" id="content06-1f">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <h2 className="mbr-section-title align-left mbr-fonts-style mb-5 display-2">
                                <strong>Who We Are</strong>
                            </h2>
                            <p className="mbr-text align-left mbr-fonts-style pb-5 display-5">
                                Ever since 2014, With a network of expertise, {env.appName} finishes development
                                of at most 6 ventures every year. {env.appName} offers customers the availability
                                and backing of top notch services with the soundness and assets of a worldwide association.
                                <br/><br/>
                                We are well equipped to handle the smallest to the largest projects as we
                                provide ourselves the ability to work smoothly with clients, principal
                                contractors, subcontractors &amp; profound architects to meet up with intimate
                                knowledge and extensive experience in building projects. We also enjoy working
                                on environmentally sustainable developments and are committed to maximizing our
                                value.&nbsp;
                                <br/>
                            </p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <p className="mbr-text2 align-left mbr-fonts-style display-7">
                                        <strong>Our Vision: </strong>
                                        To be the most elevated worth supplier of worldwide development
                                        administrations and specialized mastery.
                                        <br/><br/>
                                        <strong>Our Goal: </strong>
                                        To be very equipped with different ideas on how to make customers happy with
                                        the services we render.
                                        <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-7 m-auto">
                            <div className="image-wrapper p-0">
                                <img className="w-100 lazyload" src="/images/mbr-1-1422x948.jpg" alt="" loading="lazy"
                                     data-src="/images/mbr-1-1422x948.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section data-bs-version="5.1" className="firmm4_content2 cid-tc8gDghLW4" id="content2-40">
                <div className="container">
                    <div className="row align-items-center justify-content-center flex-row-reverse">
                        <div className="col-12 col-md-6 col-sm-8 col-lg order-1">
                            <div className="text-wrapper">
                                <h4 className="card-title mbr-fonts-style display-5">
                                    <strong>Our Leadership</strong>
                                    <div>
                                        <span style={{ fontSize: "1.3rem" }}>
                                            <a href="https://www.linkedin.com/in/anthony-oliver-hanka-870002256/"
                                               className="text-primary">
                                                <strong>Anthony Oliver Hanka</strong>
                                            </a>
                                        </span>
                                    </div>
                                    <div>Chief Architect E. / Project Manager</div>
                                </h4>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    Anthony is a multi-disciplinary
                                    professional with experience in Architecture. He received a Bachelor of Science
                                    degree in Architecture from University of Oulu in 1987 before pursuing his graduate
                                    studies in Architecture Engineering. He received Master of Architectural
                                    Engineering: Environmental Design degrees from the University of Bath in 1991. While
                                    at Somerset, Bath, Oliver traveled extensively participating in design projects in
                                    England, Scotland, Germany, Australia, Italy and the US. It was during this era that
                                    {env.appName} was birthed and with the help of a great team of Architects,
                                    has been responsible for various community renovation.
                                    <br/><br/>
                                    Anthony is also a LEED Accredited Professional in Building Design and
                                    Construction. Anthony also has experience in a wide variety of project
                                    types. His project experience includes education, healthcare, office,
                                    hospitality, regional development and urban planning. Anthony also has
                                    experience performing coordination and documentation for buildings pursuing
                                    LEED certification.
                                    <br/><br/>
                                    Anthony believes in a holistic design philosophy that is based on
                                    community involvement. Under the umbrella of {env.appName}
                                    Ltd, he has participated in many design charrettes for downtown
                                    revitalization. Anthony was also a member of a Chartered Institute
                                    of Architectural Technologist in Europe. Each of these experiences
                                    taught him to work with stakeholders and constituents to create
                                    designs that reflects designs within the community.
                                    <br/><br/>
                                    <strong>Specialties: Architecture, Urban Design and Planning.</strong>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-sm-8 col-lg-5">
                            <div className="image-wrapper">
                                <a href="https://www.linkedin.com/in/anthony-oliver-hanka-870002256/" target={"_blank"}
                                   rel={"nofollow"}>
                                    <img src="/images/olitaucher-874x1024.jpg" alt={env.founderName} loading="lazy"
                                         className="lazyload" data-src="/images/olitaucher-874x1024.jpg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Partners/>
        </div>
    );
}