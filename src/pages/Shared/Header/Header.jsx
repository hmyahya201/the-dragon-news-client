/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../../public/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Container>
                <div className="text-center">
                    <img src={logo} alt="" />
                    <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex'>
                    <Button variant="danger">Danger</Button>
                    <Marquee className='text-danger' pauseOnHover={true} speed={50}>
                    I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/about">About</Nav.Link>
                            <Nav.Link to="/career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='mt-2' to="/profile">profile</Nav.Link>
                            <Nav.Link to="/login">
                            <Button variant="secondary">Secondary</Button>
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;