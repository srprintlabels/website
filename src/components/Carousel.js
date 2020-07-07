import React from "react";

import welcomeBanner from "../assets/img/bg-img/welcome-bg.png";
import adhesive from "../assets/img/home-carousel/adhesive.png";
import leaflets from "../assets/img/home-carousel/leaflets.png";
import barcode from "../assets/img/home-carousel/barcode.png";
import books from "../assets/img/home-carousel/books.png";
import monocartons from "../assets/img/home-carousel/monocartons.png";

export const Carousel = () => {
  return (
    <section
      className="welcome_area clearfix"
      id="home"
      style={{
        backgroundImage: `url(${welcomeBanner})`,
        padding: "10vh 0 0 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        id="carouselExampleIndicators"
        class="carousel slide landing-carousel"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2 style={{fontWeight: '600'}}>Self-Adhesive Labels</h2>
            <img src={adhesive} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <h2 style={{fontWeight: '600'}}>Leaflets & Flyers</h2>
            <img src={leaflets} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <h2 style={{fontWeight: '600'}}>Barcode Labels</h2>
            <img src={barcode} alt="Third slide" />
          </div>
          <div class="carousel-item">
            <h2 style={{fontWeight: '600'}}>Visual Aids, Books & Magazines</h2>
            <img src={books} alt="Fourth slide" />
          </div>
          <div class="carousel-item">
          <h2 style={{fontWeight: '600'}}>Packaging MonoCartons</h2>
            <img src={monocartons} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};
