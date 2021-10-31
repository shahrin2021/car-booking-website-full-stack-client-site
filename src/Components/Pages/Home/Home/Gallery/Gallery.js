import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1  from  '../../../../../image/1.jpg'
import img2 from  '../../../../../image/2.jpg'
import img3  from  '../../../../../image/3.jpg'
import img4 from  '../../../../../image/4.jpg'
import img5  from  '../../../../../image/5.jpg'
import img6  from  '../../../../../image/6.jpg'
import img7  from  '../../../../../image/7.jpg'
import img8  from  '../../../../../image/8.jpg'
import './Gallery.css'


const Gallery = () => {
    return (
        <div className='gallery-area'>
            <Container>

                <h2 className='text-center mb-5'>Our car Gallery </h2>
               <Row>
                   <Col lg={3} md={4} sm={6}>
                   <div className='gallery mb-3'>
                       <img src={img1} alt="" />
                   </div>
                   </Col>

                   <Col lg={3} md={4} sm={6}>
                   <div className='gallery mb-3'>
                       <img src={img2} alt="" />
                   </div>
                   </Col>

                   <Col lg={3} md={4} sm={6}>
                   <div className='gallery mb-3'>
                       <img src={img3} alt="" />
                   </div>
                   </Col>

                   <Col lg={3} md={4} sm={6}>
                   <div className='gallery mb-3'>
                       <img src={img4} alt="" />
                   </div>
                   </Col>
                   <Col lg={3} md={4} sm={6}>
                   <div className='gallery mb-3'>
                       <img src={img8} alt="" />
                   </div>
                   </Col>
                   <Col lg={3} md={4} sm={6}>
                   <div className='gallery mb-3'>
                       <img src={img6} alt="" />
                   </div>
                   </Col>
                   <Col lg={3} md={4} sm={6}>
                   <div className='gallery mb-3'>
                       <img src={img7} alt="" />
                   </div>
                   </Col>
                   <Col lg={3} md={4} sm={6}>
                   <div className='gallery mb-3'>
                       <img src={img8} alt="" />
                   </div>
                   </Col>
                   

                </Row> 
            </Container>
        </div>
    );
};

export default Gallery;