 import React from 'react'
import "./OneElementAccordion.css";
const OneElementAccordion = ({ user }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-4 col-text-left"> {user.username}</div>
        <div className=" col-6 col-sm-4 col-text-left"> ({user.mobileNumber})</div>
        <div className="col-sm-4 col-text-left"> {user.address}</div>
      </div>
      <hr></hr>
    </div>
  );
};

export default OneElementAccordion
