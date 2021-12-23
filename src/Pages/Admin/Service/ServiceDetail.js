import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Category, Description, AttachMoney, Publish } from "@mui/icons-material";

import { Loading } from '../../../Components/Loading'
import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import "./ServiceDetail.css";
import AdminService from '../../../Services/admin.service'


export default function ServiceDetail() {
    const id = useParams().serviceId;
    const [service, setService] = useState({
        id: 0,
        name: "",
        image: "",
        price: 0,
        description: "",
        category: {
            id: 0,
            name: ""
        }
    })

    const [state, setState] = useState({
        id: 0,
        name: "",
        image: "",
        price: 0,
        description: "",
        category: {
            id: 0,
            name: ""
        }
    })

    const [isLoading, setIsLoading] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    useEffect(() => {
        AdminService.Service.getServiceByID(id).then((respone) => {
            setService(respone.data);
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
        AdminService.Service.putService(state)
            .then((respone) => {
                if (respone.status == 200) {
                    setOpenConfirmModal(true);
                    setModalContent("Cập nhập thành công!");
                    console.log(respone.data)
                }
                else {
                    setOpenConfirmModal(true);
                    setModalContent("Cập nhập không thành công!");
                }
            }).catch(error => {
                setOpenConfirmModal(true);
                setModalContent("Lỗi không xác định!");
            })
    };

    const handleFile = e =>{
        e.preventDefault();
        console.log(e.target.files)
    }

    return (
        <div className="service">
            <ConfirmModal
                openConfirmModal={openConfirmModal}
                setOpenConfirmModal={setOpenConfirmModal}
                confirmMesage={"Okay"}
                modalContent={modalContent}
            />
            {isLoading && <Loading />}
            <div className="serviceTitleContainer">
                <h1 className="serviceTitle">Edit Service</h1>
            </div>
            <div className="serviceContainer">
                <div className="serviceShow">
                    <div className="serviceUpdateUpload">
                        <img
                            src={service.image}
                            alt=""
                            className="serviceUpdateImg"
                        />
                        <div className="serviceShowTopTitle">
                            <span className="serviceShowServicename">{service.name}</span>
                        </div>
                    </div>
                    <div className="serviceShowBottom">
                        <div className="serviceShowInfo">
                            <AttachMoney className="serviceShowIcon" />
                            <span className="serviceShowInfoTitle">{service.price}</span>
                        </div>
                        <div className="serviceShowInfo">
                            <Description className="serviceShowIcon" />
                            <span className="serviceShowInfoTitle">
                                {service.description}
                            </span>
                        </div>
                        <div className="serviceShowInfo">
                            <Category className="serviceShowIcon" />
                            <span className="serviceShowInfoTitle">Loại dịch vụ: {service.category.name} </span>
                        </div>
                    </div>
                </div>
                <div className="serviceUpdate">
                    <span className="serviceUpdateTitle">Edit</span>
                    <form className="serviceUpdateForm" onSubmit={handleSubmit}>
                        <div className="serviceUpdateLeft">
                            <div className="serviceUpdateItem">
                                <label>Tên dịch vụ</label>
                                <input
                                    type="text"
                                    placeholder="Cat toc"
                                    className="serviceUpdateInput"
                                    name='name'
                                    value={state.name}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="serviceUpdateItem">
                                <label>Giá</label>
                                <input
                                    type="text"
                                    placeholder="$1xx"
                                    className="serviceUpdateInput"
                                    name='price'
                                    value={state.price}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="serviceUpdateItem">
                                <label>Mô tả</label>
                                <textarea
                                    placeholder="lorem"
                                    className="serviceUpdatetextare"
                                    name='description'
                                    value={state.description}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>
                        <div >
                            <div className="serviceUpdateItem">
                                <label>Loại dịch vụ</label>
                                <select className="newServiceSelect" name="role" value={state.category.id} onChange={handleOnChange} required>
                                    <option value="5">CẮT GỘI MASSAGE</option>
                                    <option value="35">Combo</option>
                                    <option value="45">COMBO CHĂM SÓC DA - THƯ GIÃN (DÙNG KÈM)</option>
                                    <option value="15">NHUỘM CAO CẤP</option>
                                    <option value="75">UỐN HÀN QUỐC 8 CẤP ĐỘ</option>
                                </select>
                            </div>
                        </div>
                        <div className="serviceUpdateRight">
                            <div className="serviceUpdateUpload">
                                <img
                                    className="serviceUpdateImg"
                                    src={state.image}
                                    alt=""
                                />
                                <label htmlFor="file" onChange={handleFile}>
                                    <Publish className="serviceUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="serviceUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
