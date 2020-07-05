import React from 'react';

import logo from '../assets/img/core-img/logo.png';

export const Header = (props)=> {
  return <div>
    {/* Pre loader */}
    <div id="preloader">
        <div class="mosh-preloader"></div>
    </div>
    
    {/* Header */}
    <header class="header_area clearfix">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-12 h-100">
            <div class="menu_area h-100">
              <nav class="navbar h-100 navbar-expand-lg align-items-center">
                <a class="navbar-brand" href="/">
                  <img src={logo} alt="logo"></img>
                </a>
                <button 
                  class="navbar-toggler" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#mosh-navbar" 
                  aria-controls="mosh-navbar" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="mosh-navbar">
                  <ul class="navbar-nav animated" id="nav">
                    <li class="nav-item active">
                      <a class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/about">About Us</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="moshDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                      <div class="dropdown-menu" aria-labelledby="moshDropdown">
                        <a class="dropdown-item" href="/books">Books</a>
                        <a class="dropdown-item" href="/self-adhesive-labels">Self-adhesive labels</a>
                        <a class="dropdown-item" href="/leaflets">Leaflets</a>
                        <a class="dropdown-item" href="/catalogs">Catalogs</a>
                        <a class="dropdown-item" href="/brochures">Brochures</a>
                        <a class="dropdown-item" href="/posters">Posters</a>
                        <a class="dropdown-item" href="/calendars">Calendars</a>
                        <a class="dropdown-item" href="/folding-cartons">Folding Cartons</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>;
}