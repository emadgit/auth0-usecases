import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CarRental from '@mui/icons-material/CarRental';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  redirect,
  Routes,
  Route
} from "react-router-dom";

import { LandingPage } from './Pages/LandingPage';
import { Profile } from './Pages/Profile';
import { NotFound } from './Pages/NotFound';
import { AccessDenied } from './Pages/AccessDenied'
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
      A Sample Project
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function App() {
  const navigate = useNavigate();

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  React.useEffect(()=> {
  }, [user, isAuthenticated])
  const handleLogout = async () => {
    await logout()
  }

  const handleLogin = () => {
    const res = loginWithRedirect();
  }
  const navigateToProfile = ()=> {
    navigate("/profile")
  }

  const navigateToHome = ()=> {
    navigate("/")
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <CarRental sx={{ mr: 2, cursor: "pointer"}} onClick={navigateToHome} />
          <Typography  sx={{flex: 1, cursor: "pointer"}} variant="h6" color="inherit" noWrap onClick={navigateToHome}>
            London Cars
          </Typography>
          {isAuthenticated && (<Stack sx={{ display: "flex", flexDirection: "row"}} columnGap={3}>
            <Button variant="contained" color="primary" sx={{marginLeft: 2}} onClick={navigateToProfile}>Profile</Button>

            <Button variant="contained" color="primary" sx={{marginLeft: 2}} onClick={handleLogout}>Log out</Button>
            </Stack>)}
          
        </Toolbar>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<LandingPage isAuthenticated={isAuthenticated} handleLogin={handleLogin} />} />
        <Route exact path="/profile" element={isAuthenticated ? <Profile user={user} /> : <AccessDenied />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', bottom: 5, position: 'fixed', width: '100%' }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}