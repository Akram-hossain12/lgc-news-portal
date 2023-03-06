import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import {FaEye} from 'react-icons/fa';

const News = () => {
    const categoryNews = useLoaderData();

    const {image_url, details,title,rating,author,category_id}=categoryNews;
    return (
        <div>
            <Card className='mt-5'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <p>Author Name: {author?.name}</p>
                        <p>Date: {author?.published_date}</p>
                       <p><FaEye></FaEye> {rating.number}</p> 
                    </div>
                    <Card.Text>
                       <p>{details}</p>
                    </Card.Text>
                    <Link to={`/catagoris/${category_id}`}>
                      <Button variant="primary">This Category News</Button> 
                    </Link>
                 
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;