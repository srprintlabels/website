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
            <button class="mosh-btn mt-50" type="submit">Send Message</button>
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

    <div class="map-area">
      <div class="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15222.503822634968!2d78.424826!3d17.477608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c6f502818315e47!2sSR%20Print%20Labels!5e0!3m2!1sen!2sin!4v1576904753515!5m2!1sen!2sin"
          frameborder="0" 
          style={{border: '0', margin: '0'}}
          width="100%"
          height="500vh" 
          allowfullscreen=""
        ></iframe>
      </div>
    </div>

    <Footer />
  </div>
}