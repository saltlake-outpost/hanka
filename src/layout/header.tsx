import React, {useState} from 'react';
import {env} from "../environment";
import {Link} from "react-router-dom";

export const Header = () => {
    const [displayMenu, setDisplayMenu] = useState<'none' | 'block'>('none');
    const [navHeight, setNavHeight] = useState<0 | '100%'>(0);
    const closeNav = () => {
        // setDisplayMenu('none');
        setNavHeight(0);
    }
    const openNav = () => {
        // setDisplayMenu('block');
        setNavHeight('100%');
    }

    return (
        <section data-bs-version="5.1" className="menu1 cid-tc91E4QaPr" id="menu1-46">
            <nav className="navbar navbar-dropdown navbar-light collapsed">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <span className="navbar-logo">
                            <Link to="/">
                                <img src="/images/logo.png" alt="" style={{ height: "5rem" }} loading="lazy"
                                     className="lazyload" data-src="/images/logo.png"/>
                            </Link>
                        </span>
                        {/*<span className="navbar-caption-wrap">
                            <Link className="navbar-caption text-black text-primary display-5"
                                  to="//src/pages">{env.appName}</Link>
                        </span>*/}
                    </div>
                    <button className="navbar-toggler" onClick={openNav}>
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div style={{ height: navHeight }} className="overlay">
                        <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
                        <ul className="navbar-nav nav-dropdown navbar-light nav-right overlay-content"
                            data-app-modern-menu="true">
                            <li className="nav-item">
                                <Link className="nav-link link text-black text-primary display-4"
                                      to="/about-us" aria-expanded="false" onClick={closeNav}>
                                    ABOUT US<br/>
                                    <div className="line-animation"></div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link text-black text-primary display-4" to="/services"
                                      aria-expanded="false" onClick={closeNav}>
                                    SERVICES<br/>
                                    <div className="line-animation"></div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link text-black text-primary display-4"
                                      to="/projects" onClick={closeNav}>
                                    PROJECTS<br/>
                                    <div className="line-animation"></div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link text-black text-primary display-4"
                                      to="/careers" onClick={closeNav}>
                                    CAREERS<br/>
                                    <div className="line-animation"></div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link text-black text-primary display-4"
                                      to="/contact-us" onClick={closeNav}>
                                    CONTACT US<br/>
                                    <div className="line-animation"></div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}