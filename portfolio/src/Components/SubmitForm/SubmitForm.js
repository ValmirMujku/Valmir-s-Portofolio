import React from "react";
import Footer from "../Footer/Footer";
import { useState } from "react";
import axios from 'axios';

export default function SubmitForm() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    content: "",
  });

  const handleChange = (event) => {
    const {name,value} = event.target;

    setInput(prevInput=>{
        return {
            ...prevInput, [name]:value 
        }
    })
  };

  const handleClick=(event )=>{
      event.preventDefault();
      const newSubmit = {
        fullname:input.fullname,
        email: input.email,
        content: input.content
      }
      
      axios.post('http://localhost:3004/create', newSubmit);
       setInput({
        fullname: "",
        email: "",
        content: "",
       }) 
       
        
  }

   

  return (
    <>
      <div className=" d-flex justify-content-center align-items-center mt-4 mb-4">
        <form className="card p-3 w-50  bg-dark">
          <h3 className="text-center text-light">CONTACT FORM</h3>
          <div id="emailHelp" className="form-text text-center">
            If you want to contact me for any official reason, please fill this
            form.
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tim Harrison"
              name="fullname"
              onChange={handleChange}
              value={input.fullname}
            />
          </div>
          <div className="mt-3">
            <input
              type="email"
              className="form-control"
              placeholder="tim.harrison@gmail.com"
              name="email"
              onChange={handleChange}
              value={input.email}
            />
          </div>
          <div className="mt-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="content"
              onChange={handleChange}
              value={input.content}
            ></textarea>
          </div>
          <div className="text-center mt-3">
            <button onClick={handleClick}   className="btn btn-success fw-bold">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
