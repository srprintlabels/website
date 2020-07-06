import React from 'react';

import breadcrumb from '../assets/img/core-img/breadcumb.png';
import certificate from '../assets/img/home-carousel/certy.png'

import { Header, Footer } from '../components'

export const About = (props)=> {
  return <div>
    <Header />
    <div class="mosh-breadcumb-area" style={{backgroundImage: `url(${breadcrumb})`}}>
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="bradcumbContent">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="mosh-aboutUs-area">
      <div class="mosh-about-us-content">
        <div class="section-heading">
          <h2>Quality Policy</h2>
        </div>
        <p>The quality policy of Standard Printers is to ensure customer satisfaction by providing quality printing solutions for Offset and Labels printing. We have identified the following core objectives in our business:</p>
        <ul>
          <li><p>1. Achieve levels of service based on creating cost effective printing solutions for clients.</p></li>
          <li><p>2. Ensure profitability and growth through sound financial management of the business.</p></li>
        </ul>
        <p>We are commited to continuous improvement in all aspects of our business to improve the service to our customers and in all the internal processes of the company.</p>
        <p>ISO 9001: 2015 Quality Management system is the basis of our quality management system and we are commited to meet the requirements.</p>
      </div>
      <div class="mosh-about-us-thumb wow fadeInUp" data-wow-delay="0.5s">
        <img src={certificate} alt="" />
      </div>
    </section>
        
    <Footer />
  </div>
}