import React from 'react';
import Footer from '../Footer/Footer';

export default function SubmitForm() {

  return <>
        <div className=' d-flex justify-content-center align-items-center mt-4 mb-4'>
        <form className='card p-3 w-50  bg-dark'>
            <h3 className='text-center text-light'>CONTACT FORM</h3>
            <div id="emailHelp" className="form-text text-center">If you want to contact me for any official reason, please fill this form.</div>
            <div className='mt-3'>
            <input type="text" className="form-control" placeholder='Tim Harrison' />    
            </div>
            <div className='mt-3'>
            <input type="email" className="form-control" placeholder='tim.harrison@gmail.com' /> 
            </div>
            <div className='mt-3'>
            <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
            </div >
            <div className='text-center mt-3'>
            <button type="submit" className="btn btn-success fw-bold">SUBMIT</button>
            </div>
        </form>
    
  </div>
  <Footer/>
  </> 

   
}
