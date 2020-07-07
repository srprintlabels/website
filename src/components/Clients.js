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

import { contactUs } from '../website-info.json'

const { subTitle, title } = contactUs

export const Clients = (props)=> {
  return <div>
    <section class="mosh-clients-area">
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
              <div className="grid-item"><img src={Metro} alt="" /></div>
              <div className="grid-item"><img src={Lindstrom} alt="" /></div>
              <div className="grid-item"><img src={Schneider} alt="" /></div>
              <div className="grid-item"><img src={IIL} alt="" /></div>
              <div className="grid-item"><img src={Resolute} alt="" /></div>
              <div className="grid-item"><img src={Srinivasa} alt="" /></div>
              <div className="grid-item"><img src={GelCaps} alt="" /></div>
              <div className="grid-item"><img src={BilogicalE} alt="" /></div>
            </div>
          </div>
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
        <div class="cta-content text-center wow fadeIn" data-wow-delay="0.5s">
          <div class="section-heading">
            <p>{subTitle}</p>
            <h2>{title}</h2>
            <a
              href="/contact"
              class="btn mosh-btn"
              style={{
                padding: '10px 30px',
                borderRadius: '70px'
              }}
            >Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  </div>;
}
