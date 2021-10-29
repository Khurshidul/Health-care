import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <div className="container-fluid header-media-address">
                <div className="header-address-media-part">
                    <p><i className="fas fa-hospital"></i> <span className="D.T-Road">D.T Road</span> <span className="sagorika">Sagorika, Pahartali, <br /> </span> <span className="city">Chittagong, Bangladesh</span> </p>

                    <p className="header-media">
                        Follow Us:
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>

                    </p>
                </div>
            </div>


            <div className="navbar-top">
                <div className="logIn-logOut">
                    {
                        user?.email ?
                            <Button onClick={logOut} className="logout" variant="outline-primary">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">
                                <Button className="login" variant="outline-primary">Login</Button>
                            </Nav.Link>
                    }

                    <Nav.Link as={Link} to="/register">
                        <Button className="register" variant="outline-primary">Register</Button>

                    </Nav.Link>

                </div>
                <div>
                    <Navbar.Text>
                        <a className="login-user" href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </div>

                <div>
                    <Navbar className="navbar-menu" collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                    <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                                    <Nav.Link as={Link} to="/manageService">Manage Service</Nav.Link>
                                    <Nav.Link as={Link} to="/news">News</Nav.Link>
                                   
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

        </div>
    );
};

export default Header;