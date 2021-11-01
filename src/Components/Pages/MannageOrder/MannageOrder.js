import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import AllMannageOrder from '../AllMannageOrder/AllMannageOrder';
import './MannageOrder.css'

const MannageOrder = () => {

    const [allService , setAllService]= useState([]);

    const {id}=useParams()
console.log(allService)
    useEffect(()=>{
        fetch('https://ghoulish-plague-38489.herokuapp.com/getservices')
        .then(res=>res.json())
        .then(data=> {setAllService(data)
        console.log(data)
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
            const remaining = allService.filter(service=> service._id !== id);
            setAllService(remaining);
            alert('successfully deleted')
          }
        })
      }

      const newCart=allService.length;




    return (
        <div>
            <div className="mannage-order-banner">
            <NavLink style={{fontSize:'22px', marginRight:'8px',textDecoration:'none' ,color:'#fff'}} to='/home'>home</NavLink><span style={{fontSize:'25px', marginRight:'8px',color:'blue'}} >/</span><NavLink style={{fontSize:'22px', marginRight:'8px', textDecoration:'none' ,color:'#fff'}}to='/addservice'>services</NavLink>
            </div>
            <Container>
                <h2 className='text-success text-center mb-4'>Mannage All Order</h2>
                <h6 className='mb-2'>Total Order {newCart}</h6>
                <Row>
                    {
                       allService.map(service=><AllMannageOrder 
                        key={service?.setviceItem?.id} service={service}
                        handleDelete={handleDelete}
                       ></AllMannageOrder>) 
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MannageOrder;