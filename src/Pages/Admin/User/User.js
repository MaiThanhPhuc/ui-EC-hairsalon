import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import AdminService from "../../../Services/admin.service";

import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import AddUser from './AddUser';
import "./User.css";



export default function User() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [modalContent, setModalContent] = useState("");


    useEffect(() => {
        AdminService.getClient().then((respone) => {
            setData(respone.data)
        })
    }, [])

    const handleDelete = (id) => {
        AdminService.deleteClient(id).then((respone) => {
            console.log(respone);
            setData(data.filter((item) => item.id != id));
        }).then((respone)=>{
            if(respone.status == 200){
                setOpenConfirmModal(true);
                setModalContent("Xoá thành công!");
            }
            else {
                setOpenConfirmModal(true);
                setModalContent("Xoá không thành công!");
            }
        }).catch(error => {
            setOpenConfirmModal(true);
            setModalContent("Lỗi không xác định!");
        })
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "CUSTOMER", width: 200 },
        { field: "phone", headerName: "PHONE", width: 200 },
        { field: "address", headerName: "ADDRESS", width: 200 },

        {
            field: "action",
            headerName: "ACTION",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/users/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <ConfirmModal
                openConfirmModal={openConfirmModal}
                setOpenConfirmModal={setOpenConfirmModal}
                confirmMesage={"Okay"}
                modalContent={modalContent}
            />
            <Link to="/admin/users/add" element={<AddUser />} >
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
