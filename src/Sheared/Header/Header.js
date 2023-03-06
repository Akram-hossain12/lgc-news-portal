import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                    <Navbar.Brand className='text-bg' href="#home"> <Link className='text-decoration-none fs-2' to='/'>LGC <span> NewsPortel </span> </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                              
                                  <Nav.Link className='fs-5' href="#home">Home</Nav.Link>
                                   <Nav.Link className='fs-5' href="#link">Link</Nav.Link>

                                   
                          
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                              {
                              user?.uid ?  
                                 <>
                                 <span> {user?.displayName}</span>
                                 <Button onClick={logOutCliker}>Log out</Button>
                                </>:
                                <>
                                <Link className='mx-4 text-decoration-none fs-5' to='/login'>Log in</Link>
                                <Link className='text-decoration-none fs-5' to='/register'>Registar</Link>
                                </>
                                }
                               
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                   user?.photoURL ? <Image roundedCircle style={{height:'40px'}} src={user?.photoURL}></Image>:
                                   <FaUser></FaUser>
                                }
                            </Nav.Link>
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