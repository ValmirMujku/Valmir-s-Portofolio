import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import WebFont from "webfontloader";

function Navigation({handleToggleDarkMode}) {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto Mono'],
      },
    });
  }, []);

  
  return   <nav className="navbar navbar-expand-xl navbar-dark bg-dark m-0  " style={{fontFamily:'Roboto Mono'}}>
  <div className="container-fluid">
    <a className="navbar-brand text-danger " href="#">
    <i className="fa fa-code text-light" ></i>
       Valmir's PortFolio
     
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarDark"
      aria-controls="navbarDark"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <Link to="/" className="nav-link fs-6 ">
            <i className="fa fa-align-justify text-warning"></i> HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" className="nav-link fs-6 ">
            <i
              className="fa fa-graduation-cap text-warning"
              aria-hidden="true"
            ></i>{" "}
            PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link fs-6 ">
            <i className="fa fa-user text-warning" aria-hidden="true"></i>{" "}
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
        <div className="form-check form-switch mt-2" style={{marginLeft:'200px'}}>
          <input onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="form-check-input" type="checkbox" id="formSwitchCheckDefault"/>
          <label className="form-check-label text-light" for="formSwitchCheckChecked">mode</label>
        </div>
        
        
         
        </li>

        
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>;
}

export default Navigation;
