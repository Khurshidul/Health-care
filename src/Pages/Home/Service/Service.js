import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
const Service = ({service}) => {
    const {id,name, description} = service;
    return (
        <div className="single-service">
            <h1><i class="fas fa-heartbeat"></i></h1>
            <br /><br />
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-primary">Book Admission to check Up {name}</button>
            </Link>
        </div>
    );
};

export default Service;