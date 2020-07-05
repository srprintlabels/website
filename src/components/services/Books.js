import React from 'react';

import breadcrumb from '../../assets/img/core-img/breadcumb.png';

import { Header, Footer } from '../../components'

export const Books = (props)=> {
  return <div>
    <Header />
    <div class="mosh-breadcumb-area" style={{backgroundImage: `url(${breadcrumb})`}}>
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="bradcumbContent">
              <h2>Books</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section style={{height: '60vh'}}></section>
    <Footer />
  </div>
}