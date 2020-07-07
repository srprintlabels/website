import React from 'react'

import logo from '../assets/img/core-img/logo.png'

export const Header = (props)=> {
  return <div>
    {/* Pre loader */}
    <div id="preloader">
        <div className="mosh-preloader"></div>
    </div>

    {/* Header */}
    <header className="header_area clearfix">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12 h-100">
            <div className="menu_area h-100">
              <nav className="navbar h-100 navbar-expand-lg align-items-center">
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="logo"></img>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mosh-navbar"
                  aria-controls="mosh-navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="mosh-navbar">
                  <ul className="navbar-nav animated" id="nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        id="moshDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Services
                      </a>
                      <div className="dropdown-menu" aria-labelledby="moshDropdown">
                        <a className="dropdown-item" href="/books">Books</a>
                        <a className="dropdown-item" href="/self-adhesive-labels">Self-adhesive labels</a>
                        <a className="dropdown-item" href="/leaflets">Leaflets</a>
                        <a className="dropdown-item" href="/catalogs">Catalogs</a>
                        <a className="dropdown-item" href="/brochures">Brochures</a>
                        <a className="dropdown-item" href="/posters">Posters</a>
                        <a className="dropdown-item" href="/calendars">Calendars</a>
                        <a className="dropdown-item" href="/folding-cartons">Folding Cartons</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">Contact</a>
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
