import React from 'react'
import { Category, Description, AttachMoney, Publish } from "@mui/icons-material";


import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import "./ServiceDetail.css";
import AdminService from '../../../Services/admin.service'


export default function ServiceDetail() {


    
    return (
        <div className="service">
            <div className="serviceTitleContainer">
                <h1 className="serviceTitle">Edit Service</h1>
            </div>
            <div className="serviceContainer">
                <div className="serviceShow">
                    <div className="serviceShowTop">
                        <img
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="serviceShowImg"
                        />
                        <div className="serviceShowTopTitle">
                            <span className="serviceShowServicename">Cat Toc</span>
                        </div>
                    </div>
                    <div className="serviceShowBottom">
                        <div className="serviceShowInfo">
                            <AttachMoney className="serviceShowIcon" />
                            <span className="serviceShowInfoTitle">12</span>
                        </div>
                        <div className="serviceShowInfo">
                            <Description className="serviceShowIcon" />
                            <span className="serviceShowInfoTitle">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                                alias soluta omnis quae, eligendi temporibus voluptatem enim
                                rerum quisquam recusandae culpa rem! Modi quisquam quo at nisi,
                                sit ea aliquid.
                            </span>
                        </div>
                        <div className="serviceShowInfo">
                            <Category className="serviceShowIcon" />
                            <span className="serviceShowInfoTitle">Cat Toc</span>
                        </div>
                    </div>
                </div>
                <div className="serviceUpdate">
                    <span className="serviceUpdateTitle">Edit</span>
                    <form className="serviceUpdateForm">
                        <div className="serviceUpdateLeft">
                            <div className="serviceUpdateItem">
                                <label>Service Name</label>
                                <input
                                    type="text"
                                    placeholder="Cat toc"
                                    className="serviceUpdateInput"
                                />
                            </div>
                            <div className="serviceUpdateItem">
                                <label>Price</label>
                                <input
                                    type="text"
                                    placeholder="$1xx"
                                    className="serviceUpdateInput"
                                />
                            </div>
                            <div className="serviceUpdateItem">
                                <label>Description</label>
                                <textarea
                                    placeholder="lorem"
                                    className="serviceUpdatetextare"
                                />
                            </div>
                        </div>
                        <div className="serviceUpdateRight">
                            <div className="serviceUpdateUpload">
                                <img
                                    className="serviceUpdateImg"
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
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
