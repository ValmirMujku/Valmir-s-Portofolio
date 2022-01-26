import React from "react";
import { useEffect, useState } from 'react';
import WebFont from "webfontloader";

export default function EachProject() {

    const [Api,setApi] = useState();

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Saira'],
          },
        });


        fetch("http://localhost:3000/projects")
        .then((response) => response.json())
        .then((res) => setApi(res.data));
      }, []);

     

  return (
      <>
           {Api && Api.map((data)=>(<div key={data.name} className="w-50 mt-3 d-flex flex-row " style={{fontFamily:'Saira'}}>
      <div className="mt-4">
        <img src="./Images/github.png" className="card-img-top" />
      </div>
   

      <div>
        <div className="card-header bg-dark text-warning"><i class="fa fa-asterisk" aria-hidden="true"></i> {data.name}</div>

        <div className="card-body bg-dark text-light ">
          <blockquote className="blockquote mb-0">
              <p><i class="fa fa-question-circle" aria-hidden="true"></i> For details, please check the project via github link</p>
            <p><a href={data.link}  className="text-decoration-none"> <i className="fa fa-code-fork text-danger" aria-hidden="true"></i> Link to GitHub</a></p>
            <footer className="blockquote-footer ">
            {`${data.type} - ${data.techno}` }
            </footer>
          </blockquote>
        </div>
      </div>
    </div>))}; 
      </>
    
  );
}
