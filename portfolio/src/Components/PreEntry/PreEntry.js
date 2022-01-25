import React from 'react';
import { Link } from 'react-router-dom';
 

function PreEntry() {
  return <div>
      <div className="container-fluid w-50  " id="div2">
      <section className="position-relative overflow-hidden">
          <p className="text-danger text-center text-uppercase position-relative" id="text">WELCOME TO THE BEST GUNS SITE, IF YOU ARE A GUN FAN, YOU ARE ON THE RIGHT PLACE. We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately. </p>
          <div className="text-center"><Link to="/" className="nav-link fs-6 ">
            <i className="fa fa-align-justify text-warning"></i> HOME
          </Link> </div>
      </section>
  </div>
  </div>;
}

export default PreEntry;
