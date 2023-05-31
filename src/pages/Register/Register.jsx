/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-50 max-auto my-5 shadow-sm p-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="accept" label="Check me out" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-success">
                 
                </Form.Text>
                <Form.Text className="text-danger">
                 
                </Form.Text>
                <Form.Text className='d-block'>
                 Already have an acount? Please <Link to="/login">Login</Link>
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;