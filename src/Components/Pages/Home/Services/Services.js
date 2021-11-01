import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://ghoulish-plague-38489.herokuapp.com/carsercives')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className='mb-5'>
            <Container>
                <h2 className='text-center mb-5'>Our Best services </h2>
                <Row>
                    {
                      services.map(service=><Service key= {service.id} service={service}></Service>)  
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;