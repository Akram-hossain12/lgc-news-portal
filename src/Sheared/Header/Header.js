import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import LeaftSideNav from '../LeaftSideNav/LeaftSideNav';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);
  
    const logOutCliker = ()=>{
         logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    return (
        <div className='mb-6'>
            <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <div className='text-bg fw-bold' href="#home"> <Link className='text-decoration-none fs-2' to='/'>LGC <span> NewsPortel </span> </Link> </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                              
                                  <Nav.Link className='fs-5' >Home</Nav.Link>
                                   <Nav.Link className='fs-5'>Link</Nav.Link>
                        </Nav>
                        <Nav>
                            <>
                              {
                                  user?.uid ?  
                                <> 
                                 <span className='fs-5 d-flex align-items-center' > {user?.displayName}</span>
                                 <Button className='mx-5' onClick={logOutCliker}>Log out</Button>
                                </>:
                                <>
                                <Link className='mx-4 text-decoration-none fs-5' to='/login'>Log in</Link>
                                <Link className='text-decoration-none fs-5' to='/register'>Registar</Link>
                                </>
                                }
                               
                            </>
                            <Link to='/profile' className='mx-3'>
                                {
                                   user?.photoURL ? <Image roundedCircle style={{height:'40px'}} src={user?.photoURL}></Image>:
                                   <FaUser></FaUser>
                                }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeaftSideNav></LeaftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; <h1>this is header</h1>