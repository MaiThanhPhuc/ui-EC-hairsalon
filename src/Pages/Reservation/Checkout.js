import React, { Component } from 'react'

import {
    Container,
    Paper,
    Grid,
    Typography,
    ButtonBase,
    IconButton,
    Button,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';
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
            choosenServiceID: [],
            clientPhone: [],
            paypalLink: [],

        }


    }
    handleOnClick() {
        console.log(this.state.choosenStylistID)
        console.log(this.state.choosenDateID)
        console.log(this.state.choosenSlotID)
        console.log(this.state.choosenService)
        API.post("/bills/pay/paypal/", {

            clientPhone: `${this.state.clientPhone}`,
            employeeId: `${this.state.choosenStylistID}`,
            paymentId: 5,
            status: false,
            idServices: this.state.choosenServiceID,
            shiftId: this.state.choosenSlotID
        }).then((respone) => {
            console.log(respone.data)
            this.setState({
                paypalLink: `${respone.data}`

            })
            console.log(this.state.paypalLink)
        })

    }
    componentDidMount() {

        this.setState({
            choosenStylistID: Storage.GetItem('choosenStylist'),
            choosenDateID: Storage.GetItem('choosenDate'),
            choosenSlotID: Storage.GetItem('choosenSlot'),
            choosenService: Storage.GetItem('choosenService'),
            choosenServiceID: Storage.GetItem('choosenServiceID'),
            clientPhone: '0123456789',
        })

    }
    render() {
        const { choosenStylistID, choosenDateID, clientPhone, choosenService, paypalLink, choosenSlotID } = this.state

        return (
            <>
                <Navbar />
                <Container className='booking-service' maxWidth="sm" sx={{ mb: 4 }} >
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "500" }}>
                            Tổng quan về đơn hẹn
                        </Typography>
                        <Typography variant="h6" gutterBottom >
                            SĐT khách hàng: <Typography color="secondary" variant="h6">{clientPhone}</Typography>
                        </Typography>
                        {choosenService.map((serivce) => (
                            <ListItem key={serivce.id} sx={{ py: 1, px: 0 }}>
                                <ListItemText variant="body2" primary={serivce.name} secondary={serivce.description} />
                                <Typography variant="body3" color="secondary"> ${serivce.price}</Typography>
                            </ListItem>
                        ))}
                        <ListItem sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 700 }}>
                                $34.06
                            </Typography>
                        </ListItem>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                    Stylist Phụ trách
                                </Typography>
                                <Typography gutterBottom>{choosenStylistID}</Typography>
                                <Typography gutterBottom>123</Typography>
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
                        <Button variant="outlined" fullWidth size="large" onClick={() => this.handleOnClick()}>
                            <a href={paypalLink}>
                                Click
                            </a>
                        </Button>
                    </Paper>
                </Container>
                <Footer />
            </>
        )
    }
}

export default Checkout
