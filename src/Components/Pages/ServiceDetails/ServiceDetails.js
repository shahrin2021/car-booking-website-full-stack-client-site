import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../Hook/useAuth';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './ServicesDetails.css'

const ServiceDetails = () => {
    const {id} = useParams()
    const [services , setServices] = useState([]);

    const {user ,isLoading} = useAuth();
    const nameRef= useRef();
    const emailRef= useRef();
    const phoneRef= useRef();
    const history = useHistory()

    useEffect(()=>{
        fetch('http://localhost:5000/carsercives')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[id])

    const getService = services.find(service=> service.id == id)

  
    const onSubmit = (e) => {
        const name= nameRef.current.value;
        const email = emailRef.current.value;
        
        const newService = { name:name, email:email, setviceItem:getService }
          console.log(newService)  
          axios.post('http://localhost:5000/getServices', newService )
        .then(res=> {
            if(res.data.insertedId){
             alert('successfully user added')
                
            }

            console.log(res.data)
        })
        e.preventDefault()
    }

   

    

    if(isLoading){
        return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" variant="danger" />
        </div>);
        
    }
    return (
        <div>
            <Container>
                <Row> 
                    <Col lg={8}>
                        <div>
                            <h3>{getService?.name}</h3>
                        </div>
                        <div>
                            <img src={getService?.img} alt="" />
                        </div>
                        <div>
                            {getService?.overview}
                        </div>
  
                    </Col>
                    <Col lg={4}  >
                        <div className='confirm-booking'>
          
                    <form action="" onSubmit={onSubmit}>
                        <div>
                            <input ref={nameRef} className='w-100 mb-3'  type="text" name="" id=""  value={user.displayName} />
                        </div>
                        <div>
                            <input ref={emailRef}  className='w-100 mb-3'  type="email" name="" id="" value={user.email}/>
                        </div>
                       
                       <button className='btn btn-success'>Booking confirm</button>
                        
                    </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;