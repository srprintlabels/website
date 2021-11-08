import React from 'react'

import NotFoundIcon from '../assets/img/core-img/page-not-found.svg'

export const NotFoundPage = () => {
  return <div
    className="not-found"
    style={{
      height: '100vh',
      width: '100vw',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(#1a3c8d, #4a7aec)'
    }}
  >
  <img
    src={NotFoundIcon}
    alt=""
    className="not-found-icon"
  />
  <p className="not-found-caption" style={{
    color:'white',
    fontSize: '30px',
    width: '80vw',
    textAlign: 'center',
    padding: '50px 0 0 0'
  }}>
    The page you're looking for is not here
  </p>
  <a href="/" className="animated pulse" style={{ cursor: 'pointer' }}>
    <button class="btn mosh-btn">Take Me Home 🏠</button>
  </a>
  </div>
}
