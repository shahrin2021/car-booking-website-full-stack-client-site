import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import useAuth from '../Hook/useAuth';
import Myorder from '../Myorder/Myorder';
import './OrderReview.css'

const OrderReview = (props) => {
    const [services, setServices] = useState([]);
    const [cart , setCart]=useState();
    const {user} = useAuth()
    
    useEffect(()=>{
        fetch(`https://ghoulish-plague-38489.herokuapp.com/getservices/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
             setServices(data)
            
             
            
            })
    },[]);

const handleDelete = (id)=>{
      const url = `https://ghoulish-plague-38489.herokuapp.com/getservices/${id}`;
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
    
       let  total = 0;

        for(const item of services){
            total = total + parseInt(item.setviceItem.price) 
        }

        const tax = total *.1;
        const totalAmount= total + tax;
   
    

    
    return (
        <div>
            <div className='order-banner'>
                <NavLink style={{fontSize:'22px', marginRight:'8px',textDecoration:'none' ,color:'#fff'}} to='/home'>home</NavLink><span style={{fontSize:'25px', marginRight:'8px',color:'blue'}} >/</span><NavLink style={{fontSize:'22px', marginRight:'8px', textDecoration:'none' ,color:'#fff'}}to='/services'>services</NavLink>
            </div>
            <Container>
                <h2 className= ' text-center mb-4 text-danger'>My Order</h2>
                
                
                <div className=' price-area'> 
                <h3 className='text-center'>Price details</h3>
                    <ul>
                        <li>Total orders: {newCart}</li>
                        <li> Total Price(without tax) : {total} .Tk</li>
                        <li>Tax : {tax} .Tk</li>
                        <li className='last-child'>Totol (with tax) : {totalAmount} .Tk</li>
                    </ul>

                   
                    
                </div>
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

