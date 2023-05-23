import React from 'react';
import {AppBar, Toolbar, Typography, Container, InputAdornment, TextField} from '@mui/material';
import Styles from './App.module.css'
import {  NavLink } from 'react-router-dom';
import {Route, Routes} from "react-router";
import HomePage from "./Components/HomePage/HomePage";
import Responsibility from "./Components/Responsibility/Responsibility";
import Products from "./Components/Products/Products";
import Login from "./Components/Auth/Login/Login";
import Reg from "./Components/Auth/Registration/Registration";




function App() {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                      <NavLink className={Styles.AppTitle} exact to="/" >AutoService</NavLink>
                        <div>
                            <NavLink to="/" className={Styles.HeaderNavItem}>
                            Company
                        </NavLink>
                            <NavLink to="/responsibility" className={Styles.HeaderNavItem}>
                            Responsibility
                        </NavLink >
                            <NavLink to='products' className={Styles.HeaderNavItem}>
                            Product & Services
                        </NavLink>
                            <NavLink to='development' className={Styles.HeaderNavItem}>
                            Research & Development
                        </NavLink>

                        </div>

                        </Typography>

                    <TextField
                        style={{background:"white",width:'200px',marginLeft:'500px'}}
                        variant="outlined"
                        fullWidth
                        size="small"
                        placeholder={"Search"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">

                                </InputAdornment>
                            ),
                        }}
                    />
                    <NavLink to="login"    style={{marginLeft:'30px',fontSize:"20px"}}   className={Styles.HeaderNavItem}>
                        Account
                    </NavLink>
                </Toolbar>
            </AppBar>

                <Container

                    sx={{
                        flex: '1',
                        marginTop: '2rem',
                    }}
                >

                    <Routes>
                        <Route path="/" element={<HomePage/>}></Route>
                        <Route path="/responsibility" element={<Responsibility/>}></Route>
                        <Route path="/products" element={<Products/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/registration" element={<Reg/>}></Route>
                    </Routes>
                </Container>



            <footer
                style={{
                    backgroundColor: '#f5f5f5',
                    padding: '1rem',
                }}
            >
                <Typography variant="body2" align="center">
                    &copy; 2023 My Footer. All rights reserved.
                </Typography>
            </footer>
        </div>
    );
}

export default App;
