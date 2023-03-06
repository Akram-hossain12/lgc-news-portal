import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
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
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className='mt-5'>
            <h1 className='text-primary'>Please Log In!</h1>
            <Form onSubmit={signInCliker}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
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