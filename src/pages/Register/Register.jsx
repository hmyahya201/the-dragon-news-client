/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)
    
    const registerHandler = (event)=>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked);
    }
   
    return (
        <Container className='w-50 max-auto my-5 shadow-sm p-5'>
            <h2>Please Register</h2>
            <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" />
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
                <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
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