import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const {user }= useContext(AuthContext);
    return (
        <div className='mx-auto mt-5 border border-info rounded' style={{height:'400px',width:'400px',padding:'20px',}}>
            <h4 className='text-center mt-2 text-success'>Your Profile</h4>
             <Image className=''
             roundedCircle style={{height:'120px'}}
             src={user?.photoURL}></Image>
             <h4 className='mt-2'>Name : {user?.displayName}</h4>
             <h5> Email : {user?.email}</h5>
             <h6 className='mb-3'>EmailVerifi status :{user?.emailVerified}</h6>
             <Link className='text-decoration-none fs-3' to='/updeteProfile'>Updete Profile</Link>
        </div>
    );
};

export default Profile;