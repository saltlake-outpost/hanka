import React from "react";
import {env} from "../../environment";
import {Partners} from "../../shared/partners";

export const Projects = () => {
    return (
        <>
            <section data-bs-version="5.1" className="header3 cid-tadUm45upO mbr-parallax-background" id="header03-1a">
                <div className="mbr-overlay" style={{opacity: "0.3", backgroundColor: "rgb(0, 0, 0)"}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 d-flex">
                            <div className="link-wrapper">
                                <p className="link mbr-fonts-style display-5">
                                    <strong>IDEAS WORKED ON</strong>
                                </p>
                                <span className="mbr-iconfont link-icon mobi-mbri-right mobi-mbri"></span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-md-7">
                            <h1 className="mbr-section-title align-right mbr-fonts-style pb-5 mb-5 display-5">
                                <div></div>
                                <div><br/></div>
                                <div>We hold significant levels of Public Liability,</div>
                                <div>Employers Liability and Contract Works Insurance.</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section data-bs-version="5.1" className="content10 cid-tadUm4WRxD" id="content10-1b">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md">
                            <h6 className="mbr-section-subtitle mbr-fonts-style mb-4 display-5">We Specialize in the
                                Details.<br/>Turnkey Service Provider.</h6>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <p className="mbr-text mbr-fonts-style display-7">{env.appName} has proven
                                experience on a wide range of projects including higher education, state parks, health
                                care facilities, offices, and churches. Every detail of these projects is the most
                                important detail to us. Browse our project gallery below to get a taste of what we can
                                do for you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section data-bs-version="5.1" className="image1 cid-taf1CNQCtZ" id="image01-1h">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 md-pb">
                            <div className="image-block">
                                <img className="w-100 lazyload" alt="" loading="lazy"
                                     src="/images/c4b279-bcbe6e90f22849e4b22685f54514c584f000-586x486.jpg"
                                     data-src="/images/c4b279-bcbe6e90f22849e4b22685f54514c584f000-586x486.jpg"/>
                                <figcaption className="mbr-figure-caption mbr-figure-caption-over">
                                    <div className="wrap">
                                        <h4 className="mbr-white align-left mbr-fonts-style display-5"><strong>Reliable,
                                            committed, client-focused, and driven through innovative process
                                            solutions.</strong></h4>
                                        <p className="pb-2 mbr-white align-left mbr-fonts-style display-7">With many
                                            years of experience, {env.appName} is committed to becoming the
                                            most efficient multi-family solution that is not suitable for all
                                            construction companies.&nbsp;<br/></p>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 md-pb">
                            <div className="image-block">
                                <img className="w-100 lazyload" alt="" loading="lazy"
                                     src="/images/c4b279-bf73c123cfc34cf6a549e022c4d6cd7af000-588x486.jpg"
                                     data-src="/images/c4b279-bf73c123cfc34cf6a549e022c4d6cd7af000-588x486.jpg"/>
                                <figcaption className="mbr-figure-caption mbr-figure-caption-over">
                                    <div className="wrap">
                                        <h4 className="mbr-white align-left mbr-fonts-style display-5"><strong>
                                            Margin Trade, No project is Too Big or Too Small.</strong>
                                        </h4>
                                        <p className="pb-2 mbr-white align-left mbr-fonts-style display-7">We
                                            provide all the materials, labor and equipment needed to complete any
                                            project. In addition, we manage projects by freeing you from the
                                            stressful situation of project management.&nbsp;<br/></p>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 md-pb">
                            <div className="image-block">
                                <img className="w-100 lazyload" alt="" loading="lazy"
                                     src="/images/c4b279-fd0e785c286440f4a16677aeff7cb00df000-588x422.jpg"
                                     data-src="/images/c4b279-fd0e785c286440f4a16677aeff7cb00df000-588x422.jpg"/>
                                <figcaption className="mbr-figure-caption mbr-figure-caption-over">
                                    <div className="wrap">
                                        <h4 className="mbr-white align-left mbr-fonts-style display-5"><strong>Shaping
                                            future Relationship between Humanity and the Planet.</strong></h4>
                                        <p className="pb-2 mbr-white align-left mbr-fonts-style display-7">Our dream
                                            of making the planet a better place inspires us every day to work hard
                                            to create sustainable solutions to meet the major challenges.<br/></p>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Partners/>
        </>
    );
}