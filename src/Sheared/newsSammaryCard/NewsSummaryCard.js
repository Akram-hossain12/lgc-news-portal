import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBeer,FaShareAltSquare,FaRegBookmark,FaEye} from 'react-icons/fa';


const NewsSummaryCard = ({news}) => {

    const {_id,details,title,image_url,author,total_view,rating}=news;
    return (
        <Card className="mt-5">
        <Card.Header className=' d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                roundedCircle
                src={author?.img}
                style={{height:'60px'}}
                >
                </Image>
                <div>
                    <p className="mb-0">{author?.name}</p>
                    <p>{author?.published_date}</p>
                </div>
            </div>
            <div className='d-flex'>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAltSquare></FaShareAltSquare>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
           {
            details.length > 250 ?
            <>{details.slice(0,250) + "...."}<Link to={`/news/${_id}`}>Read More</Link></>
           : <p>{details}</p>
        }
          </Card.Text>
        
        </Card.Body>
        <Card.Footer className="text-muted">
            <div className='d-flex justify-content-between'>
                <div>
                  <p>Rating: {rating.number}</p>
                </div>
                <div>
                    <p>
                       <FaEye></FaEye>  {total_view}
                    </p>
                </div>
            </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCard;