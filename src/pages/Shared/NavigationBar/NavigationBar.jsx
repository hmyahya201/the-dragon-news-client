/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/category/0">Home</Nav.Link>
                            <Nav.Link to="about">About</Nav.Link>
                            <Nav.Link >Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <div>
                                {
                                    user?(<>
                                    <div className='d-flex align-items-center gap-2'>
                                        <FaUserAlt style={{fontSize:"30px"}}/>
                                        <p className='mt-2'>{user.displayName}</p>
                                        <Link><Button variant="secondary">Log Out</Button></Link>
                                    </div>
                                    </>):<Link to="/login"><Button variant="secondary">Login</Button></Link>
                                }
                            </div>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;