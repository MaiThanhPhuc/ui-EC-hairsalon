import React from 'react'
import "./AppointmentDetail.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Appointment</h1>

      <form className="addProductForm">
        <h2 className="addProductTitle">Chi nhánh</h2>
        <div className="addProductItem">
          <label>Tên khách hàng</label>
          <div>

          </div>
        </div>
        <div className="addProductItem">
          <label>Số điện thoại</label>
          <div>

          </div>
        </div>
        <div className="addProductItem">
          <label>Dịch vụ được đăng ký</label>
          <div>

          </div>
        </div>
        <div className="addProductItem">
          <label>Time</label>
          <div>

          </div>
        </div>
        <div className="addProductItem">
          <label>Nhân viên</label>
          <div>

          </div>
        </div>

        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
