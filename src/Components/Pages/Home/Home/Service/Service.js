import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {  useParams } from 'react-router';

const Service = (props) => {
   

   
    const {img , name, price , review ,id} =props.service
    return (
    <Col>
    
        <Card style={{ width: '20rem', marginBottom:'30px' }}>
            <Card.Img className='image' variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <h6>Price : {price}</h6>
                    <p>{review}</p>
                </Card.Text>
                
                <div className='text-center'>
                <NavLink className='me-3'  to ={`service/${id}`}>
                <button className='btn btn-danger'>Booking now</button>
                </NavLink>
                <NavLink to={`/update/${props?.service?._id}`}>
                <button className='btn btn-danger'>Update</button>
                </NavLink>
                </div>
               
            </Card.Body>
        </Card>
   
            
    </Col>
    );
};

export default Service;