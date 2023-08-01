import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json').then((res)=>res.json()).then((data)=>{setServices(data);});
    },[])
    return (
        <div  className='mt-4'>
            <div className='text-center'>
            <h1 className='text-2xl font-bold text-orange-500'>Our Services</h1>
            <h2 className=' text-3xl font-medium text-white'> Our service Area You Might want to explore</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in vitae quod itaque 
            </p>
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                
                  {
                  
                  services.map(service=><ServiceCard key={service._id} service={service} ></ServiceCard>)
                  
                  }
                
            </div>
        
        </div>
    );
};

export default Services;