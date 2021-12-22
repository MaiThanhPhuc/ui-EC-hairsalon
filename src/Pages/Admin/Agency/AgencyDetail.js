import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LocationSearching, LocationOn, Publish } from "@mui/icons-material";

import "./AgencyDetail.css";

import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import AdminService from "../../../Services/admin.service"


export default function AgencyDetail() {
  const id = useParams().agencyId;
  const [agency, setAgency] = useState({})

  const [state, setState] = useState({
    id: 0,
    name: "",
    address: "",
    districtId: 0
  })

  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    AdminService.Agency.getAgencyByID(id).then((respone) => {
      setAgency(respone.data);
      setState(respone.data);
    })
    console.log("asdasd", agency);
    console.log("EFFFFFF",state);
    console.log(id);
  }, [])

  const handleOnChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state)
    AdminService.Agency.putAgency(state)
      .then((respone) => {
        if (respone.status == 200) {
          setOpenConfirmModal(true);
          setModalContent("Thêm mới thành công!");
        }
        else {
          setOpenConfirmModal(true);
          setModalContent("Không thành công!");
        }
      }).catch(error => {
        setOpenConfirmModal(true);
        setModalContent("Lỗi không xác định!");
      })
  };

  return (
    <div className="agency">
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        confirmMesage={"Okay"}
        modalContent={modalContent}
      />
      <div className="agencyTitleContainer">
        <h1 className="agencyTitle">Edit Agency</h1>
      </div>
      <div className="agencyContainer">
        <div className="agencyShow">
          <div className="agencyShowTop">
            <div className="agencyShowTopTitle">
              <span className="agencyShowUsername">{agency.name}</span>
            </div>
          </div>
          <div className="agencyShowBottom">
            <div className="agencyShowInfo">
              <LocationSearching className="agencyShowIcon" />
              <span className="agencyShowInfoTitle">{agency.address}</span>
            </div>
            <div className="agencyShowInfo">
              <LocationOn className="agencyShowIcon" />
              <span className="agencyShowInfoTitle"> { }  </span>
            </div>
          </div>
        </div>
        <div className="agencyUpdate">
          <span className="agencyUpdateTitle">Edit</span>
          <form className="agencyUpdateForm" onSubmit={handleSubmit}>
            <div className="agencyUpdateLeft">
              <div className="agencyUpdateItem">
                <label>Agency Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="agencyUpdateInput"
                  name='name'
                  value={state.name}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="agencyUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="agencyUpdateInput"
                  name='address'
                  value={state.address}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="agencyUpdateItem">
                <label>District</label>
                <input
                  type="text"
                  placeholder=" USA"
                  className="agencyUpdateInput"
                  name='district'
                  value={state.district}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button className="agencyUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
