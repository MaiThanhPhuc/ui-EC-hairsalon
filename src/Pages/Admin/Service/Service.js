import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Service.css";

import AdminService from '../../../Services/admin.service';

export default function Service() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");


  useEffect(() => {
      AdminService.getClient().then((respone) => {
          setData(respone.data)
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="serviceListItem">
            <img className="serviceListImg" src={params.row.img} alt="" />
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
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/service/" + params.row.id}>
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
      <Link to="/newService" >
        <button className="serviceAddButton">Create</button>
      </Link>
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
