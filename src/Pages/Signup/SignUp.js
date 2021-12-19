import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import API from '../../Services/api';
import Storage from '../../Services/storage';
import { Loading } from '../../Components/Loading';
import ConfirmModal from '../../Components/ConfirmModal/ConfirmModal';


const SignUp = (props) => {
    const [fullName, setFullName] = useState("")

    const [phonenumber, setPhonenumber] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")

    const [isLoading, setIsLoading] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const history = useHistory();

    const customer = Storage.GetItem("customer")
    return !customer ? (
        <Container component="main" maxWidth="xs">
            <ConfirmModal
                openConfirmModal={openConfirmModal}
                setOpenConfirmModal={setOpenConfirmModal}
                confirmMesage={"Okay"}
                modalContent={modalContent}
            />
            {isLoading && <Loading />}
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, alignItems: 'center' }}>
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={fullName}
                                    onChange={(e) => { setFullName(e.target.value) }}

                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    name="fullName"
                                    color='secondary'
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={phonenumber}
                                    onChange={(e) => { setPhonenumber(e.target.value) }}

                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone number"
                                    name="phoneNumber"
                                    color='secondary'
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={address}
                                    onChange={(e) => { setAddress(e.target.value) }}

                                    fullWidth
                                    name="address"
                                    label="Address"
                                    id="address"
                                    color='secondary'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}

                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    color='secondary'
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            size="large"
                            onClick={() => {
                                setIsLoading(true);
                                API.post("/register", {
                                    name: fullName,
                                    phone: phonenumber,
                                    password: password,
                                    address: address
                                }).then((respone) => {
                                    if (respone.status==200) {
                                        if (respone.data) {
                                            setIsLoading(false)
                                            Storage.SetItem("customer", {
                                                id: respone.data.id,
                                                phone: respone.data.phone,
                                                name: respone.data.name,
                                                address: respone.data.address,
                                            })
                                        }
                                        history.push("/")
                                    }
                                    else {
                                        setOpenConfirmModal(true);
                                        setIsLoading(false);
                                        setModalContent(respone.body);
                                        console.log("Error", respone.body);
                                    }
                                })

                            }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/sign-in" variant="body2" underline='none' color='secondary'>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
        </Container>
    ) : (
        <Redirect to="/" />
    );
}

export default SignUp;