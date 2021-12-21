import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container, Paper, IconButton, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import AuthService from '../../Services/auth.service'
import Storage from '../../Services/storage';
import { Loading } from '../../Components/Loading';
import ConfirmModal from '../../Components/ConfirmModal/ConfirmModal';


import API from '../../Services/api'

const SignUp = (props) => {
    const [fullName, setFullName] = useState("")

    const [phonenumber, setPhonenumber] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")

    const [isLoading, setIsLoading] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);



    const history = useHistory();

    const user = Storage.GetItem("user")
    return !user ? (
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

                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}

                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    color='secondary'
                                    autoComplete="new-password"
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
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
                                AuthService.register(fullName, phonenumber, password, address)
                                /*API.post('/register',
                                    {
                                        name: fullName,
                                        phong: phonenumber,
                                        password: password,
                                        address: address
                                    })*/
                                    .then((respone) => {
                                        if (respone.status == 200) {
                                            if (respone.data) {
                                                setOpenConfirmModal(true);
                                                setIsLoading(false);
                                                setModalContent("Đăng ký thành công!");
                                            }
                                            history.push("/")
                                        }
                                    }).catch((error) => {
                                        console.log(fullName)
                                        console.log(phonenumber)
                                        console.log(password)
                                        console.log(password)
                                        setFullName("")
                                        setPhonenumber("")
                                        setPassword("")
                                        setAddress("")
                                        setOpenConfirmModal(true);
                                        setIsLoading(false);
                                        setModalContent("Lỗi không xác định!");
                                        console.log("Error", error.body);
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