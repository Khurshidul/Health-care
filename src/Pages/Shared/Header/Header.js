import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import './Header.css';
const Header = () => {
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
                <div>
                    <Button className="login" variant="outline-primary">Login</Button>
                    <Button className="register" variant="outline-primary">Register</Button>
                </div>

                <Navbar className="navbar-menu" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/home#booking">Booking</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;