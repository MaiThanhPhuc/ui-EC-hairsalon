import React, { useState, useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

import AddAgency from './AddAgency'
import { Loading } from '../../../Components/Loading'
import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import "./Agency.css";

import AdminService from "../../../Services/admin.service";


export default function Agency() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    AdminService.Agency.getAgency().then((respone) => {
      setData(respone.data);
      console.log(respone.data);
      setIsLoading(false);
    })
  }, [])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "AGENCY",
      width: 200,
    },
    { field: "address", headerName: "ADDRESS", width: 180 },
    {
      field: "district",
      headerName: "DISTRICT",
      width: 180,
      renderCell: (params) => {
        return <div className="agencyListUser">{params.row.address}</div>;
      },
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/agencies/" + params.row.id}>
              <button className="agencyListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="agencyListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="agencyList">
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        confirmMesage={"Okay"}
        modalContent={modalContent}
      />
      <Link to="/admin/agencies/add" element={<AddAgency />}>
        <button className="agencyAddButton">Create</button>
      </Link>
      {isLoading && <Loading />}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  );
}
