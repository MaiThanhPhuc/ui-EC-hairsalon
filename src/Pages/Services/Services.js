import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import {Grid} from "@mui/material"
import './services.css'
import img1 from "../../Resources/Images/img_6.png";
import img2 from "../../Resources/Images/img_5.png";
import img3 from "../../Resources/Images/img_4.png";
import img4 from "../../Resources/Images/img_3.png";

function Services() {
    return (
        <>
            <Navbar/>
            <div style={{
                fontWeight: "600",
                fontSize: "4rem",
                color: "#553bcb",
                textAlign: "center",
                padding: "12rem 0",

            }}>
                DỊCH VỤ
            </div>
            <div style={{marginBottom:"10rem"}}>
                <Grid container spacing={2} direction="row"
                      justifyContent="center"
                      alignItems="center">
                    <Grid container spacing={3} item xs={6} md={9}>
                        <Grid item xs={6} md={6}>
                            <div className={"image-container"}>
                                <div className={"image-content"}>
                                    CẮT TÓC
                                </div>
                                <div className={"image"}>
                                    <img src={img1}
                                         style={{
                                             width: "100%"
                                         }}/>
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={6} md={6}>
                            <div className={"image-container"}>
                                <div className={"image-content"}>
                                    CẠO MẶT
                                </div>
                                <div className={"image"}>
                                    <img src={img2}
                                         style={{
                                             width: "100%"
                                         }}/>
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={6} md={6}>
                            <div className={"image-container"}>
                                <div className={"image-content"}>
                                    COMBO
                                </div>
                                <div className={"image"}>
                                    <img src={img3}
                                         style={{
                                             width: "100%"
                                         }}/>
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={6} md={6}>
                            <div className={"image-container"}>
                                <div className={"image-content"}>
                                    TẠO KIỂU RÂU
                                </div>
                                <div className={"image"}>
                                    <img src={img4}
                                         style={{
                                             width: "100%"
                                         }}/>
                                </div>
                            </div>

                        </Grid>
                    </Grid>

                </Grid>
            </div>
            <Footer/>
        </>
    )
}

export default Services
