import React, { useEffect, useState } from 'react'
import { LocationSearching, PhoneAndroid } from "@mui/icons-material";
import { useParams } from 'react-router-dom';

import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import "./UserDetail.css";

import AdminService from '../../../Services/admin.service'

function UserDetail() {
    const id = useParams().userId;
    const [client, setClient] = useState({})

    const [state,setState] = useState({id: 0, phone:"", name:"", address:"", password:""})

    const [isLoading, setIsLoading] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    useEffect(() => {
        AdminService.getClientByID(id).then((respone) => {
            setClient(respone.data);
            setState(respone.data);
        })
        console.log(state)
        console.log(id)
    }, [])


    const handleOnChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(state)
        AdminService.putClient(client)
        .then((respone)=>{
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

    return (
        <div className="user">
            <ConfirmModal
                openConfirmModal={openConfirmModal}
                setOpenConfirmModal={setOpenConfirmModal}
                confirmMesage={"Okay"}
                modalContent={modalContent}
            />
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit Customer</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{client.name}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">{client.phone}</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">{client.address}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm" onSubmit={handleSubmit}>
                        <div className="userUpdateLeft">
                            <label>Customer Name</label>
                            <input
                                type="text"
                                placeholder="Anna Becker"
                                className="userUpdateInput"
                                name='name'
                                value={state.name}
                                onChange={handleOnChange}
                                required
                            />
                            <label>Password</label>
                            <input
                                type="text"
                                placeholder="abc****"
                                className="userUpdateInput"
                                name='password'
                                value={state.password}
                                onChange={handleOnChange}
                                required
                            />
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="New York | USA"
                                className="userUpdateInput"
                                name='address'
                                value={state.address}
                                onChange={handleOnChange}
                                required
                            />
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserDetail
