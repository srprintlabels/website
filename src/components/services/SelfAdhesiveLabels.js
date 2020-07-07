import React from "react";

import breadcrumb from "../../assets/img/core-img/breadcumb.png";
import adhesive1 from "../../assets/img/portfolio-img/adhesive/1.png";
import adhesive2 from "../../assets/img/portfolio-img/adhesive/2.png";
import adhesive3 from "../../assets/img/portfolio-img/adhesive/3.png";
import adhesive4 from "../../assets/img/portfolio-img/adhesive/4.png";
import adhesive5 from "../../assets/img/portfolio-img/adhesive/5.png";
import adhesive6 from "../../assets/img/portfolio-img/adhesive/6.png";

import { Header, Footer } from "../../components";

export const SelfAdhesiveLabels = (props) => {
  return (
    <div>
      <Header />
      <div
        className="mosh-breadcumb-area"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="bradcumbContent">
                <h2>Self-Adhesive Labels</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-content">
        <div
          class="mosh-gallery"
          style={{
            gridTemplateColumns: "auto auto auto",
          }}
        >
          <div class="single_gallery_item grid-item">
            <img src={adhesive1} alt="" />
            <div class="gallery-hover-overlay">
              <div class="port-hover-text text-center">
                <h4>Self Adhesive Label</h4>
              </div>
            </div>
          </div>
          <div class="single_gallery_item grid-item">
            <img src={adhesive2} alt="" />
            <div class="gallery-hover-overlay">
              <div class="port-hover-text">
                <h4>Blank Barcode Thermal Sticker</h4>
              </div>
            </div>
          </div>
          <div class="single_gallery_item grid-item">
            <img src={adhesive3} alt="" />
            <div class="gallery-hover-overlay">
              <div class="port-hover-text text-center">
                <h4>Blank Barcode Label</h4>
              </div>
            </div>
          </div>
          <div class="single_gallery_item grid-item">
            <img src={adhesive4} alt="" />
            <div class="gallery-hover-overlay">
              <div class="port-hover-text text-center">
                <h4>Flexo Label</h4>
              </div>
            </div>
          </div>
          <div class="single_gallery_item grid-item">
            <img src={adhesive5} alt="" />
            <div class="gallery-hover-overlay">
              <div class="port-hover-text text-center">
                <h4>Printed Label</h4>
              </div>
            </div>
          </div>
          <div class="single_gallery_item grid-item">
            <img src={adhesive6} alt="" />
            <div class="gallery-hover-overlay">
              <div class="port-hover-text text-center">
                <h4>Thermal Barcode Label</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
