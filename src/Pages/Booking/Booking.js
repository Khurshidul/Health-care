import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Booking.css';
const Booking = () => {
    const {user} = useAuth()
    const { serviceId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [service, setService] = useState({});
    const { service_name, img, description } = service;
    useEffect(() => {
        fetch(`http://localhost:7000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:7000/myOrder',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('Booking Information Added Successfully')
                reset()
            }
        });
        
    }
    return (
        <div className="row">

            <div className="col-lg-8">
                <h4>{service_name}</h4>
                <img src={img} alt="" />
                <p>Description:{description}</p>
                
            </div>

            <div className="col-md-4">
                <div className="booking">
                    <h2 className="text-center text-primary mb-4">Booking Information</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
                        <input type="email" {...register("email")} placeholder="Email" defaultValue={user.email} />
                        <input type="text" {...register("tourplace")} placeholder="Tour place" defaultValue={service.service_name} />
                        <input type="text" {...register("address")} placeholder="Address" required />
                        <input type="number" {...register("phone")} placeholder="Phone number" required />
                        <input type="date" {...register("date")} placeholder="date" required />

                      
                        <input className="btn btn-primary order-submin" type="submit" value="Submit" />
                        

                    </form>
                    </div>
                </div>




            </div>



            );
};

            export default Booking;