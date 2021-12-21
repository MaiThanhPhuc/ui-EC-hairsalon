import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container, Paper, IconButton, InputAdornment } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import API from '../../Services/api';
import Storage from '../../Services/storage';
import { Loading } from '../../Components/Loading';
import ConfirmModal from '../../Components/ConfirmModal/ConfirmModal';
import AuthService from '../../Services/auth.service'

const newTheme = createTheme({
  palette: {
    primary: {
      main: "#22262a",
    },
    secondary: {
      main: "#6948ff",
    },
  },
});

const SignIn = (props) => {
  const [state, setState] = useState({ phone: "", password: "" })
  const [isLoading, setIsLoading] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({})

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);



  const handleChange = e => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))

  }

  const history = useHistory();

  const user = Storage.GetItem("user");
  return !user ? (
    <ThemeProvider theme={newTheme}>
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
              Sign in
            </Typography>
            <form sx={{ mt: 1 }}>
              <TextField
                margin="normal"

                value={state.phone}
                onChange={handleChange}

                error={errors.phone}
                helperText={message.phone}
                fullWidth
                id="phone"
                label="Phone number"
                name="phone"
                color='secondary'
                autoFocus
              />
              <TextField
                margin="normal"

                value={state.password}
                onChange={handleChange}

                error={errors.password}
                helperText={message.password}
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                color='secondary'
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

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                onClick={() => {
                  setIsLoading(true);
                  AuthService.login(state.phone, state.password)
                    .then((respone) => {
                      console.log(respone)
                      if (respone.status == 200) {
                        setIsLoading(false);
                        setOpenConfirmModal(true);
                        setModalContent("Đăng nhập thành công!");
                        if (respone.data) {
                          Storage.SetItem("user", respone.data)

                          history.push("/")
                          console.log(respone)
                        }
                      }
                    })
                    .catch((error) => {
                      console.log(error)
                      setState({
                        phone: "",
                        password: ""
                      })
                      setOpenConfirmModal(true);
                      setIsLoading(false);
                      setModalContent("Sai mật khẩu hoặc tài khoản");
                      console.log("Error", error);
                    })
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" underline="none">

                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2" underline="none" color='#6948ff'>
                    Sign up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  ) : (
    <Redirect to="/" />
  );
}

export default SignIn