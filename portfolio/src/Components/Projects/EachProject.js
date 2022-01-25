import React from "react";
import { useEffect } from 'react';
import WebFont from "webfontloader";

export default function EachProject() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Saira'],
          },
        });
      });

  return (
    <div className="w-50 mt-3 d-flex flex-row " style={{fontFamily:'Saira'}}>
      <div className="mt-4">
        <img src="./Images/github.png" className="card-img-top" />
      </div>

      <div>
        <div className="card-header bg-dark text-light">EMRI</div>

        <div className="card-body bg-dark text-light ">
          <blockquote className="blockquote mb-0">
              <p>For details, please check the project via github link</p>
            <p><a href="#" className="text-decoration-none"> <i className="fa fa-code-fork text-danger" aria-hidden="true"></i> Link to GitHub</a></p>
            <footer className="blockquote-footer ">
              Individaul Project extra technologies
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
