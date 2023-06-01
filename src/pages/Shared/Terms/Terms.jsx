/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Our Terms $ Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam eveniet iure, nihil in aliquam commodi molestias pariatur. Impedit, rem excepturi vitae labore eveniet debitis? Nulla esse atque molestiae? Cum incidunt repellendus eius adipisci eligendi optio, ea quam facilis iste consectetur, tempora at est ut maiores voluptate. Repellat, animi aperiam?</p>

            <p>Back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;