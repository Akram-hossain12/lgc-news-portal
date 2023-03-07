import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const [error,setError]=useState('');
    const location = useLocation();
    const navigate =useNavigate()
    const from =location.state?.from?.pathname|| '/';
    const {signInEmailPass}=useContext(AuthContext);
    const signInCliker =(event)=>{
        event.preventDefault()
        const form =event.target;
        const email = form.email.value;
        const password =form.password.value;
        
        signInEmailPass(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            form.reset()
            setError("")
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.error(error)
            setError(error.message);
        })
    }
    return (
        <div className='mt-5'>
            <h1 className='text-primary'>Please Log In!</h1>
            <Form onSubmit={signInCliker}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />

                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Log in
                </Button>
            </Form>
        </div>
    );
};

export default Login;