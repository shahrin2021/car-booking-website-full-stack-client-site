import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './AddService.css'
const AddService = () => {
    const nameRef = useRef()
    const imgRef = useRef()
    const idRef = useRef()
    const priceRef = useRef()
    const overviewRef = useRef()
    const reviewRef = useRef()
    const clintRef = useRef()



   
    const handleSubmit = e =>{
        const name= nameRef.current.value;
        const id = idRef.current.value;
        const img= imgRef.current.value;
        const overview =overviewRef.current.value;
        const review = reviewRef.current.value;
        const client = clintRef.current.value;

        const newService= { id: id, name: name, img:img, overview: overview, review:review, 
            client:client }
        fetch('https://ghoulish-plague-38489.herokuapp.com/carsercives', {
            method: "POST", 
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(newService)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
             alert('successfully user added')
                
            }
            console.log(data)
        })
        e.preventDefault()
    };
    return (<div>
        <h2 className='text-center'>Pleace add new service</h2>
        
        <div className='service-add-form'>
        <div className='form-area'>
          <form onSubmit={handleSubmit}>
          <input className='mb-2' ref ={idRef} type="number"   placeholder='id'/>
        <input ref={nameRef}  placeholder='name' />
        <input ref={imgRef}  placeholder='img url'/>
        <input ref={priceRef} type="number"  placeholder='price' />
        <textarea ref={overviewRef} id="" cols="30" rows="10"  placeholder='overview'/>
        <input ref={reviewRef} type="number"  placeholder='review'/>
        <input  ref={clintRef} type="number" placeholder='client'/>
        
      <input className='input-btn w-25 m-auto' type="submit" value='Add Service' />
    </form>
        </div>
        </div>
    

        </div>
    );
};

export default AddService;