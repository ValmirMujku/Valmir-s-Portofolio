import React from 'react';
import SocialMedia from './SocialMedia';
import FooterDetails from './FooterDetails';
import { useEffect } from 'react';
import WebFont from "webfontloader";

export default function Footer() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ["Roboto Condensed"],
          },
        });
      });


  return  <div className='container-fluid p-0 m-0' style={{fontFamily:'Roboto Condensed'}}>
      <div className='container-fluid bg-dark pt-4'>
          <div className='row border border-light border-end-0 border-start-0 border-top-0 '>
          <FooterDetails
            title="TECHNOLOGIES"
            items={["JavaScript", "HTML", "CSS", "REACT", "BOOTSTRAP","Java"]}
          />
            <FooterDetails
            title="DATABASES"
            items={["MySQL", "SQL", "FIREBASE"]}
          />
              <FooterDetails
            title="IDE's"
            items={["VisualStudio", "NetBeans", "Atom","IntelliJ"]}
          />
          </div>
            <SocialMedia/>
      </div>

  </div>
}
