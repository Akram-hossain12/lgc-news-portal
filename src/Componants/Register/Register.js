import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Register = () => {
    const {loginEmailWithPass}=useContext(AuthContext);
    const createUserCliker =(event)=>{
               event.preventDefault();
               const form = event.target;
               const displayName =form.displayName.value;
               const name = form.name.value;
               const email = form.email.value;
               const password =form.password.value;
               console.log(displayName,name,email,password)
               loginEmailWithPass(email,password)
               .then(result=>{
                const user =result.user;
                console.log(user)
                form.reset();
               })
               .catch(error=>{
                console.error(error)
               })
    }
    return (
        <div className='mt-5'>
            <h1 className='text-center text-primary'>Please , Registar!</h1>
            <Form onSubmit={createUserCliker}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-primary'>First Name</Form.Label>
                    <Form.Control name='displayName' type="text" placeholder="your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-primary'>Last Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-primary'>photoURL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="photo url" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-primary'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-primary'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='text-primary' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registar
                </Button>
            </Form>
        </div>
    );
};

export default Register;