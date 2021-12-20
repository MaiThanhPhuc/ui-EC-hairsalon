import React, { Component } from 'react'
import API from '../../Services/api'
import Storage from '../../Services/storage';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import {
    Container,
    Paper,
    Grid,
    Typography,
    ButtonBase,
    IconButton,
    Button,
    Card,
    Avatar,
    Box
} from '@mui/material';


export class ChooseService extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props;

        this.state = {
            agencyId: params.agencyId,
            services: [],
            choosenService: [],
            choosenServiceId: []
            //isDisabled: false
        }
    }
    chooseService(service) {
        if (!(this.state.choosenService.some(item => item.id === service.id))) {
            this.setState({
                choosenService: this.state.choosenService.concat(service),
                choosenServiceId: this.state.choosenServiceId.concat(service.id),
                //isDisabled: true
            })
        }
        console.log(this.state.choosenService)
        console.log(service)

    }

    onClickForwardToSlot(choosenServiceList) {
        if (choosenServiceList.length != 0) {
            Storage.SetItem("choosenService", choosenServiceList)
            Storage.SetItem("choosenServiceID", this.state.choosenServiceId)
            this.props.history.push(`/agency/${this.state.agencyId}/reservation/slots`)
        }
    }
    fetchServices = async () => {
        const respone = await API.get(`services`)
        this.setState({
            services: respone.data
        })
        console.log(respone.data)
        console.log(this.state.agencyId)
    }

    componentDidMount() {
        this.fetchServices()
    }

    render() {
        const { agencyId, services, choosenService, isDisabled } = this.state

        return (
            <>
                <Navbar />
                <Container maxWidth="sm" sx={{ mb: 4 }} >
                    <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Button fullWidth color='primary' variant="outlined" sx={{ mt: 2 }} onClick={(e) => this.onClickForwardToSlot(choosenService)}>
                            Chọn ({choosenService.length}) dịch vụ
                        </Button>
                        <div style={{color:"violet"}}>
                            {
                                services.map((service, index) => {
                                    if (service.category.id == 5)
                                        return (
                                            <Paper variant="outlined" elevation="16" key={index} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}}>
                                                <Grid container>
                                                    <Grid item>
                                                        <Avatar src={service.image} sx={{height:"56px", width:"56px"}}/>
                                                    </Grid>
                                                    <Grid item>

                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        )
                                })
                            }
                        </div>
                    </Paper>
                </Container>
                <Footer />
            </>
        )
    }
}

export default ChooseService
