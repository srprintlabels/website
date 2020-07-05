import React from 'react';

import Metro from '../assets/img/clients-img/Metro.png'
import Lindstrom from '../assets/img/clients-img/Lindstrom.png'
import Schneider from '../assets/img/clients-img/Schneider.png'
import IIL from '../assets/img/clients-img/IIL.png'
import Resolute from '../assets/img/clients-img/Resolute.png'
import Srinivasa from '../assets/img/clients-img/Srinivasa.png'
import GelCaps from '../assets/img/clients-img/GelCaps.png'
import BilogicalE from '../assets/img/clients-img/BilogicalE.png'
import cta from '../assets/img/bg-img/cta.jpg'

export const Clients = (props)=> {
  return <div>
    <section class="mosh-clients-area section_padding_100 clearfix">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading text-center">
              <p>clients</p>
              <h2>All our clients love our work</h2>
            </div>
          </div>

          <div class="col-12">
            <div class="clients-logo-area">
              <a href="#">
                <img src={Metro} alt="" style={{border: '0px'}} />
              </a>
              <a href="#">
                <img src={Lindstrom} alt="" />
              </a>
              <a href="#">
                <img src={Schneider} alt="" />
              </a>
              <a href="#">
                <img src={IIL} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="clients-break" style={{height: '50px'}}></div>
        <div class="clients-logo-area">
          <a href="#">
            <img src={Resolute} alt="" />
          </a>
          <a href="#">
            <img src={Srinivasa} alt="" />
          </a>
          <a href="#">
            <img src={GelCaps} alt="" />
          </a>
          <a href="#">
            <img src={BilogicalE} alt="" />
          </a>    
        </div>
      </div>
    </section>

    <section 
      class="mosh-call-to-action-area bg-img bg-overlay section_padding_100" 
      style={{
        backgroundImage: `url(${cta})`
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="cta-content text-center wow fadeIn" data-wow-delay="0.5s">
              <div class="section-heading">
                <p>give us a shout</p>
                <h2>Are you Ready to have a Talk?</h2>
                <a 
                  href="contact.html"
                  class="btn mosh-btn"
                  style={{
                    padding: '10px 30px',
                    borderRadius: '70px'
                  }}
                >Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
}