import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateService.css'

const UpdateService = () => {
    const {id} = useParams();
    const [service, setService] = useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/carsercives/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{

            setService(data)
            console.log(data)
        } )
    },[])

    const handleNameChange = e=>{
        const serviceName= e.target.value;
        const UpdateServiceName= {name: serviceName,price: service.price}
        setService(UpdateServiceName)
    }

    const handlePriceChange=e =>{
        const servicePrice= e.target.value;
        const updateServiceprice= {name: service.name, price:servicePrice }
        setService(updateServiceprice)
    };

    const handleSubmit= e=>{
        const url = `http://localhost:5000/carsercives/${id}`;
        fetch(url ,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                alert('updated successfully')
                setService({})
            }
            console.log(data)
        })



        e.preventDefault()
    }
    return (
        <div>
             <div className='update-form'>

            
            <h3 className='text-center text-success my-4'>Please update service</h3>
            <form className=' text-center' action="" onSubmit={handleSubmit}>
                <input className='d-block w-75 p-1 mb-3 mx-auto' type="text"   onChange={handleNameChange} value={service.name || ''} placeholder='name' />
                <input className='d-block w-75 p-1 mb-3 mx-auto'type="number" onChange={handlePriceChange} value={service.price || ''}placeholder='price' />
                <input className='mx-auto btn btn-primary' type="submit" value="Update" />
            </form>
            </div>
        </div>
    );
};

export default UpdateService;