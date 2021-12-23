import React, { Component } from 'react'
//
import {
    Container,
    Paper,
    Grid,
    Typography,
    ButtonBase,
    IconButton,
    Button,
    Card,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import { Redirect } from 'react-router-dom';
//services
import Storage from '../../Services/storage'
import userService from '../../Services/user.service';

export class ChooseSlot extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props;

        this.state = {
            agencyId: params.agencyId,
            stylists: [],
            freeSlot: [],
            choosenStylist: [],
            choosenSlot: [],
            choosenDate: [],
            DateSlotIsDisabled: true,
            TimeSlotIsDisabled: true,
            ButtonIsDisable: true,
    
        }
        this.handleOnChooseDate = this.handleOnChooseDate.bind(this);
    }

    async handleOnChooseDate(event) {
        this.setState({
            choosenDate: event.target.value,
        }, ()=>{
            userService.getFreeSlot(this.state.choosenStylist.id, this.state.choosenDate)
            .then((respone) => {
                this.setState({
                    freeSlot: respone.data.hours,
                    TimeSlotIsDisabled: false
                })
            })
        })
    }

    handleOnClick() {
        Storage.SetItem('choosenStylist', this.state.choosenStylist)
        Storage.SetItem('choosenDate', this.state.choosenDate)
        Storage.SetItem('choosenSlot', this.state.choosenSlot)
        console.log(this.state.choosenStylist)
        console.log(this.state.choosenDate)
        console.log(this.state.choosenSlot)
        this.props.history.push(`/agency/${this.state.agencyId}/reservation/checkout`)
    }

    fetchStylist = async () => {
        const respone = await userService.getStylist()
        this.setState({
            stylists: respone.data.filter(stylist => stylist.role == "ROLE_STYLIST").filter(stylist => stylist.agency.id == this.state.agencyId)
        })
        console.log(this.state.stylists)
    }

    componentDidMount() {
        this.fetchStylist()
    }
    render() {
        const { stylists, choosenStylist, choosenSlot, choosenDate, freeSlot, ButtonIsDisable, TimeSlotIsDisabled, DateSlotIsDisabled } = this.state;
        const dateOfWeek = []

        for (let i = 0; i < 7; i++) {
            let d = new Date(new Date().setDate(new Date().getDate() + i))
            dateOfWeek[i] = d.getFullYear().toString() + '-' + (d.getMonth() + 1).toString() + '-' + d.getDate().toString()
        }
        const user = Storage.GetItem('user')
        return user ? (
            <>
                <Navbar />
                <Container className='booking-service' maxWidth="sm" sx={{ mb: 4, height: "75vh" }} >
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <div style={{ marginBottom: '2px' }}>
                            Chọn nhân viên
                        </div>
                        <FormControl fullWidth sx={{ my: 2 }}>
                            <InputLabel id="demo-simple-select-label">Chọn nhân viên</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={choosenStylist}
                                label="Chọn nhân viên"
                                option
                                onChange={(event) => this.setState({
                                    choosenStylist: event.target.value,
                                    DateSlotIsDisabled: false
                                })}
                            >
                                {
                                    stylists.map((stylist, index) => {
                                        return (
                                            <MenuItem value={stylist}>{stylist.name}</MenuItem>
                                        )
                                    })

                                }
                            </Select>
                        </FormControl>
                        <div> Chọn ngày hẹn </div>
                        <FormControl fullWidth sx={{ my: 2 }}>
                            <InputLabel id="demo-simple-select-label">Chọn ngày hẹn</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                defaultValue={dateOfWeek}
                                id="demo-simple-select"
                                value={choosenDate}
                                label="Chọn ngày hẹn"
                                disabled={DateSlotIsDisabled}
                                onChange={(event) => this.handleOnChooseDate(event)}
                            >
                                {
                                    dateOfWeek.map((date) => {
                                        return (
                                            <MenuItem value={date}>{date}</MenuItem>
                                        )
                                    })

                                }
                            </Select>
                        </FormControl>
                        <div> Chọn giờ hẹn </div>
                        <FormControl fullWidth sx={{ my: 2 }}>
                            <InputLabel id="demo-simple-select-label">Chọn giờ hẹn</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={choosenSlot}
                                label="Chọn giờ hẹn"
                                disabled={TimeSlotIsDisabled}
                                onChange={(event) => this.setState({
                                    choosenSlot: event.target.value,
                                    ButtonIsDisable: false
                                })}
                            >
                                {
                                    freeSlot.map((slot, index) => {
                                        if (slot.isWork == true)
                                            return (
                                                <MenuItem value={slot.shift.id}>{slot.shift.shiftFrom}</MenuItem>
                                            )
                                    })
                                }
                            </Select>
                        </FormControl>
                        <Button variant="outlined" color="primary" size="large" fullWidth disabled={ButtonIsDisable} onClick={() => this.handleOnClick()}> Thực hiện lịch hẹn</Button>
                    </Paper>
                </Container>
                <Footer />
            </>
        ) : (
            <Redirect to='/agency' />
        )
    }
}

export default ChooseSlot
