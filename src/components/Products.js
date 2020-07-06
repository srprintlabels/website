import React from 'react';

import booksSvg from '../assets/img/core-img/book.svg'
import adhesiveTape from '../assets/img/core-img/adhesive-tape.svg'
import leafletSvg from '../assets/img/core-img/leaflet.svg'
import catalog from '../assets/img/core-img/catalog.svg'
import brochure from '../assets/img/core-img/brochure.svg'
import poster from '../assets/img/core-img/poster.svg'
import calendar from '../assets/img/core-img/calendar.svg'
import carton from '../assets/img/core-img/carton.svg'

export const Products = ()=> {
    return <div class="mosh-products-area">
      <center><h2>Our Product Range</h2></center>

      <section class="mosh-more-services-area" style={{padding: "50px 0 0 0"}}>
        <div class="single-more-service-area grid-item">
          <a href="/books"></a>
          <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".1s">
            <img src={booksSvg} alt="" />
            <a href="/books">
              <h4>Books</h4>
              <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </a>
          </div>
        </div>
        <div class="single-more-service-area grid-item">
          <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".4s">
            <img src={adhesiveTape} alt="" />
            <a href="/self-adhesive-labels">
              <h4>Self-Adhesive Labels</h4>
              <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </a>
          </div>
        </div>
        <div class="single-more-service-area grid-item">
          <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
            <img src={leafletSvg} alt="" />
            <a href="/leaflets">
              <h4>Leaflet</h4>
              <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </a>
          </div>
        </div>
        <div class="single-more-service-area grid-item">
          <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
            <img src={catalog} alt="" />
            <a href="/catalogs">
              <h4>Catalogs</h4>
              <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </a>
          </div>
        </div>
        <div class="single-more-service-area grid-item">
        <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".1s">
            <img src={brochure} alt="" />
            <a href="/brochuress">
              <h4>Brochures</h4>
              <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </a>
          </div>
        </div>
        <div class="single-more-service-area grid-item">
          <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".4s">
            <img src={poster} alt="" />
            <a href="/posters">
              <h4>Posters</h4>
              <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </a>
          </div>
        </div>
        <div class="single-more-service-area grid-item">
          <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
            <img src={calendar} alt="" />
            <a href="/calendars">
              <h4>Calendars</h4>
              <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </a>
          </div>
        </div>
        <div  class="single-more-service-area grid-item">
          <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
              <img src={carton} alt="" />
              <a href="/folding-cartons">
                <h4>Folding Cartons</h4>
                <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
              </a>
            </div>
        </div>
      </section>    
    </div>
}