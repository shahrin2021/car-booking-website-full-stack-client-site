import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Myorder from '../Myorder/Myorder';
import './OrderReview.css'

const OrderReview = (props) => {
    const [services, setServices] = useState([]);
    const [cart , setCart]=useState();
    const {user} = useAuth()
    
    useEffect(()=>{
        fetch(`http://localhost:5000/getservices/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
             setServices(data)
            
             
            
            })
    },[]);

const handleDelete = (id)=>{
      const url = `http://localhost:5000/getservices/${id}`;
      fetch(url,{
        method: "DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount > 0){
          const remaining = services.filter(service=> service._id !== id);
          setServices(remaining);
          alert('successfully deleted')
        }
      })
    };

    const newCart = services.length;
 




    
    return (
        <div>
            <div className='order-banner'>
                <NavLink style={{fontSize:'22px', marginRight:'8px',textDecoration:'none' ,color:'#fff'}} to='/home'>home</NavLink><span style={{fontSize:'25px', marginRight:'8px',color:'blue'}} >/</span><NavLink style={{fontSize:'22px', marginRight:'8px', textDecoration:'none' ,color:'#fff'}}to='/addservice'>services</NavLink>
            </div>
            <Container>
                <h2 className= ' text-center mb-4 text-danger'>My Order</h2>
                <h6 className='mb-2'> Total order: {newCart}</h6>
                <Row>
                    {
                       services.map(service=> <Myorder 
                        key={service?.setviceItem?.id} service={service} handleDelete={handleDelete}
                        ></Myorder>)
                    }
                </Row>
            </Container>
           
        </div>
    );
};

export default OrderReview;

