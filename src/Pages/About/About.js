import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import imgMain from '../../Resources/Images/img_aboutus.png';
import img1 from '../../Resources/Images/img.png';
import img2 from '../../Resources/Images/img_1.png';
import img3 from '../../Resources/Images/img_2.png';
import {Grid} from "@mui/material";

function About() {
    return (<>
        <Navbar/>
        <div style={{
            fontWeight: "600",
            fontSize: "4rem",
            color: "#553bcb",
            textAlign: "center",
            paddingTop: "12rem",
            paddingBottom: "12rem"
        }}>
            GIỚI THIỆU
        </div>
        <Grid container spacing={2} direction="row"
              justifyContent="center"
              alignItems="center">
            <Grid item xs={6} md={9}>
                <img
                    src={imgMain}
                    style={{
                        width: "100%"
                    }}
                />
            </Grid>
        </Grid>
        <div>
            <Grid container spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs={6} md={9}>
                    <h1 style={{
                        paddingBottom: "1rem",
                        borderBottom: "1px solid #553bcb",
                        marginBottom: "3rem",
                        color: "#553bcb"
                    }}>THÀNH
                        VIÊN</h1>
                </Grid>
            </Grid>
            <Grid container spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid container spacing={3} item xs={6} md={9}>
                    <Grid item xs={6} md={4}>
                        <img
                            src={img1}
                            style={{
                                width: "100%"
                            }}
                        />
                        <h3 style={{ color:"#9a9388", fontWeight:"500", margin:"1rem 0"}}>
                           CEO
                        </h3>
                        <h2 style={{marginBottom:"1rem"}}>
                            RICK NORMAN
                        </h2>
                        <p style={{}}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.
                        </p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img
                            src={img2}
                            style={{
                                width: "100%"
                            }}
                        />
                        <h3 style={{ color:"#9a9388", fontWeight:"500", margin:"1rem 0"}}>
                           Beard Stylist
                        </h3>
                        <h2 style={{marginBottom:"1rem"}}>
                            ANDREW NICK
                        </h2>
                        <p style={{}}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.
                        </p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img
                            src={img3}
                            style={{
                                width: "100%"
                            }}
                        />
                        <h3 style={{  color:"#9a9388", fontWeight:"500", margin:"1rem 0"}}>
                           Hair Stylist
                        </h3>
                        <h2 style={{marginBottom:"1rem"}}>
                            TOM HENDERS
                        </h2>
                        <p style={{marginBottom:"3rem"}}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.
                        </p>
                    </Grid>
                </Grid>

            </Grid>
        </div>
        <Footer/>
    </>)
}

export default About
