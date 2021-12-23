import React, { useState, useEffect } from 'react';
import "./AddService.css";

import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import AdminService from "../../../Services/admin.service";

export default function AddService() {
  const initialState = {
    name: "",
    price: 0,
    description: "",
    category: 5
  };

  const [state, setState] = useState(initialState);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const [image,setImage] = useState({})

  const clearState = () => {
    setState({ ...initialState });
  };


  const handleOnChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFile = e => {
    let file = e.target.files[0];
    setImage(file);
  }

  const handleImageUpload = e =>{
    let formData = new FormData();
    formData.append('image',image, image.name);
    AdminService.Service.postServiceImage(state.id,formData)
    .then((respone)=>{
      console.respone(respone)
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    AdminService.Service.postService(state)
      .then(console.log(state))
      .then((respone) => {
        console.log(respone.status)
        if (respone.status == 200) {
          setOpenConfirmModal(true);
          setModalContent("Thêm mới thành công!");
          clearState();
        }
        else {
          setOpenConfirmModal(true);
          setModalContent("Không thành công!");
        }
      }).catch(error => {
        setOpenConfirmModal(true);
        setModalContent("Dữ liệu bị lỗi!");
      })
  };



  return (
    <div className="newService">
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        confirmMesage={"Okay"}
        modalContent={modalContent}
      />
      <h1 className="newServiceTitle">New Service</h1>
      <form className="newServiceForm" onSubmit={handleSubmit}>
        <div className="newServiceItem">
          <label>Tên dịch vụ</label>
          <input type="text"
            placeholder="goi dau"
            name="name"
            value={state.name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="newServiceItem">
          <label>Giá cả</label>
          <input type="text"
            placeholder="12$"
            name="price"
            value={state.price}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="newServiceItem">
          <label>Loại dịch vụ</label>
          <select className="newServiceSelect" name="category" value={state.category} onChange={handleOnChange} required>
            <option value="5">CẮT GỘI MASSAGE</option>
            <option value="35">Combo</option>
            <option value="45">COMBO CHĂM SÓC DA - THƯ GIÃN (DÙNG KÈM)</option>
            <option value="15">NHUỘM CAO CẤP</option>
            <option value="75">UỐN HÀN QUỐC 8 CẤP ĐỘ</option>
          </select>
        </div>
        <div className="newServiceItem">
          <label>Mô tả</label>
          <textarea placeholder="lorem"
            name="description"
            value={state.description}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="newServiceItem">
          <label>Ảnh dịch vụ</label>
          <input  type="file" />
          <button onClick={handleImageUpload}> Upload</button>
        </div>
        <button className="newServiceButton">Create</button>
      </form>
    </div>
  );
}
