import React, { Component } from 'react'
import API from '../../Services/api'
import Storage from '../../Services/storage';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import {  Container, Paper, Grid, Typography, ButtonBase, IconButton, Button, Card,Box } from '@mui/material';
import { BookOnline } from '@mui/icons-material/BookOnline'

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
                <Container className='booking-service' maxWidth="sm" sx={{ mb: 4 }} >
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Button fullWidth color='primary' variant="outlined" sx={{ mt: 2 }} onClick={(e) => this.onClickForwardToSlot(choosenService)}>
                            Chọn ({choosenService.length}) dịch vụ
                        </Button>
                        {
                            services.map((service) => {
                                return (
                                    <Container maxWidth="sm" sx={{ mb: 4 }} >
                                        <Box  sx={ {  boxShadow: "1px 3px 1px #cccccc", border: '1px solid #cccccc', my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 },   display: "flex",flexDirection:"column", alignItems:"center",justifyContent:"center" }}>
                                            <div>
                                                <ButtonBase onClick={() => { }} sx={{
                                                    width: 180,
                                                    height: 180,
                                                    marginRight: "1.5em",
                                                }}>
                                                    <img alt="complex" src={service.image} style={{
                                                        margin: "auto",
                                                        display: "block",
                                                        width: 250,
                                                        height: 180,
                                                        maxWidth: "100%",
                                                        maxHeight: "100%",
                                                        objectFit:"contain"
                                                    }} />
                                                </ButtonBase>
                                            </div>
                                            <div>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <div style={{
                                                            width: "180px"
                                                    }}>
                                                        <Typography
                                                            variant="h6"
                                                            gutterBottom
                                                            style={{
                                                                fontWeight:"300",
                                                                fontSize:"16px"
                                                            }}
                                                        >
                                                            {service.name}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="textSecondary"
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "row",
                                                                alignItems: "center",
                                                                justifyContent: "flex-start",
                                                            }}
                                                        >
                                                            {service.address}
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                            </div>
                                            <div>
                                                <Button
                                                    //key={index}
                                                    size="small"
                                                    color="primary"
                                                    variant="contained"
                                                    style={{ marginRight: ".5em" }}
                                                    //disabled={isDisabled}
                                                    onClick={(e) => this.chooseService(service)}
                                                >
                                                    Chọn dịch vụ
                                                </Button>
                                                <IconButton
                                                    aria-label="delete"
                                                    size="small"
                                                >
                                                </IconButton>
                                            </div>
                                        </Box >
                                    </Container>
                                )
                            })
                        }

                    </Paper>
                </Container>
                <Footer />
            </>
        )
    }
}

export default ChooseService
