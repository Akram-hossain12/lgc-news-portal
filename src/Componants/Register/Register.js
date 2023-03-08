import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Register = () => {
    const {loginEmailWithPass,profileUpdeteUser,userVrifying  } =useContext(AuthContext);
    const [accept,setAccept]=useState(false)
    const [error,setError]=useState('');
    const createUserCliker =(event)=>{
               event.preventDefault();
               const form = event.target;
               const displayName =form.displayName.value;
               const photoURL =form.photoURL.value;
               const name = form.name.value;
               const email = form.email.value;
               const password =form.password.value;
               console.log(displayName,photoURL,name,email,password)
               loginEmailWithPass(email,password)
               .then(result=>{
                const user =result.user;
                console.log(user)
                setError('');
                form.reset();
                 clikerUpdeteProfile(name,photoURL);
                 clikerOfVarifing();
                 toast.success('please,verify your email')
               })
               .catch(error=>{
                console.error(error)
                setError( error.message)
               })
    }
    const clikerUpdeteProfile =(name,photoURL)=>{
        const profile ={displayName:name, photoURL:photoURL};
        profileUpdeteUser(profile)
        .then(()=>{})
        .catch(error=>{console.error(error)})

    }
    const clikerOfVarifing =()=>{
         userVrifying()
        .then(()=>{})
    }
    const acceptedCliker = event=>{
        setAccept(event.target.checked)
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
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-primary'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={acceptedCliker} type="checkbox" label={<>Accept<Link to='/tarms'> Trams and condition</Link></>}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accept}>
                    Registar
                </Button>
            </Form>
        </div>
    );
};

export default Register;