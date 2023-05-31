/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Fotter/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container className='my-4'>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
            
        </div>
    );
};

export default Main;