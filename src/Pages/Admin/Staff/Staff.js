import React, { useState, useEffect } from "react";

import "./Staff.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";


import AdminService from "../../../Services/admin.service";
import { Loading } from '../../../Components/Loading'
import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';


export default function Staff() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    AdminService.Employee.getEmployee().then((respone) => {
      setData(respone.data);
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
      headerName: "STAFF",
      width: 200,
    },
    { field: "phone", headerName: "PHONE", width: 200 },
    {
      field: "password",
      headerName: "PASSWORD",
      width: 200,
    },
    { field: "role", headerName: "ROLE", width: 200 },
    { field: "agency", headerName: "AGENCY", width: 200,/* renderCell: (params) => {
      return (
        <div className="serviceListItem">
          {params.row.agency.name}
        </div>
      );
    },*/ },
    {
      field: "action",
      headerName: "ACTION",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/staffs/" + params.row.id}>
              <button className="staffListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="staffListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="staffList">
      <Link to="/admin/staffs/add" >
        <button className="staffAddButton">Create</button>
      </Link>
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
