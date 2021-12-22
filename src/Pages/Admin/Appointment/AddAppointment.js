import React from 'react'
import "./AddAppointment.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Appointment</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Services</label>
          <select name="active" id="active">
            <option value="1">Cắt </option>
            <option value="2">Cắt gội</option>
            <option value="3">Ráy tai </option>
            <option value="4">Lột mụn</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Staff</label>
          <select name="active" id="active">
            <option value="s1">Quang</option>
            <option value="s2">Di</option>
            <option value="s3">Ha</option>
            <option value="s4">Hi</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="addProductItem">
          <label>Time</label>
          <input type="time" />
        </div>
        <div className="addProductItem">
          <label>Customer</label>
          <select name="active" id="active">
            <option value="s1">Quang</option>
            <option value="s2">Di</option>
            <option value="s3">Ha</option>
            <option value="s4">Hi</option>
          </select>
        </div>

        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
