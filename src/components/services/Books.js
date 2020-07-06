import React from 'react';

import breadcrumb from '../../assets/img/core-img/breadcumb.png';

import { Header, Footer } from '../../components'

export const Books = (props)=> {
  return <div>
    <Header />
    <div className="mosh-breadcumb-area" style={{backgroundImage: `url(${breadcrumb})`}}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="bradcumbContent">
              <h2>Books</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="mosh-portfolio-area">
      <div class="mosh-projects-menu">
        <div class="portfolio-menu">
        </div>
      </div>
    </section>

    <Footer />
  </div>
}