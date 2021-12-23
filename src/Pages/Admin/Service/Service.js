import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Service.css";
import { Loading } from '../../../Components/Loading'
import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import AdminService from '../../../Services/admin.service';

export default function Service() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");


  useEffect(() => {
    AdminService.Service.getService()
      .then((respone) => {
        setData(respone.data);
        setIsLoading(false);
        console.log(respone.data)
      })
  }, [])



  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "SERVICE",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="serviceListItem">
            <img className="serviceListImg" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "PRICE",
      width: 200,
    },
    {
      field: "description",
      headerName: "DESCRIPTION",
      width: 300,
    },
    {
      field: "category",
      headerName: "CATEGORY",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="serviceListItem">
            {params.row.category.name}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/services/" + params.row.id}>
              <button className="serviceListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="serviceListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="serviceList">
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        confirmMesage={"Okay"}
        modalContent={modalContent}
      />
      <Link to="/admin/services/add" >
        <button className="serviceAddButton">Create</button>
      </Link>
      {isLoading && <Loading />}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
