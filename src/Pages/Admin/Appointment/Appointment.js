import React, { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Appointment.css"
import AdminService from '../../../Services/admin.service'


//import NewProduct from "../newAppointment/NewProduct";

export default function Appointment() {
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
            field: "time",
            headerName: "APPOINTMENT TIME",
            width: 200,
        },
        {
            field: "servicename",
            headerName: "SERVICE",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "customername", headerName: "CUSTOMER", width: 200 },
        {
            field: "phone",
            headerName: "PHONE",
            width: 200,
        },
        {
            field: "action",
            headerName: "ACTION",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <Link to="/admin/appointments/add">
                <button className="userAddButton">Create</button>
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
