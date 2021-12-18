
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router
} from 'react-router-dom';


import MyRoutes from './Routes/index'
import history from "./Services/history";

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

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={newTheme}>
        <MyRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;

//<Route exact path="/reservation" element={<Reservation/>} />