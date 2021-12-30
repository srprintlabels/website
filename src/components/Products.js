import React from 'react';

import booksSvg from '../assets/img/core-img/book.svg'
import adhesiveTape from '../assets/img/core-img/adhesive-tape.svg'
import leafletSvg from '../assets/img/core-img/leaflet.svg'
import catalog from '../assets/img/core-img/catalog.svg'
import brochure from '../assets/img/core-img/brochure.svg'
import poster from '../assets/img/core-img/poster.svg'
import calendar from '../assets/img/core-img/calendar.svg'
import carton from '../assets/img/core-img/carton.svg'

import {  products } from '../website-info.json'

export const Products = ()=> {
    return <div class="mosh-products-area">
      <center><h2>Our Featured Products </h2></center>

      <section class="mosh-more-services-area" style={{padding: "50px 0 0 0"}}>
        <a href="/books"><div class="single-more-service-area grid-item">
          <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".1s">
            <img src={booksSvg} alt="" />
              <h4>{products.books.title}</h4>
              <p>{products.books.description}</p>
            </div>
          </div>
        </a>
        <a href="/self-adhesive-labels">
          <div class="single-more-service-area grid-item">
            <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".4s">
              <img src={adhesiveTape} alt="" />
                <h4>Self-Adhesive Labels</h4>
                <p>Thousands of sizes, shapes, material and ink combination all available with low pricing and quick turn arround!</p>
            </div>
          </div>
        </a>
        <a href="/leaflets">
          <div class="single-more-service-area grid-item">
            <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
              <img src={leafletSvg} alt="" />
                <h4>Leaflets</h4>
                <p>Leaflets are cost effective way for business to advertise its products and services. Let us help you to create one that gets noticed, read and remembered.</p>
            </div>
          </div>
        </a>
        <a href="/catalogs">
          <div class="single-more-service-area grid-item">
            <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
              <img src={catalog} alt="" />
                <h4>Catalogs</h4>
                <p>One of your most important selling tools may be professionally printed catalog. We'll help you showcase your products in the best way possible with a high-quality catalog you'll be proud to distribute.</p>
            </div>
          </div>
        </a>
        <a href="/brochuress">
          <div class="single-more-service-area grid-item">
            <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".1s">
              <img src={brochure} alt="" />
                <h4>Brochures</h4>
                <p>With professional design and printing, our brochure are sure to sell. From the big idea to the small details, our team has years of experience to get the job done.</p>
            </div>
          </div>
        </a>
        <a href="/posters">
          <div class="single-more-service-area grid-item">
            <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".4s">
              <img src={poster} alt="" />
                <h4>Banners</h4>
                <p>A big area calls for a big statement. And that's exactly what we deliver with every banner we print.</p>
            </div>
          </div>
        </a>
        <a href="/calendars">
          <div class="single-more-service-area grid-item">
            <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
              <img src={calendar} alt="" />
                <h4>Calendars</h4>
                <p>Print Personalised Calendars with Photo,Logo,Quote & Text. Add Events & Birthdays. Create for Friends & Family or Gift to Customers, We'll help to create great calendars to make long lasting impresson. </p>
            </div>
          </div>
        </a>
        <a href="/folding-cartons">
          <div  class="single-more-service-area grid-item">
            <div class="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
                <img src={carton} alt="" />
                  <h4>Business Forms</h4>
                  <p>Creating business forms can be hassle- so why not let us handle it for you? We'll help you boost your brand's image with professionally desgined business forms.</p>
              </div>
          </div>
        </a>
      </section>    
    </div>
}