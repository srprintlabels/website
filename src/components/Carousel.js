import React from 'react'

import welcomeBanner from '../assets/img/bg-img/welcome-bg.png'
import adhesive from '../assets/img/home-carousel/adhesive.png'
import leaflets from '../assets/img/home-carousel/leaflets.png'
import barcode from '../assets/img/home-carousel/barcode.png'

export const Carousel = ()=> {
  return <section 
    className="welcome_area clearfix"
    id="home" 
    style={{
      backgroundImage: `url(${welcomeBanner})`, 
      padding:'10vh 0 0 0',
      display: 'flex',
      justifyContent: 'center'
    }}
  >    
    <div id="carouselExampleIndicators" class="carousel slide landing-carousel" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={adhesive} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img src={leaflets} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img src={barcode} alt="Third slide" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
}