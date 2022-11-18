import React from "react";
import {Hero} from "./partials/hero";
import {HowItWorks} from "./partials/how-it-works";
import {ProjectWorks} from "./partials/project-works";
import {Testimonials} from "./partials/testimonials";
import {Partners} from "../../shared/partners";

export const Home = () => {
  return (
      <>
          <Hero/>
          <HowItWorks/>
          <ProjectWorks/>
          <section data-bs-version="5.1" className="content1 cid-taIDoKEJAH" id="acontent1-26">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-12 col-lg-12">
                          <h3 className="mbr-section-title mbr-fonts-style align-center display-2">
                              <strong>Our Happy Customers</strong>
                          </h3>
                      </div>
                  </div>
              </div>
          </section>
          <Testimonials/>
          <Partners/>
      </>
  );
}