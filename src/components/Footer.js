import React from 'react';

import logo from '../assets/img/core-img/logo.png'
import map from '../assets/img/core-img/map.png'
import call from '../assets/img/core-img/call.png'
import message from '../assets/img/core-img/message.png'

export const Footer = (props)=> {
  return <footer class="footer-area">
      <div class="top-footer-area">
        <div class="footer-left" >
          <div class="single-footer-widget">
            <a href="#" class="mb-50 d-block">
              <img src={logo} alt="" />
            </a>
            <p>SR Print Labels is a well established organization in the domain of commercial designing and printing.</p>
            <p>A reactified version of <a href="https://colorlib.com/wp/template/mosh/">mosh website</a> made by <br/>Joel Vinay Kumar 👨‍💻</p>
            <p>Contact me <a href="https://joel.swecha.io">here</a> for a website like this</p>
          </div>
        </div>
        
        <div class="footer-right">
          <div class="single-footer-widget">
            <h5>Contact Info</h5>
            <div class="footer-single-contact-info d-flex">
              <div class="contact-icon">
                <img src={map} alt="" style={{width: '18px'}}/>
              </div>
              <p>Plot No. 137, Prasanthi Nagar, I.E Kukatpally Hyderabad, Telangana - 500072</p>
            </div>
            <div class="footer-single-contact-info d-flex">
              <div class="contact-icon">
                <img src={call} alt="" />
              </div>
              <p>Office: 040 40208438</p>
            </div>
            <div class="footer-single-contact-info d-flex">
              <div class="contact-icon">
                <img src={call} alt="" />
              </div>
              <p>Mobile: 9177664482</p>
            </div>
            <div class="footer-single-contact-info d-flex">
              <div class="contact-icon">
                <img src={message} alt="" />
              </div>
              <p>
                <a href="mailto:info@srprintlabels.com?Subject=Support%20Request" target="_top">info@srprintlabels.com</a>
              </p>
            </div>
            <div class="footer-single-contact-info d-flex">
              <div class="contact-icon">
                <img src={message} alt="" />
              </div>
              <p>
                <a href="mailto:srprintlabels@gmail.com?Subject=Support%20Request" target="_top">srprintlabels@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
}