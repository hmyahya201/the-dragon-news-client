/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Fotter/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2>Main container</h2>
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