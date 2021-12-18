import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
function PageNotfound() {
    return (
        <>
            <Navbar />
            <div style={{height:"52rem", fontSize:"10rem",color:"#553bcb", textAlign:"center", paddingTop:"15rem" }}>
                404 NOT FOUND
            </div>
            <Footer/>
        </>
    )
}

export default PageNotfound
