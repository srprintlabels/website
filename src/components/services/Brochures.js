import React from 'react'

import breadcrumb from '../../assets/img/core-img/breadcumb.png'
import brochures1 from '../../assets/img/portfolio-img/brochures/1.png'
import brochures2 from '../../assets/img/portfolio-img/brochures/2.png'
import brochures3 from '../../assets/img/portfolio-img/brochures/3.png'
import brochures4 from '../../assets/img/portfolio-img/brochures/4.png'

import { Header, Footer } from '../../components'

export const Brochures = (props)=> {
  return <div>
    <Header />
    <div className="mosh-breadcumb-area" style={{backgroundImage: `url(${breadcrumb})`}}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="bradcumbContent">
              <h2>Brochures</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="gallery-content">
      <div class="mosh-portfolio" style={{
        gridTemplateColumns: 'auto auto auto auto'
      }}>
        <div class="single_gallery_item grid-item">
          <img src={brochures1} alt="" />
          <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
            <div class="port-hover-text text-center">
              <h4>Brochure</h4>
            </div>
          </div>
        </div>
        <div class="single_gallery_item grid-item">
          <img src={brochures2} alt="" />
          <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
            <div class="port-hover-text text-center">
              <h4>Brochure</h4>
            </div>
          </div>
        </div>
        <div class="single_gallery_item grid-item">
          <img src={brochures3} alt="" />
          <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
            <div class="port-hover-text text-center">
              <h4>Leaflet</h4>
            </div>
          </div>
        </div>
        <div class="single_gallery_item grid-item">
          <img src={brochures4} alt="" />
          <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
            <div class="port-hover-text text-center">
              <h4>Catalogs</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
}