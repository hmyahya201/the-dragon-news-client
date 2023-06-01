/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
    const {user, logOutUser} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOutUser()
    }
    return (
            <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='position-relative'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/category/0">Home</Nav.Link>
                            <Nav.Link to="about">About</Nav.Link>
                            <Nav.Link >Career</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        <Nav className='position-absolute top-0 end-0 mt-2 me-3'>
                            <div>
                                {
                                    user?(<>
                                    <div className='d-flex align-items-center gap-2'>
                                        <FaUserAlt style={{fontSize:"30px"}}/>
                                        <p className='mt-2'>{user.email}</p>
                                        <Link><Button onClick={handleLogOut} variant="secondary">Log Out</Button></Link>
                                    </div>
                                    </>):<Link to="/login"><Button variant="secondary">Login</Button></Link>
                                }
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
    );
};

export default NavigationBar;