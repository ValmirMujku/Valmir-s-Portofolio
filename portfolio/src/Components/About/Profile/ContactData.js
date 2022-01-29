import React from "react";

export default function ContactData() {
  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="card">
      <h5 className="card-title text-center">CONTACT</h5>
        <div className="card-body"><span className="bg-dark text-light"><i class="fa fa-user-o" aria-hidden="true"></i> Name:</span></div>
        <div className="card-body"><span className="bg-dark text-light"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email:</span></div>
        <div className="card-body"><span className="bg-dark text-light"><i class="fa fa-phone" aria-hidden="true"></i> Phone:</span></div>
      </div>
    </div>
  );
}
