import React, { Component } from 'react'

import { Container, Paper, Grid, Typography, ButtonBase, IconButton, Button } from '@mui/material';
import { LocationOnSharp } from "@mui/icons-material";

import API from '../../Services/api'
import Storage from '../../Services/storage';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

export class Checkout extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props;

        this.state = {
            agencyId: params.agencyId,
            choosenStylistID: [],
            choosenSlotID: [],
            choosenDateID: [],
            choosenService: [],
            clientPhone: [],

        }


    }
    handleOnClick() {
        console.log(this.state.choosenStylistID)
        console.log(this.state.choosenDateID)
        console.log(this.state.choosenSlotID)
        console.log(this.state.choosenService)
        API.post("/bills/pay/paypal/", {

            clientPhone: `'${this.state.clientPhone}'`,
            employeeId: `'${this.state.choosenStylistID}'`,
            paymentId: 5,
            status: true,
            idServices: [
                5, 15, 25
            ],
            shiftId: this.state.choosenSlotID
        }).then((respone) => {
            window.location.href = `${respone.data}`
        })

    }
    componentDidMount() {
        this.setState({
            choosenStylistID: Storage.GetItem('choosenStylist'),
            choosenDateID: Storage.GetItem('choosenDate'),
            choosenSlotID: Storage.GetItem('choosenSlot'),
            choosenService: Storage.GetItem('choosenService'),
            clientPhone: '0123456789',
        })

    }
    render() {
        const { choosenStylistID, choosenDateID, choosenSlotID, clientPhone, choosenService } = this.state
        return (
            <>
                <Navbar />
                <Container className='booking-service' maxWidth="sm" sx={{ mb: 4 }} >
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography variant="h6" gutterBottom>
                            Tổng quan về đơn hẹn
                        </Typography>
                        <div>
                            {clientPhone}
                        </div>
                        <div>
                            <ul>
                                {
                                    choosenService.map((serivce, index) => {
                                        return (
                                            <li key={index}>
                                                {serivce.id}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                    Stylist Phụ trách
                                </Typography>
                                <Typography gutterBottom>{choosenStylistID}</Typography>
                                <Typography gutterBottom>adsasdasdasd</Typography>
                            </Grid>
                            <Grid item container direction="column" xs={12} sm={6}>
                                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                    Thời gian cuộc hẹn
                                </Typography>
                                <Grid container>
                                    <Typography gutterBottom>Ngày hẹn: {choosenDateID}</Typography>
                                    <Typography gutterBottom>Buổi hẹn: {choosenSlotID}</Typography>                                
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button variant="outlined" fullWidth size="large" onClick={() => this.handleOnClick()}>click</Button>
                    </Paper>
                </Container>
                <Footer />
            </>
        )
    }
}

export default Checkout
