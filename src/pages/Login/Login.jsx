/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form  } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';


const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location?.state?.from?.pathname || "/category/0";

    const loginHandler = (event)=>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
       loginUser(email, password)
       .then(result=>{
        alert("login Success")
        form.reset()
        navigate(from, {replace: true})
       })
       .catch(error=>{
        console.log(error.message)
       })
    }
    return (
        <Container className='w-50 max-auto my-5 shadow-sm p-5'>
            <h2>Please Login</h2>
            <Form onSubmit={loginHandler }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-success">
                 
                </Form.Text>
                <Form.Text className="text-danger">
                 
                </Form.Text>
                <Form.Text className='d-block'>
                 New in this website? Please <Link to="/register">Register</Link>
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;