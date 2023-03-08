import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const UpdeteProfile = () => {
    
    const {user}=useContext(AuthContext); 
    const nameRef = useRef(user.displayName);
    const photoURLRef = useRef(user.photoURL);
    const [name,setName]=useState(user.displayName);
    const [photoURL,setPhotoURL]=useState(user.photoURL);
    const navigate = useNavigate();

     console.log(name,photoURL);
    const hendelSubmit = (event)=>{
        event.preventDefault();
        setName(nameRef.current.value);
        setPhotoURL(photoURLRef.current.value);
         navigate('/profile')
    }
    return (
        <div className='mt-5'>
            <h3 className='text-center text-primary'>Updete your Profile</h3>
            <Form onSubmit={hendelSubmit }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user.email} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        You will never chenge your email!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} defaultValue={user.displayName} type="text" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user.photoURL} type="text" placeholder="photoURl" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Are You sure" />
                </Form.Group>
                <Button className='d-flex mx-auto' variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdeteProfile;