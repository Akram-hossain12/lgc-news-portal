import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Sheared/Header/Header';
import LeaftSideNav from '../../Sheared/LeaftSideNav/LeaftSideNav';
import RightSideNav from '../../Sheared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3' className='d-none d-lg-block'>
                        <LeaftSideNav></LeaftSideNav>
                    </Col>
                    <Col lg='7'>
                       <Outlet></Outlet>
                    </Col>
                    <Col lg='2'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
         
        </div>
    );
};

export default Main;