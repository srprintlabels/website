import React from 'react'

import websiteInfo from '../website-info.json'

const { welcome, ourClientele } = websiteInfo

export const Sections = (props)=> {
  return <div class="middle-section">
    <section class="welcome-section">
        <h2>{welcome.title}</h2>
        <div style={{color: "#abadbe"}}>
          <h5>{welcome.text}</h5>
        </div>
    </section>

    <section class="our-clientele-section" style={{textAlign:"center"}}>
      <h2>{ourClientele.title}</h2>
      <div style={{color: "#abadbe"}}>
        <h5>{ourClientele.text}</h5>
      </div>
    </section>
  </div>;
}