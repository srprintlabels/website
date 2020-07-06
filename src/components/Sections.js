import React from 'react';

export const Sections = (props)=> {
  return <div class="middle-section">
    <section class="welcome-section">
        <h2>Welcome</h2>
        <div style={{color: "#abadbe"}}>
          <h5>SR Print Labels is a well established organization in the domain of commercial designing and printing.
          We are one of the most prominent service providers of Offset Printing, Roll form Labels services.
          We are having more than 10 years of experience in this industry.</h5>
        </div>
    </section>

    <section class="our-clientele-section" style={{textAlign:"center"}}>
      <h2>Our clientele</h2>
      <div style={{color: "#abadbe"}}>
        <h5>We have been able to attract a number of customers all over the country. Currently we are engaged
        in providing services to high profile customers in Pharmaceutical, Electronics, Defence,Telecom Industries and Solar.
        Moreover, we are endowed with highly diligent team of professionals who never hesitate to go an extra mile
        to serve the customer to the best of their satisfaction.Their skillful and creative blend of mind can replicate any abstract idea on the paper.</h5>
      </div>
    </section>
  </div>;
}