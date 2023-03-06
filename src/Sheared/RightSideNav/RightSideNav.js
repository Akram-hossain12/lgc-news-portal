import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGoogle, FaGithub,FaTwitter,FaTwitch,FaWhatsapp,FaVoicemail } from 'react-icons/fa';
import BrandCarusel from '../BrandCarusel/BrandCarusel';


const RightSideNav = () => {
    return (
        <div className='mt-5'>
            <ButtonGroup vertical>
                <Button className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle>  Log in With Google</Button>
                <Button className='mb-3' variant="outline-dark"> <FaGithub></FaGithub>  Log in With GitHub</Button>
            </ButtonGroup>
            <div className='mb-4'>
                <h4 className='text-primary'>Also Find Us</h4>
            </div>
            <ListGroup>
                <ListGroup.Item className='mb-3'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-3'> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-3'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-3'> <FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                <ListGroup.Item className='mb-3'> <FaVoicemail></FaVoicemail> Voicemail</ListGroup.Item>
            </ListGroup>
            <div>
                <BrandCarusel></BrandCarusel>
            </div>
        </div>

    );
};

export default RightSideNav;