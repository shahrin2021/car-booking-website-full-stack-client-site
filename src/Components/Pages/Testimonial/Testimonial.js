import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../image/tes-2.png'
import img2 from '../../../image/tes-3.png'
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div>
           <Container>

<div className='testi-heading text-center my-5'>
    <h2 className='testi-title'>What Say Our Patient About us</h2>
    <p> we are always work for our patient satisfaction</p>
</div>
<Row>
    <Col lg={6}>
        <div className="testimonial-items">
            <div className='testi-img text-center'>
                <img src={img1} alt="" />
            </div> 
            <div className='testi-details'>
                <div className='text-center'>
                <h5>Jonarthon Bird</h5>
                <p>Teacher</p>
                </div>
                <p>
                As a smaller or local healthcare practice, you don’t have the same resources a massive hospital system has available to you. However, studies show that smaller practices provide a higher level of personalization and responsiveness to individual needs at a lower cost.
                </p>
            </div>
        </div>
    </Col>
    <Col lg={6}>
    <div className="testimonial-items">
            <div className='testi-img text-center'>
                <img src={img2} alt="" />
            </div> 
            <div className='testi-details'>
                <div className='text-center'> 
                <h5>Raima Rodrigus</h5>
                <p>Businesss women</p>
                </div>
                <p>
                But have you ever received a handwritten thank you note or letter recently? It adds a personal touch that technology simply can’t reproduce. That’s because it means the sender took the time to sit down, pick out their favorite pen, and pull out a sheet of nice paper and write you something.
                </p>
            </div>
        </div>
    </Col>
</Row>
</Container>
        </div>
    );
};

export default Testimonial;