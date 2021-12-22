import React from 'react';
import "./AddService.css";

export default function NewService() {
  return (
    <div className="newService">
      <h1 className="newServiceTitle">New Service</h1>
      <form className="newServiceForm">
        <div className="newServiceItem">
          <label>Service Name</label>
          <input type="text" placeholder="goi dau" />
        </div>

        <div className="newServiceItem">
          <label>Price</label>
          <input type="email" placeholder="12$" />
        </div>
        <div className="newServiceItem">
          <label>Description</label>
          <textarea placeholder="lorem" />
        </div>
        <button className="newServiceButton">Create</button>
      </form>
    </div>
  );
}
