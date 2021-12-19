import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import API from '../../Services/api';
import Storage from '../../Services/storage';
import { Loading } from '../../Components/Loading';
import ConfirmModal from '../../Components/ConfirmModal/ConfirmModal';
import { Message } from '@mui/icons-material';

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
  const [phonenumber, setPhonenubmer] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const history = useHistory();

  const customer = Storage.GetItem("customer");
  return !customer ? (
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
                required
                value={phonenumber}
                onChange={(e) => {
                  setPhonenubmer(e.target.value);
                }}

                fullWidth
                id="phoneNumber"
                label="Phone number"
                name="phoneNumber"
                autoComplete="phone"
                color='secondary'
                autoFocus
              />
              <TextField
                margin="normal"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}

                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color='secondary'
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                onClick={() => {
                  setIsLoading(true);
                  API.post(`/login?phone=${phonenumber}&password=${password}`)
                    .then((respone) => {
                      console.log(respone)
                      if (respone.status == 200) {
                        if (respone.data) {
                          setIsLoading(false)
                          Storage.SetItem("customer", {
                            id: respone.data.id,
                            phone: respone.data.phone,
                          })

                          history.push("/")
                          console.log(respone)
                        }
                      }
                    })
                    .catch((error) => {
                      console.log(error.status)
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
                    Forgot password?
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