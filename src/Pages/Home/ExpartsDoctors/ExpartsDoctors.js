import React, { useState, useEffect } from 'react';
import Expart from '../Expart/Expart';
import './ExpartsDoctors.css';

const ExpartsDoctors = () => {
    const [exparts, setExparts] = useState([]);
    useEffect(() => {
        fetch('./exparts.json')
            .then(res => res.json())
            .then(data => setExparts(data));
    }, [])
    return (
        <div>
            <h1>Our Exparts Doctors</h1>
            <div className="doctors-portal">
                <div className="doctors-container">
                    {
                        exparts.map(expart => <Expart
                            expart={expart}
                        ></Expart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ExpartsDoctors;