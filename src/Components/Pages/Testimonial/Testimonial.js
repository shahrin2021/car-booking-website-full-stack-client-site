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
    <h2 className='testi-title'>What Say Our  customer About us</h2>
    <p> we are always work for our customer satisfaction</p>
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
                The company continued to work at its regular pace. In 1972, the P250 Urraco, the 400 GT Jarama, the 400 GT Espada and the P400 Miura SV were in full production. That year, in an attempt to improve sales that were frankly quite disappointing until then, the Jarama hand a 365-hp engine and was dubbed the Jarama S. In 1972, the Urraco, which had experienced several initial slowdowns, was finally put into production. Almost inevitably, the S version also arrived in October of that year. In this case, the goal
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
                The company continued to work at its regular pace. In 1972, the P250 Urraco, the 400 GT Jarama, the 400 GT Espada and the P400 Miura SV were in full production. That year, in an attempt to improve sales that were frankly quite disappointing until then, the Jarama hand a 365-hp engine and was dubbed the Jarama S. In 1972, the Urraco, which had experienced several initial slowdowns, was finally put into production. Almost inevitably, the S version also arrived in October of that year. In this case, the goal
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