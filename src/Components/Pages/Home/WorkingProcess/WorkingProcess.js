import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icon1  from '../../../../image/offer-icon1.png';
import icon2  from '../../../../image/offer-icon2.png';
import icon3  from '../../../../image/offer-icon3.png';
import icon4  from '../../../../image/offer-icon4.png';
import './WorkingProcess.css'
const WorkingProcess = () => {
    return (
        <div className='working-area my-5'>
            <Container>
                <Row>
                    <Col lg={3}>
                    <div className="work-item d-flex justify-content-center align-items-center">
                        <div className="work-icon">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="working-text">
                        <h5>Best Price Guaranteed</h5>
                            <p>we provide our customer to best price guaranteed</p>
                        </div>
                    </div>
                    
                    </Col>
                    <Col lg={3}>
                    <div className="work-item d-flex justify-content-center align-items-center">
                        <div className="work-icon">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="working-text">
                        <h5>24/7 Customer Care</h5>
                            <p>we provide our customer to best price guaranteed</p>
                        </div>
                    </div>
                    
                    </Col>
                    <Col lg={3}>
                    <div className="work-item d-flex  justify-content-center align-items-center">
                        <div className="work-icon">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="working-text">
                        <h5>Home Pickups</h5>
                            <p>we provide our customer to best price guaranteed</p>
                        </div>
                    </div>
                    
                    </Col>
                    <Col lg={3}>
                    <div className="work-item d-flex align-items-center justify-content-center">
                        <div className="work-icon">
                            <img src={icon4} alt="" />
                        </div>
                        <div className="working-text">
                            <h5>Easy Bookings</h5>
                            <p>we provide our customer to best price guaranteed</p>
                        </div>
                    </div>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkingProcess;