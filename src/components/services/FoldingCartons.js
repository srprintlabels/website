import React from 'react'

import breadcrumb from '../../assets/img/core-img/breadcumb.png'
import cartons1 from '../../assets/img/portfolio-img/cartons/1.png'
import cartons2 from '../../assets/img/portfolio-img/cartons/2.png'
import cartons3 from '../../assets/img/portfolio-img/cartons/3.png'
import cartons4 from '../../assets/img/portfolio-img/cartons/4.png'

import { Header, Footer } from '../../components'

export const FoldingCartons = (props)=> {
  return <div>
    <Header />
    <div className="mosh-breadcumb-area" style={{backgroundImage: `url(${breadcrumb})`}}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="bradcumbContent">
              <h3>Folding Cartons</h3>
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
          <img src={cartons1} alt="" />
          <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
            <div class="port-hover-text text-center">
              <h4>Brochure</h4>
            </div>
          </div>
        </div>
        <div class="single_gallery_item grid-item">
          <img src={cartons2} alt="" />
          <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
            <div class="port-hover-text text-center">
              <h4>Brochure</h4>
            </div>
          </div>
        </div>
        <div class="single_gallery_item grid-item">
          <img src={cartons3} alt="" />
          <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
            <div class="port-hover-text text-center">
              <h4>Leaflet</h4>
            </div>
          </div>
        </div>
        <div class="single_gallery_item grid-item">
          <img src={cartons4} alt="" />
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