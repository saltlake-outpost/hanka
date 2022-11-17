import React from 'react';
import {env} from "../environment";
import {Link} from "react-router-dom";

export const Menu = () => {
  return (
      <section data-bs-version="5.1" className="menu1 cid-tc91E4QaPr" id="menu1-46">
          <nav className="navbar navbar-dropdown collapsed">
              <div className="container-fluid">
                  <div className="navbar-brand">
                <span className="navbar-logo">
                    <Link to="/">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt=""
                             style={{ height: "5rem" }} loading="lazy" className="lazyload"
                             data-src="/images/logo.png"/>
                    </Link>
                </span>
                      <span className="navbar-caption-wrap">
                          <Link className="navbar-caption text-black text-primary display-5" to="/src/pages">
                              {env.appName}
                          </Link>
                      </span>
                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse"
                          data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <div className="hamburger">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                          <li className="nav-item">
                              <Link className="nav-link link text-black text-primary display-4" to="about-us.html"
                                 aria-expanded="false">
                                  ABOUT US<br/>
                                  <div className="line-animation"></div>
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link link text-black text-primary display-4" to="services.html"
                                 aria-expanded="false">
                                  SERVICES<br/>
                                  <div className="line-animation"></div>
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link link text-black text-primary display-4" to="projects.html">
                                  PROJECTS<br/>
                                  <div className="line-animation"></div>
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link link text-black text-primary display-4" to="careers.html">
                                  CAREERS<br/>
                                  <div className="line-animation"></div>
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link link text-black text-primary display-4" to="contact-us.html">
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