import React from "react";
import { useEffect, useState } from "react";
 

export default function ContactData() {

  const [personal,setPersonal]=useState([{
    fullname:"",
    email:"",
    phone:""
  }])

  useEffect(() => {
  
     

    fetch('http://localhost:3004/data')
      .then((res) => res.json())
      .then((data) => setPersonal(data))
      .catch((e) => console.log(e));
  }, []);


  return (
    <>
    
  
      {personal && personal.map((pp)=>(<div key={pp.fullname} className="d-flex justify-content-center align-items-center mb-4">
      <div className="card shadow-lg p-3 mb-5 bg-body rounded">
      <h5 className="card-title text-center">CONTACT</h5>
        <div className="card-body"><span className="fw-bolder" ><i class="fa fa-user-o" aria-hidden="true"></i> Name:</span>{pp.fullname}</div>
        <div className="card-body"><span className="fw-bolder" ><i class="fa fa-envelope-o" aria-hidden="true"></i> Email:</span>{pp.email}</div>
        <div className="card-body"><span className="fw-bolder" ><i class="fa fa-phone" aria-hidden="true"></i> Phone:</span>{pp.phone}</div>
      </div>
    </div>) )}
    </>
     
  );
}
