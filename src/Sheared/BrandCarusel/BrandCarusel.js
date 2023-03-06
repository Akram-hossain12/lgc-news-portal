import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../assets/Brand/Brand1.png';
import brand2 from '../../assets/Brand/Brand2.png';
import brand3 from '../../assets/Brand/Brand3.png'

const BrandCarusel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarusel;