import React from 'react';
import './Expart.css';
const Expart = ({expart}) => {
    const {name, img, graduation, description} = expart;
    return (
        <div className="expart-doctor">
           <img src={img} alt="" />
           <h2>{name}</h2>
           <h4>{graduation}</h4>
           <p>{description}</p>
        </div>
    );
};

export default Expart;