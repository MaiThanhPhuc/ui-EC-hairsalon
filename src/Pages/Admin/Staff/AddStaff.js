import React, { useState, useEffect } from 'react'

import "./AddStaff.css";

import { Loading } from '../../../Components/Loading'
import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import AdminService from "../../../Services/admin.service"

export default function AddStaff() {
  const initialState = {
    name: "",
    phone: "",
    password: "",
    role: "",
    agencyId: 0
  }
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const [agencyInfo, setAgencyInfo] = useState({})

  useEffect(() => {
    AdminService.Agency.getAgency()
      .then((respone) => {
        setAgencyInfo(respone.data);
        console.log(respone.data)
        console.log(agencyInfo);
        setIsLoading(false);
      })
  }, [])

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleOnChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = e => {
    e.preventDefault();
    AdminService.Employee.postEmployee(state)
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
    <div className="newStaff">
       <ConfirmModal
                openConfirmModal={openConfirmModal}
                setOpenConfirmModal={setOpenConfirmModal}
                confirmMesage={"Okay"}
                modalContent={modalContent}
            />
      <h1 className="newStaffTitle">New Staff</h1>
      {isLoading && <Loading />}
      <form className="newStaffForm">
        <div className="newStaffItem">
          <label>Staff Name</label>
          <input type="text"
            placeholder="john"
            name="name"
            value={state.name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="newStaffItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+84 123 456 78"
            name="phone"
            value={state.phone}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="newStaffItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="newStaffItem">
          <label>Role</label>
          <select className="newStaffSelect" name="role" value={state.role} onChange={handleOnChange}>
            <option value="ROLE_ADMIN">Admin</option>
            <option value="ROLE_STYLIST">Thợ</option>
          </select>
        </div>
        <div className="newStaffItem">
          <label>Agency</label>
          <select className="newStaffSelect"
            name="agencyId"
            value={state.agencyId}
            onClick={handleOnChange}
          >
            {/*
                agencyInfo.map((agency)=>{
                  <option key={agency.id} value={agency.id}>{agency.name}</option>
                })
            */}
          </select>
        </div>
        <button className="newStaffButton" onClick={()=> console.log(state)}>Create</button>
      </form>
    </div>
  );
}
