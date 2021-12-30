import React from "react";

import breadcrumb from "../assets/img/core-img/breadcumb.png";
import certificate from "../assets/img/home-carousel/certy.png";

import { Header, Footer } from "../components";
import { ourClientele } from '../website-info.json'

export const About = (props) => {
  return (
    <div>
      <Header />
      <div
        className="mosh-breadcumb-area"
        style={{
          backgroundImage: `url(${breadcrumb})`,
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="bradcumbContent">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mosh-aboutUs-area">
        <div className="mosh-about-us-content">
          <div className="section-heading">
            <h2>Welcome</h2>
          </div>
          <p>
            SR PRINT LABELS is a one-stop shop that can handle all your
            requirements from structural design to production to
            distribution. Having the entire operation in-house ensures
            tight control over quality and faster turnaround.
            We recognize it is not just designs and ideas that are
            important, good execution is vital as well, to win client
            confidence and ensure client satisfaction. Our expertise is
            Creative Graphic Design services including, Brochure,
            Catalogs, etc. We are one of the prominent service providers of Offset Printing, Roll form labels services, and we are having more than 10 years of experiencein this industry. We would welcome the opportunity to
            understand your business requirements.
          </p>
          <section class="our-clientele-section" >
            <div className="section-heading">
              <h2>{ourClientele.title}</h2>
            </div>
            <div style={{color: "#abadbe", textAlign: "left", lineHeight: "1.6em"}}>
              <p>{ourClientele.text}</p>
            </div>
          </section>
          {/* <ul>
            <li>
              <p>
                1. Achieve levels of service based on creating cost effective
                printing solutions for clients.
              </p>
            </li>
            <li>
              <p>
                2. Ensure profitability and growth through sound financial
                management of the business.
              </p>
            </li>
          </ul>
          <p>
            We are commited to continuous improvement in all aspects of our
            business to improve the service to our customers and in all the
            internal processes of the company.
          </p>
          <p>
            ISO 9001: 2015 Quality Management system is the basis of our quality
            management system and we are commited to meet the requirements.
          </p> */}
        </div>
        <div className="mosh-about-us-thumb wow fadeInUp" data-wow-delay="0.5s">
          <img src={certificate} alt="" />
        </div>
      </section>

      <Footer />
    </div>
  );
};
