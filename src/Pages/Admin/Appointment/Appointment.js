import React, { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Appointment.css"
import AdminService from '../../../Services/admin.service'
import { Loading } from '../../../Components/Loading'
import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';


export default function Appointment() {
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [modalContent, setModalContent] = useState("");


    useEffect(() => {
        AdminService.Appointment.getAppointment()
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
            field: "employee",
            headerName: "AGENCY",
            width: 120,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        {params.row.employee.agency.name}
                    </div>
                );
            },
        },
        {
            field: "shift",
            headerName: "APPOINTMENT TIME",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        Start time: {params.row.shift.shiftFrom}
                    </div>
                );
            },
        },
        {
            field: "client", headerName: "CUSTOMER", width: 150,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        {params.row.client.name}
                    </div>
                );
            },
        },
        {
            field: "price", headerName: "PRICE", width: 150, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        $ {params.row.price}
                    </div>
                );
            },
        },
        {
            field: "services", headerName: "SERVICES", width: 120,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        {params.row.services.length} dịch vụ
                    </div>
                );
            },
        },
        {
            field: "status", headerName: "STATUS", width: 150,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        {params.row.status == true ? "Đã thanh toán" : "Chưa thanh toán"}
                    </div>
                );
            },
        },
        {
            field: "payment", headerName: "PAYMENT", width: 90,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        {params.row.payment.name}
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
                        <Link to={"/admin/appointments/" + params.row.id}>
                            <button className="serviceListEdit">Detail</button>
                        </Link>
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
        <>
            <ConfirmModal
                openConfirmModal={openConfirmModal}
                setOpenConfirmModal={setOpenConfirmModal}
                confirmMesage={"Okay"}
                modalContent={modalContent}
            />
            <div className="productList">
                {isLoading && <Loading />}
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={12}
                    checkboxSelection
                />
            </div>
        </>
    );
}
