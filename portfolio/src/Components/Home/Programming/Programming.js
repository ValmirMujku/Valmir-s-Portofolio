import React from 'react';
import { Link } from 'react-router-dom';
 

export default function Programming(props) {
  return   <div className="card w-25 mb-5  shadow-lg p-3 mb-5 bg-body rounded  " >
  <img  src={props.src}  className="card-img-top"  />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text small">{props.description}</p>
    <Link to='projects'className='btn btn-primary'>Check</Link>
   
  </div>
  <div className="card-footer text-muted">
    {`${props.projects} Projects`} 
  </div>
</div> 
 
   
}
