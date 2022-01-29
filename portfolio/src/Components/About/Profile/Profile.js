import React from "react";
import { useEffect } from 'react';
import WebFont from "webfontloader";
import ContactData from "./ContactData";

export default function Profile() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Inconsolata'],
          },
        });
      }, []);


  return (
    <div style={{fontFamily:'Inconsolata'}}>
    <div className="d-flex justify-content-center align-items-center mb-5" >
      <div className="flip-card mt-5">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="./Images/profile.jpg"
              alt="Profile"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
          <div className="flip-card-back">
            <h2 className="card-title mt-3">Valmir Mujku</h2>
         
          <h2 className="card-title"> <i className="fa fa-address-card-o text-danger" aria-hidden="true"></i></h2>
          <h6 className="card-subtitle mb-2 text-muted">Web Developer</h6>
          <p className="card-text mt-4 ms-4 mx-4">Actually, living in Prishtina-Kosova. Started to study in 2016,  Graduated in 2020 at Computer Science and Engineering. Participating in some front-end projects, approximately, 5 years experience working with EU/USA companies, outside and inside of technology box.</p>
         <div className="d-flex justify-content-center align-items-center flex-column " style={{marginTop:'100px'}}>
                <div>SOCIAL MEDIA</div>
                <div> <a className="p-4" style={{color:'white'}} href='https://www.linkedin.com/in/valmir-mujku-8b253916a0/'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
         <a className="p-4" style={{color:'white'}} href='https://github.com/ValmirMujku'><i className="fa fa-github" aria-hidden="true"></i></a>
         <a className="p-4" style={{color:'white'}} href='https://www.facebook.com/valmir.mujku/'><i class="fa fa-facebook" aria-hidden="true"></i></a></div>
         </div>
          </div>
        </div>
      </div>
    </div>
    <ContactData/>
    </div>
  );
}
