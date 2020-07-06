import React from 'react';

import breadcrumb from '../assets/img/core-img/breadcumb.png';
import map from '../assets/img/core-img/map.png'
import call from '../assets/img/core-img/call.png'
import message from '../assets/img/core-img/message.png'

import { Header, Footer } from '../components'

export const Contact = (props)=> {
  return <div>
    <Header />
    <div class="mosh-breadcumb-area" style={{backgroundImage: `url(${breadcrumb})`}}>
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="bradcumbContent">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="contact-area">
      <div class="contact-left">
        <form class="contact-form-area">
          <h2>Get in touch</h2>
            <input type="text" class="form-control" id="name" name="first_name" placeholder="Name" />
            <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" />
            <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" />
            <textarea name="message" class="form-control" id="message" 
                      name="comments" cols="30" rows="10" placeholder="Message">
            </textarea>
            <button class="btn mosh-btn mt-50" type="submit">Send Message</button>
        </form>
      </div>
      <div class="contact-right">
        <div class="contact-information">
          <h2>Contact</h2>
          <div class="single-contact-info d-flex">
            <div class="contact-icon mr-15">
                <img src={map} alt="" class="contact-map-icon" />
            </div>
            <p><a href="https://g.page/sr-print-labels?share">Plot No. 137, Prasanthi Nagar, I.E Kukatpally Hyderabad, Telangana - 500072</a></p>
          </div>
          <div class="single-contact-info d-flex">
            <div class="contact-icon mr-15">
                <img src={call} alt="" />
            </div>
            <p>Main: 040 40208438</p>
          </div>
          <div class="single-contact-info d-flex">
            <div class="contact-icon mr-15">
                <img src={call} alt="" />
            </div>
            <p>Mobile: +91 9177664482</p>
          </div>
          <div class="single-contact-info d-flex">
            <div class="contact-icon mr-15">
                <img src={message} alt="" />
            </div>
            <p>info@srprintlabels.com</p>
          </div>
          <div class="single-contact-info d-flex">
            <div class="contact-icon mr-15">
                <img src={message} alt="" />
            </div>
            <p>srprintlabels@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
}