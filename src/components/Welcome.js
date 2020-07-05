import React from 'react'

import welcomeBanner from '../assets/img/bg-img/welcome-bg.png'
import adhesive from '../assets/img/home-carousel/adhesive.png'
import leaflets from '../assets/img/home-carousel/leaflets.png'
import barcode from '../assets/img/home-carousel/barcode.png'
import books from '../assets/img/home-carousel/books.png'
import monocartons from '../assets/img/home-carousel/monocartons.png'

export const Welcome = ()=> {
  return <section 
    class="welcome_area clearfix"
    id="home" 
    style={{backgroundImage: `url(${welcomeBanner})`}}
  >
    <div class="hero-slides owl-carousel">
      <div class="single-hero-slide d-flex align-items-end justify-content-center">
        <div class="hero-slide-content text-center">
          <img class="slide-img" src={adhesive} alt="" />
        </div>
      </div>

      <div class="single-hero-slide d-flex align-items-end justify-content-center">
        <div class="hero-slide-content text-center">
          <img class="slide-img" src={leaflets} alt="" />
        </div>
      </div>

      <div class="single-hero-slide d-flex align-items-end justify-content-center">
        <div class="hero-slide-content text-center">
          <img class="slide-img" src={barcode} alt="" />
        </div>
      </div>

      <div class="single-hero-slide d-flex align-items-end justify-content-center">
        <div class="hero-slide-content text-center">
          <img class="slide-img" src={books} alt="" />
        </div>
      </div>

      <div class="single-hero-slide d-flex align-items-end justify-content-center">
          <div class="hero-slide-content text-center">
            <img class="slide-img" src={monocartons} alt="" />
          </div>
        </div>
    </div>
  </section>
}