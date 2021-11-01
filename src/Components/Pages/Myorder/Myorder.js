import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Myorder = (props) => {
    const {name, email, setviceItem ,price,_id} = props.service;
    // const {handleDelete}=props.handleDelete;

    

    return (
     
       
         <Col lg={4}>
         <Card style={{ width: '22rem' ,marginBottom:'30px'}}>
  <Card.Img style={{height:'200px'}} variant="top" src={setviceItem?.img} />
  <Card.Body>
    <Card.Title>{setviceItem?.name}</Card.Title>
    <Card.Text>
      <p>User Name: {name}</p>
      <p>Email : {email}</p>
      <p>OrderId: {setviceItem?._id}</p>
      <p>Price: {setviceItem?.price}</p>
    </Card.Text>
    <button className='btn btn-warning' onClick={()=>props.handleDelete(_id)} variant="primary">Delete</button>
  </Card.Body>
</Card>
         
 </Col>
 

       
    );
};

export default Myorder;