/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import logo from '../../../../public/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';
const Header = () => {
    return (
        <header>
            <Container>
                <div className="text-center">
                    <img src={logo} alt="" />
                    <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <Button variant="danger">Danger</Button>
                    <Marquee className='text-danger' pauseOnHover={true} speed={50}>
                    I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </Container>
        </header>
    );
};

export default Header;