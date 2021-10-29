import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, allServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/services')
        .then(res => res.json())
        .then(data => allServices(data));
    },[])
    return (
        <div>
            <h1 className="services text-primary"><u>Our Services</u></h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                    key = {service.id}
                    service = {service}
                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;