import React, { Component } from 'react'
import { Container, Paper, Grid, Typography, ButtonBase, IconButton, Button } from '@mui/material';
import { LocationOnSharp } from "@mui/icons-material";

import API from '../../Services/api'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
export default class ChooseAgency extends Component {
    constructor(props) {
        super(props)

        this.state = {
            agencies: []
        }
    }

    onClickChooseAgency(agency) {
        this.props.history.push(`/agency/${agency.id}/reservation/services`)
    }

    fetchAngecy = async () => {
        const respone = await API.get(`agencies`)
        this.setState({
            agencies: respone.data
        })
        console.log(respone.data)
    }

    componentDidMount() {
        this.fetchAngecy()
    }

    render() {
        const { agencies } = this.state

        return (
            <div>
                <Navbar/>
                <Container className='booking-service' maxWidth="sm" sx={{ mb: 4 }} >
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        {
                            agencies.map((agency) => {
                                return (
                                    <Container maxWidth="sm" sx={{ mb: 4 }} >
                                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <ButtonBase onClick={() => { }} sx={{
                                                        width: 180,
                                                        height: 180,
                                                        marginRight: "1.5em",
                                                    }}>
                                                        <img alt="complex" src={agency.image} style={{
                                                            margin: "auto",
                                                            display: "block",
                                                            width: 250,
                                                            height: 180,
                                                            maxWidth: "100%",
                                                            maxHeight: "100%",
                                                        }} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item xs={12} sm={11} sm container>
                                                    <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs>
                                                            <Typography
                                                                variant="h6"
                                                                gutterBottom
                                                                style={{ marginBottom: "1em" }}
                                                            >
                                                                {agency.name}
                                                            </Typography>
                                                            <Typography variant="body2" gutterBottom>

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
                                                                <LocationOnSharp color="gray " fontSize="small" />
                                                                {agency.address}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item style={{ textAlign: "right" }}>
                                                    <Button
                                                        size="small"
                                                        color="primary"
                                                        variant="contained"
                                                        style={{ marginRight: ".5em" }}
                                                        onClick={(e) => this.onClickChooseAgency(agency)}
                                                    >
                                                        Chọn chi nhánh
                                                    </Button>
                                                    <IconButton
                                                        aria-label="delete"
                                                        size="small"
                                                    >
                                                        <LocationOnSharp />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Container>

                                )
                            })
                        }
                    </Paper>
                </Container>
                <Footer/>
            </div>
        )
    }
}